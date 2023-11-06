import { Button } from "@/components/ui/button";
import scheduleImage from "../../assets/schedule-img.jpg";

const Schedule = () => {
  return (
    <>
      <div className="md:col-span-2">
        <img
          className="object-cover sm:min-h-auto md:h-screen"
          src={scheduleImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20 text-center">
        <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
          Schedule
        </h1>
        <div className="">
          <h3 className="lg:text-2xl">
            Knoa’s Dedication <br />& Birthday Celebration
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Minuyan San Jose Evangelical Church <br />
            Bitonio’s Residence
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            January 27, 2023 Saturday <br />
            11:00 AM to 3:00 PM
          </p>
        </div>
        <Button className="mb-10">Add to Calendar</Button>
      </div>
    </>
  );
};

export default Schedule;
