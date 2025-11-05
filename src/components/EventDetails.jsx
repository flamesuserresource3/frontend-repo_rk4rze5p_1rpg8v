import { motion } from 'framer-motion';

export default function EventDetails() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center bg-white/60 backdrop-blur-sm rounded-2xl border border-[#e7dcb8]/70 p-8 sm:p-10 shadow-[inset_0_2px_0_rgba(255,255,255,0.6)]"
      >
        <h2 className="font-serif text-2xl sm:text-3xl text-[#5b4b2f]">
          The Wedding Ceremony
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#7d6b4d]">
          <div className="rounded-xl p-5 bg-[#fffaf0]/70 border border-[#e7dcb8]">
            <p className="text-sm tracking-wider uppercase text-[#8A6F38]">Date</p>
            <p className="mt-1 font-serif text-xl">Sunday, 12 January 2026</p>
          </div>
          <div className="rounded-xl p-5 bg-[#fffaf0]/70 border border-[#e7dcb8]">
            <p className="text-sm tracking-wider uppercase text-[#8A6F38]">Time</p>
            <p className="mt-1 font-serif text-xl">10:00 AM — 1:00 PM</p>
          </div>
          <div className="rounded-xl p-5 bg-[#fffaf0]/70 border border-[#e7dcb8] sm:col-span-2">
            <p className="text-sm tracking-wider uppercase text-[#8A6F38]">Venue</p>
            <p className="mt-1 font-serif text-xl">Grand Ivory Hall, Jakarta</p>
            <p className="text-sm mt-1 text-[#7d6b4d]/80">Jl. Mawar Indah No. 12, Jakarta</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
