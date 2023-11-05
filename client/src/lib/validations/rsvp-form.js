import * as z from "zod";

export const formSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "Please enter your first name" })
    .min(3, { message: "First name must be at least 3 characters" })
    .max(50, { message: "First name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "First name should contain only letters and spaces",
    }),
  lastName: z
    .string()
    .nonempty({ message: "Please enter your last name" })
    .min(3, { message: "Last name must be at least 3 characters" })
    .max(50, { message: "Last name must be 50 characters only" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Last name should contain only letters and spaces",
    }),
  response: z.enum(["accept", "decline"], {
    required_error: "You need to select a response",
  }),
});
