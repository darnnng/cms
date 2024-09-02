import { Controller } from "react-hook-form";
import { Input, Select } from "ui/src/components";
import { FormFieldProps } from "./FormField.types";

export const FormField = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  className,
  options
}: FormFieldProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange }, fieldState: { error } }) => {
      return type === "select" && options?.length ? (
        <Select
          id={name}
          value={value}
          placeholder={placeholder}
          options={options}
          onValueChange={onChange}
          triggerClassName={className}
        />
      ) : (
        <Input
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          label={label}
          type={type}
          containerClass={className}
          errorMessage={error?.message}
        />
      );
    }}
  />
);
