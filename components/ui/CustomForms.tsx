import React from 'react'
import { Button } from "@/components/ui/button"
import { FormFieldType } from '../forms/PatientForm'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'

interface CustomProps{
    control:Control<any>,
    fieldtype:FormFieldType,
}

const CustomForms = ({control , fieldtype }:CustomProps) => {
  return (
    <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
  )
}

export default CustomForms