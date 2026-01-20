import MenuCard from "./MenuCard";

export default function MenuGrid() {
  const menuItems = [
    {
      category: "Carnitas" as const,
      description:
        "Estilo Michoacán, cocinadas a la perfección en su propia manteca.",
    },
    {
      category: "Tacos" as const,
      description: "Variedad de carnes en tortilla de maíz recién hecha.",
    },
    {
      category: "Carne Asada" as const,
      description:
        "Cortes selectos asados al carbón con guarniciones tradicionales.",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-brand-red mb-4 uppercase tracking-wider">
          Nuestro Menú
        </h2>
        <div className="h-1 w-24 bg-brand-gold mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Auténtico sabor mexicano preparado con las recetas tradicionales de
          Michoacán.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuCard
            key={item.category}
            category={item.category}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
