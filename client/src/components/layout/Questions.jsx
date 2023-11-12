import scheduleImage from "../../assets/schedule-img.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "../../data/questions";

const Questions = () => {
  return (
    <>
      <div id="faq" className="md:h-screen md:col-span-2">
        <img
          className="object-cover sm:min-h-auto md:h-screen"
          src={scheduleImage}
          alt="baby welcome image"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 py-10 text-left md:gap-20">
        <div className="flex flex-col items-center gap-10 w-[63%]">
          <h1 className="text-4xl tracking-tight lg:text-5xl">Q & A</h1>
          <p className="text-center">
            RSVP queries? Get your answers here <br /> before you hit that send
            button!
          </p>
        </div>
        <Accordion type="single" collapsible className="w-[63%]">
          {questions.map(({ value, question, answer }) => (
            <AccordionItem value={value}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Questions;
