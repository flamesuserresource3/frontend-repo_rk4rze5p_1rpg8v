import { motion } from 'framer-motion';

export default function RSVPSection() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-[#7d6b4d]">Kindly confirm your attendance</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href="https://forms.gle/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-[#5b4b2f] bg-gradient-to-r from-[#F4E6D3] to-[#F0DCC3] border border-[#e7dcb8] shadow-[inset_0_2px_0_rgba(255,255,255,0.7)] hover:brightness-105 transition"
          >
            RSVP via Form
          </a>
          <a
            href="mailto:hello@example.com?subject=RSVP%20Aisyah%20%26%20Fikri"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-[#C6A664] via-[#E8D18F] to-[#B8923A] shadow-md hover:opacity-95 transition"
          >
            Send Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
