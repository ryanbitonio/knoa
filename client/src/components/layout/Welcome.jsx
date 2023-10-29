import welcomeImage from "../../assets/welcome-img.jpg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
        <div className="flex flex-col items-center gap-20 text-center ">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ryan & Mary <br /> invite you to the <br /> dedication of their son
          </p>
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            ZEKKE KNOA <br /> A. BITONIO
          </h1>
          <Button variant="outline">RSVP</Button>
        </div>
        <p className=" leading-7 [&:not(:first-child)]:mt-6">View Details</p>
        <div
          style={{
            opacity: "30%",
            borderLeft: "1px solid rgb(2 6 23)",
            height: "200px",
            position: "absolute",
            bottom: 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Welcome;
