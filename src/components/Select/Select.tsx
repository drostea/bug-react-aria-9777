import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  Text,
  type ListBoxItemProps,
  type SelectProps as AriaSelectProps,
  type ValidationResult,
} from 'react-aria-components';

import './Select.css';

export interface SelectItem {
  id: string;
  label: string;
  isDisabled?: boolean;
}

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, 'children'> {
  /** Label displayed above the select button */
  label?: string;
  /** Placeholder text shown when no option is selected */
  placeholder?: string;
  /** Description text shown below the select */
  description?: string;
  /** Error message or validation function */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /** The list of items to display */
  items?: SelectItem[];
}

/** A select component built on top of react-aria-components */
export function Select<T extends object>({
  label,
  placeholder = 'Select an option',
  description,
  errorMessage,
  items = [],
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect className="select" placeholder={placeholder} {...props}>
      {label && <Label>{label}</Label>}
      <Button className="select-button">
        <SelectValue className="select-value" />
        <svg
          aria-hidden="true"
          className="select-icon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      {description && (
        <Text className="select-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="select-error">{errorMessage}</FieldError>
      <Popover className="select-popover">
        <ListBox className="select-list-box" items={items as Iterable<object>}>
          {(item) => (
            <SelectListBoxItem
              key={(item as SelectItem).id}
              id={(item as SelectItem).id}
              isDisabled={(item as SelectItem).isDisabled}
            >
              {(item as SelectItem).label}
            </SelectListBoxItem>
          )}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

/** A single item inside the Select's ListBox */
export function SelectListBoxItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem className="select-item" {...props}>
      {({ isSelected }) => (
        <>
          {isSelected && (
            <svg
              aria-hidden="true"
              className="select-item-check"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M3 8l4 4 6-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {props.children as React.ReactNode}
        </>
      )}
    </ListBoxItem>
  );
}
