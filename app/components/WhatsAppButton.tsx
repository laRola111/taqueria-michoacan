"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function WhatsAppButton() {
  const { cart, getCartTotal, getCartItemsCount } = useCart();
  const total = getCartTotal();
  const count = getCartItemsCount();

  const generateLink = () => {
    const phoneNumber = "15129021367";
    const baseUrl = `https://wa.me/${phoneNumber}`;

    if (cart.length === 0) {
      return baseUrl;
    }

    let message = "Hola, me gustaría ordenar:\n";
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.title} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}`;

    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.a
      href={generateLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }} // Active (Touch) state
    >
      <div className="relative flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] border border-white/20 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)]">
        <MessageCircle size={32} fill="white" className="drop-shadow-sm" />

        {/* Dynamic Cart Label if items exist */}
        <AnimatePresence>
          {count > 0 && (
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 12 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              className="overflow-hidden flex flex-col items-start whitespace-nowrap"
            >
              <span className="text-xs font-bold text-green-900 uppercase tracking-wider">
                Total
              </span>
              <span className="text-sm font-bold">${total.toFixed(2)}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        {count > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -left-2 bg-[#E63946] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#050505]"
          >
            {count}
          </motion.div>
        )}
      </div>
    </motion.a>
  );
}
