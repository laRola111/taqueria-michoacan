"use client";

import { motion } from "framer-motion";
import { ASSETS } from "../constants/assets";
import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";
import Image from "next/image";

// Menu data with local assets and real prices
const menuItems = [
  {
    category: "Favoritos",
    items: [
      {
        id: "cat_platos",
        title: "Platos",
        desc: "Plato de Birria ($14.00) y Plato de Carnitas ($10.00). Incluyen arroz y frijoles.",
        price: 10.0,
        displayPrice: "$10.00 - $14.00",
      },
      {
        id: "cat_tacos",
        title: "Tacos",
        desc: "Carnitas ($3.00), Birria ($3.00), Quesa Birria ($3.50), Quesadilla ($9.00).",
        price: 3.0,
        displayPrice: "$3.00 - $9.00",
      },
    ],
  },
  {
    category: "Tortas y Burritos",
    items: [
      {
        id: "cat_tortas",
        title: "Tortas",
        desc: "Carnitas o Birria. Bolillo crujiente con tu carne favorita.",
        price: 8.0,
      },
      {
        id: "cat_burritos",
        title: "Burritos",
        desc: "Birria o Carnitas. Lechuga, tomate, queso, crema, aguacate, frijoles y arroz.",
        price: 9.0,
      },
    ],
  },
  {
    category: "Para Compartir",
    items: [
      {
        id: "cat_libra",
        title: "Por Libra",
        desc: "Carnitas ($12.00), Birria ($14.00). Para compartir en familia.",
        price: 12.0,
        displayPrice: "$12.00 / $14.00",
      },
    ],
  },
];

export default function MenuGrid() {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#050505] relative z-10 w-full">
      {/* Introduction */}
      <div className="py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Menú <span className="text-[#E63946]">Oficial</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Selecciona tus favoritos y ordénalos directamente por WhatsApp.
        </p>
      </div>

      {/* Block 1: Platos & Tacos */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        {menuItems[0].items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={() =>
              addToCart({ id: item.id, title: item.title, price: item.price })
            }
          />
        ))}
      </section>

      {/* VISUAL SECTION 1: Calidad Artesanal */}
      <section className="relative w-full h-64 md:h-[80vh] overflow-hidden my-16 group">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={ASSETS.IMG_FINAL}
          alt="Tortillas hechas a mano"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="text-3xl md:text-7xl font-serif text-white text-center drop-shadow-xl px-4">
            Tortillas <br />
            <span className="text-[#FCA311] italic text-2xl md:text-5xl border-b-2 border-[#FCA311] pb-2">
              Hechas a mano al momento
            </span>
          </h3>
        </div>
      </section>

      {/* Block 2: Tortas & Burritos */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        {menuItems[1].items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={() =>
              addToCart({ id: item.id, title: item.title, price: item.price })
            }
          />
        ))}
      </section>

      {/* VISUAL SECTION 2: Nuestras Carnitas */}
      <section className="relative w-full h-64 md:h-[80vh] overflow-hidden my-16 group">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={ASSETS.IMG_456}
          alt="Nuestras Carnitas"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="text-3xl md:text-7xl font-serif text-white text-center drop-shadow-xl px-4">
            Nuestra <br />
            <span className="text-[#E63946] italic">Especialidad</span>
          </h3>
        </div>
      </section>

      {/* Block 3: Por Libra */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        {menuItems[2].items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={() =>
              addToCart({ id: item.id, title: item.title, price: item.price })
            }
          />
        ))}
      </section>

      {/* VISUAL SECTION 3: Complemento Perfecto */}
      <section className="relative w-full h-64 md:h-[80vh] overflow-hidden mt-16 group">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={ASSETS.IMG_4A}
          alt="Complementos Frescos"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h3 className="text-3xl md:text-6xl font-serif text-white text-center drop-shadow-xl px-4">
            Frescura <span className="text-[#FCA311]">Garantizada</span>
          </h3>
        </div>
      </section>
    </div>
  );
}

function MenuItem({ item, onAdd }: { item: any; onAdd: () => void }) {
  return (
    <div className="group flex flex-col md:flex-row items-center justify-between border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4 md:px-8 rounded-xl gap-4 md:gap-0">
      <div className="text-center md:text-left md:mb-0 max-w-xl w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
          <h4 className="text-xl md:text-2xl font-serif text-white">
            {item.title}
          </h4>
          <div className="h-[1px] bg-white/20 flex-1 w-12 hidden md:block"></div>
        </div>
        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
          {item.desc}
        </p>
      </div>

      <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-6">
        <span className="text-xl font-bold text-[#FCA311] tabular-nums">
          {item.displayPrice || `$${item.price.toFixed(2)}`}
        </span>
        <button
          onClick={onAdd}
          className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FCA311] hover:text-black transition-all active:scale-95 touch-manipulation"
          aria-label="Agregar al carrito"
        >
          <Plus size={24} className="md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
