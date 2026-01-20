export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center text-center px-4 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat bg-brand-black/90 bg-blend-overlay">
      <div className="animate-in fade-in zoom-in duration-1000">
        <h2 className="text-brand-gold text-xl md:text-2xl font-bold tracking-widest mb-4 uppercase">
          Bienvenidos a
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
          Taquería <br className="md:hidden" />
          <span className="text-brand-red">Michoacán</span>
        </h1>

        <div className="w-full max-w-md mx-auto h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent my-8 opacity-50"></div>

        <div className="space-y-4 text-gray-300 font-sans">
          <p className="text-lg md:text-xl flex items-center justify-center gap-2">
            <span className="text-brand-red">📍</span>
            Austin, TX
          </p>
          <div className="text-sm md:text-base border border-brand-gold/30 p-4 rounded-lg bg-black/40 backdrop-blur-sm inline-block">
            <p className="text-brand-gold font-bold mb-1">HORARIO</p>
            <p>Lun - Dom: 8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
