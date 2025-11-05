import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-2xl overflow-hidden border border-[#e7dcb8] shadow-[inset_0_2px_0_rgba(255,255,255,0.7)] bg-white/70">
          <iframe
            title="Wedding Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.780908347346!2d106.827153315316!3d-6.15778889554594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f1b73f4d7f%3A0x8b2c5f7a5e9db4!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
