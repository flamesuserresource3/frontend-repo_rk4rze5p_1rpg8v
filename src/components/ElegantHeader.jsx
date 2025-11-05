import { motion } from 'framer-motion';

const goldGradient = 'bg-gradient-to-r from-[#C6A664] via-[#E8D18F] to-[#B8923A]';

export default function ElegantHeader() {
  return (
    <header className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center py-16 sm:py-24"
      >
        <div className="inline-block px-4 py-1 rounded-full border border-[#e7dcb8]/70 bg-white/40 backdrop-blur-sm text-[13px] tracking-[0.2em] uppercase text-[#8A6F38]">
          Wedding Invitation
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#5b4b2f] relative">
          <span
            className={[
              'inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg',
              goldGradient,
              'bg-clip-text text-transparent',
              'drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)]',
            ].join(' ')}
            style={{
              textShadow: '0 1px 0 rgba(255,255,255,0.7), 0 6px 12px rgba(184,146,58,0.15)'
            }}
          >
            Aisyah & Fikri
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#7d6b4d]/90 max-w-xl mx-auto leading-relaxed">
          With joy in our hearts, we invite you to share in our celebration of love.
        </p>
      </motion.div>
    </header>
  );
}
