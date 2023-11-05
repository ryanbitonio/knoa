import "./App.css";
import Rsvp from "./components/layout/Rsvp";
import Schedule from "./components/layout/Schedule";
import Welcome from "./components/layout/Welcome";

function App() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-0 h-screen">
      <Welcome />
      <Schedule />
      <Rsvp />
    </div>
  );
}

export default App;
