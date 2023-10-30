import welcomeImage from "../../assets/welcome-img.jpg";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-0 h-screen">
      <div className=" md:col-span-2">
        <img
          className="h-screen object-cover"
          src={welcomeImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-20">
        <div className="h-screen flex flex-col justify-center items-center gap-20 text-center ">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ryan & Mary <br /> invite you to the <br /> dedication of their son
          </p>
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            ZEKKE KNOA <br /> A. BITONIO
          </h1>
          <Button variant="outline">RSVP</Button>
          <p className="leading-7 [&:not(:first-child)]:mt-6 after:content after:border-l-slate-950 after:border-solid after:border after:relative after:top-10 after:right-12 after:pb-24">
            View Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
