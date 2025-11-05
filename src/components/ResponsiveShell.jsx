export default function ResponsiveShell({ children }) {
  return (
    <div className="min-h-screen bg-[#fffaf0] relative">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff4ea]/50 to-[#fdeee7]/60 pointer-events-none" />

      {/* Desktop: center a phone-sized frame. Mobile: full width */}
      <div className="relative mx-auto px-0 md:px-8 lg:px-12 py-6 md:py-10 lg:py-14">
        <div className="mx-auto w-full md:max-w-[430px] lg:max-w-[460px]">
          <div className="relative bg-[#fffaf0]/95 backdrop-blur-sm border border-[#e7dcb8] shadow-[0_20px_60px_rgba(184,146,58,0.15)] rounded-none md:rounded-[32px] overflow-hidden">
            {/* Simulated Android status bar on desktop */}
            <div className="hidden md:flex items-center justify-between px-5 py-2 text-[11px] text-[#7d6b4d] bg-white/60 border-b border-[#e7dcb8]/70">
              <span>10:24</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-8 rounded-full bg-[#7d6b4d]/30" />
                <span className="h-2 w-3 rounded-sm bg-[#7d6b4d]/50" />
                <span className="h-2 w-3 rounded-sm bg-[#7d6b4d]/50" />
              </div>
            </div>

            <div className="relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
