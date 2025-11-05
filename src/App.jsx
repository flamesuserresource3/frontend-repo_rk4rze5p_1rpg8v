import ElegantHeader from './components/ElegantHeader';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import LocationMap from './components/LocationMap';
import FloralCorners from './components/FloralCorners';

function App() {
  return (
    <div className="min-h-screen bg-[#fffaf0] relative text-[#3c2f1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff4ea]/50 to-[#fdeee7]/60 pointer-events-none" />

      <main className="relative max-w-5xl mx-auto px-6 sm:px-8 md:px-10 py-10 sm:py-12">
        <FloralCorners />

        <ElegantHeader />

        <div className="mt-4 sm:mt-8">
          <EventDetails />
        </div>

        <div className="mt-10 sm:mt-14">
          <RSVPSection />
        </div>

        <div className="mt-10 sm:mt-14">
          <LocationMap />
        </div>

        <footer className="mt-16 sm:mt-20 text-center text-sm text-[#7d6b4d]">
          With love, Aisyah & Fikri
        </footer>
      </main>
    </div>
  );
}

export default App;
