import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "../../data/questions";

const Questions = () => {
  return (
    <div
      id="faq"
      className="flex flex-col justify-center min-h-screen gap-16 px-10 py-10 text-left md:col-start-3 md:gap-20"
    >
      <div className="flex flex-col items-center gap-10 ">
        <h1 className="text-4xl tracking-tight lg:text-5xl">Q & A</h1>
        <p className="text-center">
          RSVP queries? Get your answers here <br /> before you hit that send
          button!
        </p>
      </div>
      <Accordion type="single" collapsible className="">
        {questions.map(({ value, question, answer }, index) => (
          <AccordionItem key={index} value={value}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Questions;
