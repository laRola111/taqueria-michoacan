"use client";

import { motion } from "framer-motion";
import MenuCard from "./MenuCard";

// Using the same data structure as page.tsx but now isolated
const menuItems = [
  {
    id: "cat_carnitas",
    title: "Carnitas Michoacán",
    desc: "Cocinadas lentamente en manteca de cerdo, crujientes por fuera y suaves por dentro.",
    img: "https://images.unsplash.com/photo-1628154109720-6d45903c7343?q=80&w=800&auto=format&fit=crop",
    price: 28.0, // Price added
  },
  {
    id: "cat_tacos",
    title: "Tacos Tradicionales",
    desc: "Tortillas de maíz recién hechas. Carne asada, pastor, o lengua.",
    img: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800&auto=format&fit=crop",
    price: 4.5, // Price added
  },
  {
    id: "cat_asada",
    title: "Carne Asada",
    desc: "Cortes selectos (Arrachera/Ribeye) asados al carbón de mezquite.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    price: 22.0, // Price added
  },
];

export default function MenuGrid() {
  return (
    <section className="py-24 px-4 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Menú <span className="text-[#E63946]">Destacado</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecciona tus favoritos y ordénalos por WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <MenuCard
                id={item.id}
                title={item.title}
                description={item.desc}
                img={item.img}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
