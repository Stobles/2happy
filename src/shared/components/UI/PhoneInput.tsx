"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./Command";
import { Input } from "./Input";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { ScrollArea } from "./ScrollArea";
import { cn } from "@/shared/utils/cn";
import ChevronDownIcon from "../icons/Chevron/ChevronDownIcon";
import { Separator } from "./Separator";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
    hasError?: boolean;
    endIcon?: React.ReactNode;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, title, onChange, hasError, endIcon, ...props }, ref) => {
      return (
        <div
          className={cn(
            "flex items-center gap-2 py-4 px-5 border border-main rounded-xs",
            hasError && "border-red bg-status-muted-error ring-red",
            title && "py-2"
          )}
        >
          <div className={cn("flex flex-col w-full gap-0")}>
            <span className="text-title text-gray-dark">{title}</span>
            <RPNInput.default
              ref={ref}
              className={cn("flex gap-0", className)}
              flagComponent={FlagComponent}
              countrySelectComponent={CountrySelect}
              inputComponent={InputComponent}
              countrySelectProps={{ title }}
              numberInputProps={{ title }}
              smartCaret={false}
              onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
              {...props}
            />
          </div>
          {endIcon}
        </div>
      );
    }
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, title, ...props }, ref) => (
  <Input
    wrapperClassName="p-0 pl-4 border-0 hover:ring-0 focus-within:ring-0 focus-visible:border-0"
    className={cn("p-0 text-placeholder", className)}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  title?: string;
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  title,
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 rounded-e-none rounded-s-lg p-0 focus:z-10",
            title && "py-1"
          )}
          disabled={disabled}
        >
          <FlagComponent
            title={title}
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <span className={cn("px-3", title && "pl-0 px-2")}>
            <ChevronDownIcon
              className={cn(
                "size-4 size-3 opacity-50",
                disabled ? "hidden" : "opacity-100"
              )}
            />
          </span>
          <Separator orientation="vertical" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) => {
  return (
    <CommandItem className="gap-2" onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(
        country
      )}`}</span>
      <CheckIcon
        className={`ml-auto size-4 ${
          country === selectedCountry ? "opacity-100" : "opacity-0"
        }`}
      />
    </CommandItem>
  );
};

const FlagComponent = ({
  title,
  country,
  countryName,
}: RPNInput.FlagProps & { title?: string }) => {
  const Flag = flags[country];

  return (
    <span
      className={cn(
        "flex h-6 w-8 overflow-hidden [&_svg]:size-full",
        title && "h-4 w-6",
        !Flag && "bg-gray"
      )}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
