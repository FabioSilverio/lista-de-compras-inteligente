"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  searchProducts,
  searchMeatByCookingMethod,
  meatSuggestions,
  Product,
  PriceSource,
  MeatSuggestion,
} from "@/data/products";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  checked: boolean;
  prices?: PriceSource[];
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function Home() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [customName, setCustomName] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [listTitle, setListTitle] = useState("Minha Lista de Compras");
  const [showMeatSuggestions, setShowMeatSuggestions] = useState(false);
  const [selectedMeatMethod, setSelectedMeatMethod] = useState("");
  const [meatMethodResults, setMeatMethodResults] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("shopping-list-items");
      if (saved) setItems(JSON.parse(saved));
      const savedTitle = localStorage.getItem("shopping-list-title");
      if (savedTitle) setListTitle(savedTitle);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("shopping-list-items", JSON.stringify(items));
      localStorage.setItem("shopping-list-title", listTitle);
    } catch {}
  }, [items, listTitle]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const results = searchProducts(term);
      setSearchResults(results);
      setShowResults(true);
      setShowCustom(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
      setShowCustom(false);
    }
  }, []);

  const handleMeatMethodSelect = useCallback((cookingMethod: string) => {
    setSelectedMeatMethod(cookingMethod);
    const cuts = searchMeatByCookingMethod(cookingMethod);
    setMeatMethodResults(cuts);
    setShowMeatSuggestions(false);
  }, []);

  const addItem = useCallback(
    (product: Product | null, customName?: string) => {
      const newItem: ShoppingItem = {
        id: Date.now().toString(),
        name: product ? product.name : customName || searchTerm,
        quantity: 1,
        unit: "un",
        checked: false,
        prices: product?.prices,
      };

      setItems((prev) => [...prev, newItem]);
      setSearchTerm("");
      setSearchResults([]);
      setShowResults(false);
      setShowCustom(false);
      setCustomName("");
    },
    [searchTerm]
  );

  const addMeatItem = useCallback((cut: string) => {
    const product = searchProducts(cut)[0];
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: cut + " (kg)",
      quantity: 1,
      unit: "kg",
      checked: false,
      prices: product?.prices || undefined,
    };
    setItems((prev) => [...prev, newItem]);
    setMeatMethodResults([]);
    setSelectedMeatMethod("");
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggleCheck = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, delta: number) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
      );
    },
    []
  );

  const totalItems = items.length;
  const checkedItems = items.filter((i) => i.checked).length;

  const totalEstimated = items.reduce((sum, item) => {
    if (item.prices && item.prices.length > 0) {
      return sum + item.prices[0].price * item.quantity;
    }
    return sum;
  }, 0);

  const buildReceiptElement = useCallback(() => {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = [
      "position: fixed",
      "top: -10000px",
      "left: -10000px",
      "width: 380px",
      "padding: 24px 20px",
      "background: #ffffff",
      "color: #111111",
      "font-family: 'Courier New', Courier, monospace",
      "font-size: 13px",
      "line-height: 1.5",
      "box-sizing: border-box",
    ].join(";");

    const date = new Date();
    const dateStr = date.toLocaleDateString("pt-BR");
    const timeStr = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    const dashLine = "-".repeat(38);
    const dotLine = ". ".repeat(19);

    const header = `
      <div style="text-align:center;margin-bottom:8px;">
        <div style="font-size:16px;font-weight:bold;letter-spacing:2px;">${escapeHtml(listTitle.toUpperCase())}</div>
        <div style="font-size:11px;margin-top:4px;color:#444;">*** LISTA DE COMPRAS ***</div>
      </div>
      <div style="font-size:11px;color:#333;margin-bottom:6px;">
        Data: ${dateStr} &nbsp;&nbsp; Hora: ${timeStr}<br/>
        Itens: ${items.length} &nbsp;&nbsp; Marcados: ${checkedItems}
      </div>
      <div style="font-family:monospace;color:#000;letter-spacing:1px;">${dashLine}</div>
      <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:11px;margin:6px 0;">
        <span>ITEM</span>
        <span>QTD x PRECO &nbsp; SUBTOTAL</span>
      </div>
      <div style="font-family:monospace;color:#000;letter-spacing:1px;">${dashLine}</div>
    `;

    const itemRows = items
      .map((item) => {
        const price = item.prices && item.prices.length > 0 ? item.prices[0].price : 0;
        const subtotal = price * item.quantity;
        const checkMark = item.checked ? "[X]" : "[ ]";
        const priceStr = price > 0
          ? `${item.quantity}x R$${price.toFixed(2)}`
          : `${item.quantity}x  -- `;
        const subtotalStr = price > 0 ? `R$${subtotal.toFixed(2)}` : "-- ";

        return `
          <div style="margin:6px 0;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
              <div style="flex:1;font-size:13px;${item.checked ? "text-decoration:line-through;color:#777;" : ""}">
                ${checkMark} ${escapeHtml(item.name)}
              </div>
              <div style="font-size:12px;text-align:right;white-space:nowrap;">
                ${priceStr}<br/>
                <strong>${subtotalStr}</strong>
              </div>
            </div>
          </div>
        `;
      })
      .join(`<div style="font-family:monospace;color:#999;font-size:9px;">${dotLine}</div>`);

    const footer = `
      <div style="font-family:monospace;color:#000;letter-spacing:1px;margin-top:8px;">${dashLine}</div>
      <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:14px;margin:8px 0;">
        <span>TOTAL ESTIMADO</span>
        <span>R$ ${totalEstimated.toFixed(2)}</span>
      </div>
      <div style="font-family:monospace;color:#000;letter-spacing:1px;">${dashLine}</div>
      <div style="text-align:center;margin-top:14px;font-size:11px;color:#444;line-height:1.6;">
        ** OBRIGADO E BOAS COMPRAS! **<br/>
        Precos baseados na melhor oferta<br/>
        de cada item na base de dados.<br/><br/>
        ${"*".repeat(30)}<br/>
        ${dateStr} ${timeStr}<br/>
        ${"*".repeat(30)}
      </div>
    `;

    wrapper.innerHTML = header + itemRows + footer;
    document.body.appendChild(wrapper);
    return wrapper;
  }, [items, listTitle, checkedItems, totalEstimated]);

  const exportImage = useCallback(async () => {
    if (items.length === 0) return;
    const el = buildReceiptElement();
    try {
      const canvas = await html2canvas(el, {
        backgroundColor: "#ffffff",
        scale: 3,
        logging: false,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `lista-compras-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Erro ao exportar PNG:", err);
      alert("Erro ao exportar imagem. Tente novamente.");
    } finally {
      document.body.removeChild(el);
    }
  }, [items.length, buildReceiptElement]);

  const exportPDF = useCallback(async () => {
    if (items.length === 0) return;
    const el = buildReceiptElement();
    try {
      const canvas = await html2canvas(el, {
        backgroundColor: "#ffffff",
        scale: 3,
        logging: false,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const w = canvas.width / 3;
      const h = canvas.height / 3;
      const pdf = new jsPDF({
        orientation: h > w ? "portrait" : "landscape",
        unit: "px",
        format: [w, h],
      });
      pdf.addImage(imgData, "PNG", 0, 0, w, h);
      pdf.save(`lista-compras-${Date.now()}.pdf`);
    } catch (err) {
      console.error("Erro ao exportar PDF:", err);
      alert("Erro ao exportar PDF. Tente novamente.");
    } finally {
      document.body.removeChild(el);
    }
  }, [items.length, buildReceiptElement]);

  return (
    <div className="min-h-screen bg-[#e8dcc8] py-4 px-2 sm:py-8 sm:px-4">
      <div className="max-w-2xl mx-auto">
        {/* Controls bar */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          <input
            type="text"
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
            className="text-xl font-bold text-center bg-transparent border-b-2 border-dashed border-amber-800/50 text-amber-900 outline-none px-2 py-1"
            placeholder="Título da lista"
          />
        </div>

        {/* Search box */}
        <div className="relative mb-4" ref={searchRef}>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchTerm.length >= 2 && setShowResults(true)}
              placeholder="Buscar produto..."
              className="flex-1 px-4 py-3 rounded-lg border-2 border-amber-700/30 bg-white/90 text-amber-900 placeholder-amber-600/60 outline-none focus:border-amber-600 font-medium"
            />
            <button
              onClick={() => setShowMeatSuggestions(!showMeatSuggestions)}
              className="px-4 py-3 rounded-lg bg-amber-800 text-white font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap text-sm"
            >
              Carnes
            </button>
          </div>

          {/* Meat suggestions dropdown */}
          {showMeatSuggestions && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-amber-200 z-20 overflow-hidden">
              <div className="p-3 bg-amber-100 font-semibold text-amber-900 text-sm border-b border-amber-200">
                Escolha o tipo de preparo:
              </div>
              {meatSuggestions.map((suggestion) => (
                <button
                  key={suggestion.cookingMethod}
                  onClick={() => handleMeatMethodSelect(suggestion.cookingMethod)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors border-b border-amber-100 last:border-0"
                >
                  <div className="font-semibold text-amber-900 text-sm">
                    {suggestion.label}
                  </div>
                  <div className="text-xs text-amber-600 mt-0.5">
                    {suggestion.description}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Search results */}
          {showResults && searchTerm.length >= 2 && (
            <div className="absolute left-0 mt-1 w-full bg-white rounded-xl shadow-2xl border border-amber-200 z-20 max-h-72 overflow-y-auto">
              {searchResults.length === 0 && (
                <div className="px-4 py-3 text-sm text-amber-600 bg-amber-50/40 border-b border-amber-100">
                  Nenhum produto encontrado na base. Você pode adicionar manualmente abaixo:
                </div>
              )}
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => addItem(product)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors border-b border-amber-100 last:border-0 flex justify-between items-center gap-2"
                >
                  <div>
                    <div className="font-medium text-amber-900">
                      {product.name}
                    </div>
                    <div className="text-xs text-amber-500">{product.category}</div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-bold text-green-700">
                      R$ {product.prices[0]?.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-amber-500">
                      {product.prices[0]?.store}
                    </div>
                  </div>
                </button>
              ))}
              <button
                onClick={() => addItem(null, searchTerm)}
                className="w-full text-left px-4 py-3 hover:bg-green-100 transition-colors bg-green-50 border-t-2 border-green-200 flex items-center gap-2"
              >
                <span className="text-green-700 text-lg font-bold">+</span>
                <span className="font-medium text-green-800">
                  Adicionar &quot;{searchTerm}&quot; manualmente (sem preço)
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Meat method results */}
        {meatMethodResults.length > 0 && (
          <div className="mb-4 p-4 bg-white/90 rounded-lg border-2 border-amber-300">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-amber-900 text-sm">
                Cortes sugeridos:
              </h3>
              <button
                onClick={() => {
                  setMeatMethodResults([]);
                  setSelectedMeatMethod("");
                }}
                className="text-amber-600 hover:text-amber-800 text-sm font-medium"
              >
                Fechar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {meatMethodResults.map((cut) => (
                <button
                  key={cut}
                  onClick={() => addMeatItem(cut)}
                  className="px-3 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg font-medium text-sm transition-colors border border-amber-300"
                >
                  + {cut}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Paper list */}
        <div
          ref={listRef}
          className="bg-[#fcf9f2] rounded-sm shadow-lg overflow-hidden"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                transparent,
                transparent 39px,
                #e8dcc8 39px,
                #e8dcc8 40px
              )
            `,
            backgroundSize: "100% 40px",
            paddingTop: "20px",
            backgroundPosition: "0 60px",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.1), inset 0 100px 100px -100px rgba(0,0,0,0.02)",
          }}
        >
          {/* Paper header */}
          <div
            className="border-b-2 border-dashed border-amber-700/30 pb-3 px-6 pt-4 relative"
            style={{ background: "#fcf9f2" }}
          >
            <h2 className="text-2xl font-bold text-amber-900 text-center font-serif">
              {listTitle}
            </h2>
            <div className="flex justify-between items-center mt-2 text-xs text-amber-600 font-medium">
              <span>
                {new Date().toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>
                {checkedItems}/{totalItems} itens
              </span>
            </div>
          </div>

          {/* Paper content */}
          <div className="px-6 py-4" style={{ background: "transparent" }}>
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-amber-700/60 text-lg font-medium">
                  Sua lista está vazia
                </p>
                <p className="text-amber-600/40 text-sm mt-2">
                  Use a busca acima para adicionar produtos
                </p>
              </div>
            ) : (
              <ul className="space-y-0">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-start gap-3 py-3 border-b border-amber-700/10 hover:bg-amber-50/50 px-2 rounded transition-colors"
                    style={{ minHeight: "40px" }}
                  >
                    <button
                      onClick={() => toggleCheck(item.id)}
                      className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        item.checked
                          ? "bg-green-500 border-green-500"
                          : "border-amber-400 hover:border-amber-600"
                      }`}
                    >
                      {item.checked && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <span
                        className={`font-medium text-base ${
                          item.checked
                            ? "line-through text-amber-500"
                            : "text-amber-900"
                        }`}
                      >
                        {item.name}
                      </span>

                      {item.prices && item.prices.length > 0 && (
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {item.prices.slice(0, 2).map((p, i) => (
                            <span
                              key={i}
                              className="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-medium"
                            >
                              {p.store}: R$ {p.price.toFixed(2)}
                            </span>
                          ))}
                          {item.prices.length > 2 && (
                            <span className="text-xs text-amber-500">
                              +{item.prices.length - 2} fontes
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-amber-900 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 w-7 h-7 rounded-full hover:bg-red-100 text-amber-400 hover:text-red-500 font-bold text-sm flex items-center justify-center transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Total row */}
            {items.length > 0 && (
              <div className="flex justify-between items-center pt-4 mt-2 border-t-2 border-amber-800/30 pb-2 px-2">
                <div className="text-sm font-bold text-amber-900">
                  Estimativa total
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-amber-900">
                    R$ {totalEstimated.toFixed(2)}
                  </div>
                  <div className="text-xs text-amber-500">
                    Preço baseado na melhor oferta de cada item
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Export buttons */}
        <div className="flex gap-3 mt-6 justify-center">
          <button
            onClick={exportImage}
            disabled={items.length === 0}
            className="px-6 py-3 bg-white border-2 border-amber-700 text-amber-800 rounded-xl font-semibold hover:bg-amber-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm text-sm flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Exportar como Imagem
          </button>
          <button
            onClick={exportPDF}
            disabled={items.length === 0}
            className="px-6 py-3 bg-amber-800 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm text-sm flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Exportar como PDF
          </button>
        </div>
      </div>
    </div>
  );
}
