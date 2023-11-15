import { Separator } from "@/components/ui/separator";
const Schedule = () => {
  return (
    <div
      id="schedule"
      className="flex flex-col items-center justify-center min-h-screen gap-16 px-10 py-10 text-center md:col-start-3 md:gap-20"
    >
      <h1 className="text-4xl tracking-tight scroll-m-20 lg:text-5xl">
        Schedule
      </h1>
      <div className="flex flex-col items-center gap-8 ">
        <h3 className=" lg:text-2xl">
          Knoa’s Dedication <br />& Birthday Celebration
        </h3>
        <Separator />

        <p className="leading-snug tracking-wider">
          Minuyan San Jose Evangelical Church <br /> and Bitonio’s Residence
        </p>

        <p className="leading-snug tracking-wider">
          January 27, 2023 Saturday <br />
          11:00 AM to 3:00 PM
        </p>
      </div>
      <p className="tracking-wide ">
        We are excited to share this special day with you!
      </p>
    </div>
  );
};

export default Schedule;
