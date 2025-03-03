import React from 'react';
import { FormFieldType } from '../forms/PatientForm';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from 'react-hook-form';
import Image from 'next/image'; // Make sure you import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js/core';

interface CustomProps {
  control: Control<any>,
  fieldtype: FormFieldType,
  name: string,
  placeholder?: string,
  label?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?: boolean,
  dateFormat?: string,
  showTimeselect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldtype, iconSrc, iconAlt, placeholder } = props;

  switch (fieldtype) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
      case FormFieldType.PHONE_INPUT:
        return(
          <FormControl>
            <PhoneInput
            defaultCountry='IN'
            international
            withCountryCallingCode
            value={field.value as E164Number| undefined}
            onChange={field.onChange}
            className='input-phone shad-input border-0'
            />
          </FormControl>
        )
    default:
      
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldtype, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldtype !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className='shad-error' />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
