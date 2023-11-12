import { Button } from "@/components/ui/button";
import scheduleImage from "../../assets/schedule-img.jpg";
import { Calendar, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const Schedule = () => {
  return (
    <>
      <div id="schedule" className=" md:h-screen md:col-span-2">
        <img
          className="object-cover sm:min-h-auto md:h-screen"
          src={scheduleImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20 py-10 text-left md:gap-32">
        <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
          Schedule
        </h1>
        <div className="flex flex-col gap-8 w-[63%]">
          <h3 className="text-center lg:text-2xl">
            Knoa’s Dedication <br />& Birthday Celebration
          </h3>
          <Separator />
          <div className="flex gap-4 ">
            <MapPin strokeWidth={1} size={20} />
            <p className="text-sm leading-snug tracking-wider">
              Minuyan San Jose Evangelical Church <br /> and Bitonio’s Residence
            </p>
          </div>
          <div className="flex gap-4">
            <Calendar strokeWidth={1} size={19} />
            <p className="text-sm leading-snug tracking-wider">
              January 27, 2023 Saturday <br />
              11:00 AM to 3:00 PM
            </p>
          </div>
          <p className="tracking-wide text-center">
            We are excited to share this special day with you!
          </p>
        </div>
        <Button className="">Add to Calendar</Button>
      </div>
    </>
  );
};

export default Schedule;
