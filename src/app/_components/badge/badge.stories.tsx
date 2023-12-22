import {Meta, StoryObj} from "@storybook/react";
import {Badge} from "@/app/_components/badge/badge";
import {withTests} from "@storybook/addon-jest";
import results from '../../../../.jest-test-results.json';

const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}
export default meta;

type Story = StoryObj<typeof Badge>;
export const Tests: Story = {
    render: (args) => (<Badge {...args}>default Badge</Badge>)
}
Tests.decorators = [withTests({results})];

export const BrandColors: Story = {
    render: () => (
        <>
            <Badge>Default</Badge>
            <Badge variant='neutral'>Neutral</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='accent'>Accent</Badge>
            <Badge variant='ghost'>Ghost</Badge>
        </>
    )
}
export const StateColors: Story = {
    render: () => (
        <>
            <Badge variant='error'>Error</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='info'>Info</Badge>
        </>
    )
}
export const BadgeSize: Story = {
    render: () => (
        <>
            <Badge size='normal'>Normal</Badge>
            <Badge size='tiny'>Tiny</Badge>
            <Badge size='small'>Small</Badge>
            <Badge size='large'>Large</Badge>
        </>
    )
};