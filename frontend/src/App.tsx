import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import MapSection from './components/MapSection';
import ServerInfo from './components/ServerInfo';

function App() {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/src/assets/bgimg.jpg')] bg-cover bg-center"></div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full w-full">
        <div className="h-screen w-[80%] rounded-lg overflow-y-auto shadow-lg scrollable-container">
          {/* Scrollable Content */}
          <div className="p-4 text-white">
            <Header />
            <Details />
            <ServerInfo />
            <MapSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
