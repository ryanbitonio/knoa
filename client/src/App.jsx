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
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        <img
          className="object-cover md:w-[66.7%] md:fixed md:h-full"
          src={welcomeImage}
          alt="baby welcome image"
        />
        <Welcome />
        <Schedule />
        <Questions />
        <Toaster />
      </div>
    </>
  );
}

export default App;
