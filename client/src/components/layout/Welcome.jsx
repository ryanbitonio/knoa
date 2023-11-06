import { Button } from "@/components/ui/button";
import welcomeImage from "../../assets/welcome-img.jpg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="md:col-span-2">
        <img
          className="object-cover sm:h-auto md:h-screen"
          src={welcomeImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20 text-center ">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ryan & Mary <br /> invite you to the <br /> dedication of their son
        </p>
        <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
          ZEKKE KNOA <br /> A. BITONIO
        </h1>
        <Link to="/rsvp">
          <Button variant="outline">RSVP</Button>
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">View Details</p>
      </div>
    </>
  );
};

export default Welcome;
