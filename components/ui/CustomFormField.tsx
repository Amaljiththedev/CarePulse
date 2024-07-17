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
    name:string,
    placeholder?:string,
    label?:string,
    iconSrc?:string,
    iconAlt?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeselect?:boolean,
    children?:React.ReactNode,
    renderSkeleton?:(field:any)=>React.ReactNode,
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldtype) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

  }
}

const CustomFormField = (props:CustomProps) => {
  const {control, fieldType ,name,label} =props;
  return (
    <FormField
    control={control}
    name="username"
    render={({ field }) => (
      <FormItem className='flex-1'>
        {fieldType!==FormFieldType.CHECKBOX && label &&(
          <FormLabel>{label}</FormLabel>
        )}
        <RenderField field={field} props={props}/>
        <FormMessage className='shad-error' />
      </FormItem>
    )}
  />
  )
}

export default CustomFormField