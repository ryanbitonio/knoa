import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen gap-16 px-12  text-center lg:gap-20 lg:col-start-3"
    >
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ryan & Mary <br /> invite you to the <br /> dedication of their son
      </p>
      <h2 className="text-4xl tracking-tight  lg:text-5xl ">
        ZEKKE KNOA <br /> A. BITONIO
      </h2>
      <Link to="/rsvp">
        <Button variant="outline" className="">
          RSVP
        </Button>
      </Link>
      <div className="flex flex-col items-center gap-10">
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">View Details</p>
        <MoveDown strokeWidth={1.5} className="animate-bounce" />
      </div>
    </div>
  );
};

export default Welcome;
