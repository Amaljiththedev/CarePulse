"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomForms from "../ui/CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { Phone } from "lucide-react"
import { UserFormValidation } from "@/lib/validation";
import { create } from "domain"
import { useRouter } from "next/router"

export enum FormFieldType{
  INPUT= 'input',
  TEXTAREA ='textarea',
  PHONE_INPUT='phoneInput',
  CHECKBOX='checkbox',
  DATE_PICKER='datePicker',
  SELECT='select',
  SKELETON='skeleton'
}
 

 const PatientForm=()=> {
  const router=useRouter();
  const [isLoading,setisLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      Phone:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true);

    try{
      const userData={name,email,phone}

      const user =await createUser(userData);
      
      if (user) router.push('/patients/${user.$id}/register')
    } catch(error){
      console.log(error);
    }
  }

  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb-12 space-y-4">
        <h1 className="header">Hi there 👋 </h1>
        <p className="text-dark-700">Schedule Your First Appointment</p>

      </section>
      <CustomForms 
      fieldtype={FormFieldType.INPUT}
      control={form.control}
      name="name"
      label="Full-name"
      placeholder="Jhon Doe"
      iconSrc ="/assets/icons/user.svg"
      iconAlt="user"
      />
      <CustomForms 
      fieldtype={FormFieldType.INPUT}
      control={form.control}
      name="email"
      label="Email"
      placeholder="jhondoe@gmail.com"
      iconSrc ="/assets/icons/user.svg"
      iconAlt="user"
      />
      <CustomForms 
      fieldtype={FormFieldType.PHONE_INPUT}
      control={form.control}
      name="phone"
      label="Phone Number"
      placeholder="+91 00000 00000"
      />
      <SubmitButton isLoading={isLoading}>Get started</SubmitButton>
    </form>
  </Form>
  );

}

export default PatientForm;