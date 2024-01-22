import {Meta, StoryObj} from "@storybook/react";
import {withTests} from "@storybook/addon-jest";
import results from '../../../../.jest-test-results.json';
import {Alert} from "@/app/_components/alert/alert";


const meta: Meta<typeof Alert> = {
    component: Alert,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}
export default meta;
type Story = StoryObj<typeof Alert>
export const Tests: Story = {
    render: (args) => (<Alert {...args}>default Alert</Alert>)
}
Tests.decorators = [withTests({results})];
export const BrandColors: Story = {
    render: () => (
        <>
            <Alert>Default</Alert>
            <Alert variant='neutral'>Neutral</Alert>
            <Alert variant='primary'>Primary</Alert>
            <Alert variant='secondary'>Secondary</Alert>
            <Alert variant='accent'>Accent</Alert>
            <Alert variant='ghost'>Ghost</Alert>
        </>
    )
}
export const StateColors: Story = {
    render: () => (
        <>
            <Alert variant='error'>Error</Alert>
            <Alert variant='warning'>Warning</Alert>
            <Alert variant='success'>Success</Alert>
            <Alert variant='info'>Info</Alert>
        </>
    )
}