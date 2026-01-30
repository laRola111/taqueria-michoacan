"use client";

// Force static is NOT compatible with dynamic client-side logic dependent on search params
// but here we are just doing client state. However, ensuring clean build.
export const dynamic = "force-static";

import { motion } from "framer-motion";
import { MapPin, Clock, Star, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import { CartProvider } from "./context/CartContext";
import MenuGrid from "./components/MenuGrid";
import WhatsAppButton from "./components/WhatsAppButton";

import { ASSETS } from "./constants/assets";

export default function Home() {
  const testimonials = [
    {
      name: "Carlos R.",
      text: "Las mejores carnitas de Texas, me recuerdan a mi tierra.",
      stars: 5,
    },
    {
      name: "Sarah M.",
      text: "El servicio es rápido y la salsa roja es increíble.",
      stars: 5,
    },
    {
      name: "Familia López",
      text: "Auténtico sabor michoacano. 100% recomendado.",
      stars: 5,
    },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505] font-sans text-neutral-100 selection:bg-[#FCA311] selection:text-black overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1551504734-5ee63e9f9774?q=80&w=1920&auto=format&fit=crop"
              alt="Tacos en Austin"
              fill
              priority={true}
              className="object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-[-5vh]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <h2 className="text-[#FCA311] font-serif text-lg md:text-2xl tracking-[0.3em] mb-8 uppercase font-bold drop-shadow-sm">
                Austin, Texas
              </h2>

              <div className="relative w-full max-w-[600px] aspect-[3/1] mb-6">
                <Image
                  src={ASSETS.LOGO}
                  alt="Taquería y Carnitas Michoacán"
                  fill
                  priority={true}
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </div>

              <div className="h-1 w-32 bg-[#E63946] mx-auto my-8 rounded-full shadow-[0_0_15px_#E63946]" />

              <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
                El auténtico sabor de México. <br />
                <span className="text-gray-400 text-lg">
                  Tradición y pasión en cada taco.
                </span>
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-base text-gray-200 font-medium">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                  <MapPin className="text-[#FCA311]" size={20} />
                  <span>5555 Taco Drive, Austin, TX</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                  <Clock className="text-[#FCA311]" size={20} />
                  <span>Abierto Todos los Días: 8am - 10pm</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#FCA311]">
                Descubre
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#FCA311] to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Special of the Day Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FCA311]/5 -skew-y-3 transform origin-left scale-110 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl skew-x-0 md:-skew-x-2 border-4 border-[#FCA311]/20">
                <Image
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80"
                  alt="Paquete Familiar"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform md:skew-x-2 scale-105 hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:skew-x-2 pointer-events-none">
                  <span className="text-[#FCA311] font-bold text-lg tracking-wider">
                    RECOMENDADO
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-2">
                  El Especial <span className="text-[#FCA311]">del Día</span>
                </h2>
                <div className="h-1 w-20 bg-[#E63946] mb-4"></div>
                <h3 className="text-2xl text-white font-medium">
                  Paquete Familiar Michoacano
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ven y disfruta de nuestro paquete estrella. 1kg de nuestras
                  famosas carnitas, acompañadas de salsa verde y roja, tortillas
                  recién hechas, limones, cilantro y cebolla. ¡Perfecto para
                  compartir en familia!
                </p>
                <button className="bg-[#E63946] hover:bg-[#c92a37] text-white px-8 py-3 rounded-full font-bold tracking-wide transition-all shadow-lg hover:shadow-[#E63946]/50">
                  Ordena Ahora
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Grid - Now using the Component with Logic */}
        <MenuGrid />

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                El Sabor que Enamora a{" "}
                <span className="text-[#FCA311]">Austin</span>
              </h2>
              <div className="h-1 w-24 bg-[#E63946] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-[#FCA311]/40 transition-colors"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, si) => (
                      <Star
                        key={si}
                        size={20}
                        className="fill-[#FCA311] text-[#FCA311]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E63946] to-[#FCA311] flex items-center justify-center font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <span className="text-white font-medium">{t.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-black border-t border-zinc-900 text-center text-gray-400 text-sm relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-serif text-white mb-6 tracking-widest uppercase">
              Taquería y Carnitas Michoacán
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 text-neutral-500">
              <span className="flex items-center justify-center gap-2 hover:text-[#FCA311] transition-colors">
                <MapPin size={16} /> 5555 Taco Drive, Austin, TX
              </span>
              <span className="flex items-center justify-center gap-2 hover:text-[#FCA311] transition-colors">
                <Clock size={16} /> Lun - Dom: 8am - 10pm
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:text-[#FFB703] hover:bg-white/10 transition-all duration-300 group"
                aria-label="TikTok"
              >
                {/* Custom TikTok SVG since Lucide might not have it consistent across versions, or to ensure specific styling */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-full hover:text-[#FFB703] hover:bg-white/10 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="p-3 bg-white/5 rounded-full hover:text-[#FFB703] hover:bg-white/10 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
            <p className="opacity-50 mb-4">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-600 font-medium tracking-wide">
              Diseñado por{" "}
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Rueda La Rola Media
              </span>
            </p>
          </div>
        </footer>

        {/* Agentic Checkout Button */}
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
