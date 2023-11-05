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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { rsvpAttendance, rsvpName } from "../../data/rsvp";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  response: z.enum(["accept", "decline"], {
    required_error: "You need to select a response.",
  }),
});

const Rsvp = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(values) {
    console.log("check here", values);

    form.reset();

    navigate("/");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
          <Card>
            <CardHeader>
              <CardTitle>RSVP</CardTitle>
              <CardDescription>
                Dedication & birthday celebration
              </CardDescription>
            </CardHeader>
            <CardContent>
              {rsvpName.map(({ name, formLabel, placeholder }) => (
                <FormField
                  control={form.control}
                  name={name}
                  key={name}
                  render={({ field }) => (
                    <FormItem className="mb-2">
                      <FormLabel>{formLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <p className="leading-7 [&:not(:first-child)]:mt-4 mb-4">
                Will you be able to join us at our son’s dedication?
              </p>

              <FormField
                control={form.control}
                name="response"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        {rsvpAttendance.map(({ value, label }) => (
                          <div
                            tabIndex={0}
                            className="border border-solid border-slate-200  focus:rounded-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 "
                          >
                            <FormItem
                              key={value}
                              className="flex space-y-0 cursor-pointer"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={value}
                                  className="hidden "
                                />
                              </FormControl>
                              <FormLabel className="w-full text-center py-2 font-normal text-sm cursor-pointer ">
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
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Submit</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default Rsvp;
