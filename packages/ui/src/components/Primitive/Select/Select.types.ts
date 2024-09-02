import * as RadixSelect from "@radix-ui/react-select";

export type SelectItemType =
  | { label: string; value: string; disabled?: boolean }
  | string;

export type ItemGroupType = {
  label: string;
  options: SelectItemType[];
};

export type ItemOrGroup = SelectItemType | ItemGroupType;

export type SelectItemProps = {
  className?: string;
  item: SelectItemType;
};

export type ItemResolverProps = {
  item: ItemOrGroup;
  index: number;
  length: number;
};

export type SelectProps = {
  id?: string;
  className?: string;
  triggerClassName?: string;
  dataTestId?: string;
  placeholder: string;
  options: SelectItemType[] | ItemGroupType[];
  label?: string;
} & RadixSelect.SelectProps;
