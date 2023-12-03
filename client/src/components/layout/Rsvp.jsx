import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { response, fields } from "../../data/rsvp";
import { formSchema } from "../../lib/validations/rsvp-form";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { Toaster } from "../../components/ui/toaster";
import useGuests from "../../hooks/useGuests";

const Rsvp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { guests } = useGuests();
  const KNOA_API =
    import.meta.env.VITE_KNOA_API || "http://localhost:3000/guests";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = form;

  async function onSubmit(values) {
    const isResponded = guests
      .map(guest => `${guest.firstName} ${guest.lastName}`)
      .some(
        guest =>
          guest.toLowerCase() ===
          `${values.firstName.toLowerCase()} ${values.lastName.toLowerCase()}`
      );

    if (!isResponded) {
      try {
        toast({
          title: "Successfully Added!",
          description: "We appreciate your response.",
          duration: 3000,
        });

        reset();
        navigate("/");

        await axios.post(KNOA_API, values);
      } catch (err) {
        console.error(err);
      }
    } else {
      toast({
        title: "Submission failed!",
        description: "You already submitted a response.",
        duration: 3000,
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Card>
              <CardHeader>
                <CardTitle>RSVP</CardTitle>
                <CardDescription>
                  Dedication & birthday celebration
                </CardDescription>
              </CardHeader>
              <CardContent>
                {fields.map(({ name, formLabel, placeholder }) => (
                  <FormField
                    control={control}
                    name={name}
                    key={name}
                    render={({ field }) => (
                      <FormItem className="mb-2 ">
                        <FormLabel>{formLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <p className="leading-7 [&:not(:first-child)]:mt-4 mb-4 text-sm">
                  Will you be able to join us at our son’s dedication?
                </p>

                <FormField
                  control={control}
                  name="response"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          tabIndex={-1}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          {response.map(({ value, label }) => (
                            <div
                              key={value}
                              tabIndex={-1}
                              className="border border-solid rounded-lg border-slate-200 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 "
                            >
                              <FormItem className="flex space-y-0 cursor-pointer">
                                <FormControl>
                                  <RadioGroupItem
                                    value={value}
                                    className="hidden"
                                  />
                                </FormControl>
                                <FormLabel className="w-full py-2 text-sm font-normal text-center cursor-pointer ">
                                  {label}
                                </FormLabel>
                              </FormItem>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link tabIndex={-1} to="/">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
      <Toaster />
    </>
  );
};

export default Rsvp;
