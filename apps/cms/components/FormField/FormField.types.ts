export type SelectOptions = {
  option?: {
    value: string;
    label: string;
  };
};
type SelectItemType =
  | { label: string; value: string; disabled?: boolean }
  | string;

type ItemGroupType = {
  label: string;
  options: SelectItemType[];
};

export type FormFieldProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  className?: string;
  placeholder: string;
  type?: string;
  options?: SelectItemType[] | ItemGroupType[];
};
