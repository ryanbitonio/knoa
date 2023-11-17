import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "./App.css";
import welcomeImage from "./assets/welcome-img.jpg";
import scheduleImage from "./assets/schedule-img.jpg";
import Questions from "./components/layout/Questions";
import Schedule from "./components/layout/Schedule";
import Welcome from "./components/layout/Welcome";
import { Toaster } from "./components/ui/toaster";
import { nav } from "./data/nav";

function App() {
  return (
    <>
      <div className="fixed z-50 top-6 left-6">
        <Sheet>
          <SheetTrigger asChild className="focus-visible:rounded-full ">
            <Button
              variant="outline"
              className="p-6 font-light tracking-widest rounded-full text-md"
            >
              <Menu className="w-8 h-8 mr-3" strokeWidth={1.5} /> MENU
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col pt-8 pl-8">
            <SheetHeader>
              <SheetTitle className="text-3xl">Zekke Knoa</SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col items-start -ml-4">
              {nav.map(({ href, label }, index) => (
                <Button
                  key={index}
                  className="justify-start w-full pl-4 text-lg font-normal tracking-wide"
                  variant="ghost"
                  asChild
                >
                  <a href={href}>{label}</a>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-3">
        <ul>
          <li className="animate-[xfade_16s_12s_infinite]">
            <img
              className="object-cover lg:w-[66.7%] absolute lg:fixed min-h-screen"
              src={welcomeImage}
              alt="baby welcome image"
            />
          </li>
          <li className="animate-[xfade_16s_8s_infinite]">
            <img
              className="object-cover lg:w-[66.7%] absolute lg:fixed min-h-screen"
              src={scheduleImage}
              alt="baby welcome image"
            />
          </li>
          <li className="animate-[xfade_16s_4s_infinite]">
            <img
              className="object-cover lg:w-[66.7%] absolute lg:fixed min-h-screen"
              src={welcomeImage}
              alt="baby welcome image"
            />
          </li>
          <li className="animate-[xfade_16s_0s_infinite]">
            <img
              className="object-cover lg:w-[66.7%] absolute lg:fixed min-h-screen"
              src={scheduleImage}
              alt="baby welcome image"
            />
          </li>
        </ul>
        <Welcome />
        <Schedule />
        <Questions />
        <Toaster />
      </div>
    </>
  );
}

export default App;
