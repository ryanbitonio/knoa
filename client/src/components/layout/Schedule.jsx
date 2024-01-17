import { Calendar, MapPin } from "lucide-react";

const Schedule = () => {
  return (
    <div
      id="schedule"
      className="flex flex-col items-center justify-center min-h-screen gap-16 px-12 py-10 lg:col-start-3"
    >
      <h2 className="text-4xl tracking-tight lg:text-5xl ">Schedule</h2>
      <div className="space-y-8 ">
        <h3 className="text-2xl font-medium leading-snug tracking-wide text-center">
          Knoa’s Dedication & Birthday Celebration
        </h3>
        <div className="flex gap-4">
          <Calendar strokeWidth={1} size={19} className="shrink-0" />
          <p className="leading-snug tracking-wider text-left">
            The event will take place on Saturday, January 27, 2023, from 3:00
            PM to 5:00 PM
          </p>
        </div>
        <div className="flex gap-4 ">
          <MapPin strokeWidth={1} size={20} className="shrink-0" />
          <p className="leading-snug tracking-wider text-left ">
            The event will be held at Minuyan San Jose Evangelical Church and
            Bitonio's Residence.
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36692.93391229485!2d121.064338942573!3d14.832576353772298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397af55e3f6ec25%3A0xe8937b0b1f211193!2sIRM%20Ministries%20%E2%80%93%20Minuyan%20San%20Jose!5e0!3m2!1sen!2sph!4v1700121634816!5m2!1sen!2sph"
        style={{
          border: 0,
          borderRadius: "0.5rem",
          width: "100%",
          height: "310px",
          display: "block",
          position: "static",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Schedule;
