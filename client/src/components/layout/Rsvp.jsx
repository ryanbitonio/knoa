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
import { rsvpName } from "../../data/rsvp";
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
                    <FormItem>
                      <FormLabel>{formLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <p className="leading-7 [&:not(:first-child)]:mt-6 mb-2">
                Will you be able to join us at our son’s dedication?
              </p>
              <FormField
                control={form.control}
                name="response"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col"
                      >
                        <FormItem className="flex justify-center items-center space-y-0 border border-solid border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="accept" className="hidden" />
                          </FormControl>
                          <FormLabel className="font-normal text-sm cursor-pointer">
                            Joyfully Accept
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex justify-center items-center  space-y-0 border border-solid border-slate-200 rounded-lg px-3 py-2 cursor-pointer ">
                          <FormControl>
                            <RadioGroupItem
                              value="decline"
                              className="hidden"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-sm cursor-pointer">
                            Regretfully Decline
                          </FormLabel>
                        </FormItem>
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
