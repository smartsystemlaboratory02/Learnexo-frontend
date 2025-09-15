"use client";

import type { SelectHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormField,
  FormMessage,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Option } from "@/utils/types/baseTypes";

const COUNTRIES: Option[] = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "jp", label: "Japan" },
  { value: "br", label: "Brazil" },
];

const schema = z.object({
  country: z.string().min(1, "Country is required"),
});

type schemaType = z.infer<typeof schema>;

export default function SelectWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-sm mx-auto space-y-3 w-full"
      >
        <Selector<schemaType>
          name="country"
          title="Select country"
          options={COUNTRIES}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

type SelectWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
  options: Option[];
} & Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "onValueChange" | "value" | "defaultValue" | "dir"
>;

export function Selector<K>({
  title,
  name,
  className,
  options,
  ...props
}: SelectWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={name}>{title}</FormLabel>}
          <Select {...field} {...props} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                id={name}
                className={cn(
                  "aria-invalid:border-destructive aria-invalid:ring-destructive w-full",
                  className
                )}
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {options.map((item) => (
                <SelectItem key={`${name}_${item.value}`} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
