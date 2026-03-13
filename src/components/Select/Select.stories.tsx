import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';

const fruits: { id: string; label: string; isDisabled?: boolean }[] = [
  { id: 'apple', label: 'Apple' },
  { id: 'banana', label: 'Banana' },
  { id: 'blueberry', label: 'Blueberry' },
  { id: 'grapes', label: 'Grapes' },
  { id: 'mango', label: 'Mango' },
  { id: 'orange', label: 'Orange' },
  { id: 'pineapple', label: 'Pineapple' },
  { id: 'watermelon', label: 'Watermelon', isDisabled: true },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    description: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isRequired: { control: 'boolean' },
  },
  args: {
    items: fruits,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Favourite fruit',
    placeholder: 'Select a fruit…',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Favourite fruit',
    placeholder: 'Select a fruit…',
    description: 'Choose the fruit you enjoy the most.',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Favourite fruit',
    defaultSelectedKey: 'mango',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Favourite fruit',
    placeholder: 'Select a fruit…',
    isDisabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Favourite fruit',
    placeholder: 'Select a fruit…',
    isRequired: true,
  },
};
