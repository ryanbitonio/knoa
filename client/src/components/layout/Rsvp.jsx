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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  accept: z.string().min(2).max(50),
  decline: z.string().min(2).max(50),
});

const Rsvp = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      accept: "",
      decline: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
      <Card>
        <Form {...form}>
          <CardHeader>
            <CardTitle>RSVP</CardTitle>
            <CardDescription>Dedication & birthday party</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Will you be able to join us at our son’s dedication?
              </p>
              <FormField
                control={form.control}
                name="accept"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="text-center text-transparent cursor-pointer placeholder:text-slate-950"
                        placeholder="Joyfully Accept"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="decline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="text-center text-transparent cursor-pointer placeholder:text-slate-950"
                        placeholder="Regretfully Decline"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
};

export default Rsvp;
