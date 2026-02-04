"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

interface MenuCardProps {
  id: string; // Unique ID for cart
  title: string;
  description: string;
  img: string;
  price: number;
  displayPrice?: string;
}

export default function MenuCard({
  id,
  title,
  description,
  img,
  price,
  displayPrice,
}: MenuCardProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#FFB703]/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col h-full">
      <div className="h-72 overflow-hidden relative w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-60" />
        <Image
          src={img}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Quantity Badge on Image if selected */}
        {quantity > 0 && (
          <div className="absolute top-4 right-4 z-20 bg-[#E63946] text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white/20">
            {quantity}
          </div>
        )}
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif text-white group-hover:text-[#FFB703] transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <span className="text-[#FFB703] font-bold text-xl tabular-nums text-right">
            {displayPrice || `$${price.toFixed(2)}`}
          </span>
        </div>

        <p className="text-gray-400 leading-relaxed font-light text-base flex-1 mb-6">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
          {quantity === 0 ? (
            <button
              onClick={() => addToCart({ id, title, price })}
              className="w-full py-3 bg-white/10 text-white hover:bg-[#FFB703] hover:text-black rounded-xl font-bold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Agregar
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-white/10 rounded-xl p-1">
              <button
                onClick={() => removeFromCart(id)}
                className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-white/10 rounded-lg text-white transition-colors active:scale-95"
              >
                <Minus size={18} />
              </button>
              <span className="font-bold text-white tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => addToCart({ id, title, price })}
                className="w-10 h-10 flex items-center justify-center bg-[#FFB703] text-black rounded-lg hover:brightness-110 transition-all active:scale-95"
              >
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
