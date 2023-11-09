import { Button } from "@/components/ui/button";
import welcomeImage from "../../assets/welcome-img.jpg";
import { Link } from "react-router-dom";
import { MoveDown } from "lucide-react";

const Welcome = () => {
  return (
    <>
      <div className="md:h-screen md:col-span-2">
        <img
          className="object-cover md:w-[66.7%] md:fixed sm:h-auto md:h-screen"
          src={welcomeImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 py-10 text-center md:gap-20">
        <p className="leading-7 [&:not(:first-child)]:mt-6 w-[63%]">
          Ryan & Mary <br /> invite you to the <br /> dedication of their son
        </p>
        <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl w-[63%]">
          ZEKKE KNOA <br /> A. BITONIO
        </h1>
        <Link to="/rsvp">
          <Button variant="outline" className="">
            RSVP
          </Button>
        </Link>
        <div className="flex flex-col items-center gap-10">
          <p className="leading-7 [&:not(:first-child)]:mt-6 ">View Details</p>
          <MoveDown className="animate-bounce" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
