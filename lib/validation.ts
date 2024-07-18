import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "name must be at least 2 characters.",)
        .max(50, "name must be atmost least 50 characters.",),
    email:z.string().email("Invaild email address"),
    phone:z.string().refine((phone)=>/^\\d{1,14}$/.test(phone),'Invalid phone number')
  })