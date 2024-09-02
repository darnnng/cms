import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as RadixSelect from "@radix-ui/react-select";
import { clsx } from "clsx";
import { forwardRef, Ref } from "react";
import { Chevron } from "./../../Icons/Chevron";
import {
  ItemGroupType,
  ItemOrGroup,
  ItemResolverProps,
  SelectItemProps,
  SelectItemType,
  SelectProps
} from "./Select.types";

export const selectWrapperClass =
  "flex flex-col gap-4 relative text-bensons-brand-900";
export const selectTriggerClass =
  "group inline-flex items-center justify-between gap-4 h-40 p-16 text-sm text-inherit leading-24 bg-white-900 border-2 border-gray-200 focus:border-black outline-none rounded-full shadow-sm";
export const selectTriggerIconClass =
  "group-data-[state=open]:rotate-180 transition-transform";
export const selectContentClass =
  "mt-8 z-40 bg-white-900 border-[1px] border-gray-200 rounded-xl shadow-lg";
export const selectItemClass =
  "flex items-center max-w-full py-4 pl-16 pr-20 relative text-sm text-inherit";
export const selectItemDataClass =
  "data-[state=checked]:bg-surface-gray data-[highlighted]:bg-surface-gray data-[highlighted]:outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none";
export const selectItemIndicatorClass =
  "absolute right-16 w-24 inline-flex items-center justify-center";
export const scrollAreaRootClass = "w-full h-full";
export const selectViewportClass = "py-8 bg-white rounded-xl overflow-hidden";
export const scrollAreaViewportClass = "w-full h-full max-h-224";
export const scrollAreaScrollbarClass = "w-4 mr-6 py-12";
export const scrollAreaThumbClass = "w-4 rounded-sm bg-scrollbar-body";
export const selectLabelClass = "px-16 text-sm text-gray-500 leading-24";

export function isItemGroup(item: ItemOrGroup): item is ItemGroupType {
  return (item as ItemGroupType).options !== undefined;
}

const SelectItem = forwardRef(
  ({ className, item, ...props }: SelectItemProps, forwardedReference) => {
    const isString = typeof item === "string";

    return (
      <RadixSelect.Item
        className={clsx(selectItemClass, className)}
        value={typeof item === "object" ? item.value : item}
        disabled={isString ? false : item.disabled}
        {...props}
        ref={forwardedReference as Ref<HTMLDivElement>}
      >
        <RadixSelect.ItemText>
          {isString ? item : item.label}
        </RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={selectItemIndicatorClass}>
          <Chevron width={12} height={12} className="stroke-brand" />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);
SelectItem.displayName = "SelectItem";
SelectItem.defaultProps = {
  className: ""
};

const ItemResolver = ({ item, index, length }: ItemResolverProps) => {
  const isGroup = isItemGroup(item);

  return isGroup ? (
    <>
      <RadixSelect.Group>
        <RadixSelect.Label className={selectLabelClass}>
          {item.label}
        </RadixSelect.Label>
        {item.options.map((opt: SelectItemType, index: number) => (
          <ItemResolver
            key={typeof opt === "string" ? opt : opt.label}
            item={opt}
            index={index}
            length={item.options.length}
          />
        ))}
      </RadixSelect.Group>
    </>
  ) : (
    <SelectItem item={item} />
  );
};

export const Select = ({
  className = "",
  triggerClassName,
  placeholder,
  options,
  label,
  id,
  ...props
}: SelectProps) => (
  <div className={clsx(selectWrapperClass, className)}>
    <RadixSelect.Root {...props}>
      {label && <label className="text-sm">{label}</label>}
      <RadixSelect.Trigger
        className={clsx(selectTriggerClass, triggerClassName)}
        aria-label={placeholder}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={selectTriggerIconClass}>
          <Chevron />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content
        position="popper"
        sticky="always"
        className={selectContentClass}
      >
        <div style={{ width: "var(--radix-popper-anchor-width)" }}>
          <ScrollArea.Root className={scrollAreaRootClass} type="auto">
            <RadixSelect.Viewport className={selectViewportClass}>
              <ScrollArea.Viewport className={scrollAreaViewportClass}>
                {options.map((opt, index) => (
                  <ItemResolver
                    key={typeof opt === "string" ? opt : opt.label ?? index}
                    item={opt}
                    index={index}
                    length={options.length}
                  />
                ))}
              </ScrollArea.Viewport>
            </RadixSelect.Viewport>
            <ScrollArea.Scrollbar
              className={scrollAreaScrollbarClass}
              orientation="vertical"
            >
              <ScrollArea.Thumb className={scrollAreaThumbClass} />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </RadixSelect.Content>
    </RadixSelect.Root>
  </div>
);
