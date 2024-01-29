import {Meta, StoryObj} from "@storybook/react";
import {Textbox} from "./textbox";
import {withTests} from "@storybook/addon-jest";
import results from "../../../../.jest-test-results.json";

const meta: Meta<typeof Textbox> = {
    component: Textbox,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}
export default meta;
type Story = StoryObj<typeof Textbox>;
export const Tests: Story = {
    render: (args) => (<Textbox {...args}>Click here</Textbox>)
}
Tests.decorators = [withTests({results})];
export const BrandColors: Story = {
    render: () => (
        <>
            <Textbox>Default</Textbox>
            <Textbox variant="neutral">Neutral</Textbox>
            <Textbox variant="primary">Primary</Textbox>
            <Textbox variant="secondary">Secondary</Textbox>
            <Textbox variant="accent">Accent</Textbox>
            <Textbox variant="ghost">Ghost</Textbox>
        </>
    )
}
export const StateColors: Story = {
    render: () => (
        <>
            <Textbox variant="success">Success</Textbox>
            <Textbox variant="info">Info</Textbox>
            <Textbox variant="warning">Warning</Textbox>
            <Textbox variant="error">Error</Textbox>
        </>
    )
}
export const TextboxSize: Story = {
    render: () => (
        <>
            <Textbox variant="neutral" size="tiny">
                Tiny
            </Textbox>
            <Textbox variant="neutral" size="small">
                Small
            </Textbox>
            <Textbox variant="neutral" size="normal">
                Normal
            </Textbox>
            <Textbox variant="neutral" size="large">
                Large
            </Textbox>
        </>
    )
}