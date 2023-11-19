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

import Questions from "./components/layout/Questions";
import Schedule from "./components/layout/Schedule";
import Welcome from "./components/layout/Welcome";
import { Toaster } from "./components/ui/toaster";
import { nav } from "./data/nav";
import { carousel } from "./data/slideshow";

function App() {
  return (
    <>
      <div className="fixed z-50 top-10 left-10">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-rows-2">
        <ul className="relative">
          {carousel.map(({ animate, image }, index) => (
            <li key={index} className={animate}>
              <img
                className="object-cover lg:w-[66.7%] absolute   lg:fixed min-h-screen"
                src={image}
                alt="baby welcome image"
              />
            </li>
          ))}
          <div className="space-y-8 absolute bottom-10 left-10 right-10 lg:right-[40%] text-white lg:fixed">
            <h1 className="text-clamp-h1 leading-10">Knoa</h1>
            <p className="text-clamp-h3">
              We can't wait to celebrate our baby's dedication and birthday with
              you!
            </p>
          </div>
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
