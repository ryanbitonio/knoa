import { Button } from "@/components/ui/button";
import welcomeImage from "../../assets/welcome-img.jpg";

const Welcome = () => {
  return (
    <>
      <div className="md:col-span-2 ">
        <img
          className="sm:h-auto md:h-screen object-cover "
          src={welcomeImage}
          alt="baby welcome image"
        />
      </div>
      <div className="my-10 flex flex-col justify-center items-center gap-20 text-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ryan & Mary <br /> invite you to the <br /> dedication of their son
        </p>
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
          ZEKKE KNOA <br /> A. BITONIO
        </h1>
        <Button variant="outline">RSVP</Button>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">View Details</p>
      </div>
    </>
  );
};

export default Welcome;
