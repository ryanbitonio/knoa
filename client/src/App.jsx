import "./App.css";
import Questions from "./components/layout/Questions";
import Schedule from "./components/layout/Schedule";
import Welcome from "./components/layout/Welcome";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="grid h-screen md:grid-cols-3 sm:grid-cols-1">
      <Welcome />
      <Schedule />
      <Questions />
      <Toaster />
    </div>
  );
}

export default App;
