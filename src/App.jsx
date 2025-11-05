import ElegantHeader from './components/ElegantHeader';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import LocationMap from './components/LocationMap';
import FloralCorners from './components/FloralCorners';
import ResponsiveShell from './components/ResponsiveShell';

function App() {
  return (
    <ResponsiveShell>
      <main className="relative text-[#3c2f1e] px-6 sm:px-8 md:px-8 py-8 sm:py-10">
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
    </ResponsiveShell>
  );
}

export default App;
