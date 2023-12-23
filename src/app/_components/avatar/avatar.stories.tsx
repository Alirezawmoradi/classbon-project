import {Meta, StoryObj} from "@storybook/react";
import {Avatar} from "@/app/_components/avatar/avatar";
import {withTests} from "@storybook/addon-jest";
import results from '../../../../.jest-test-results.json';
import {Button} from "@/app/_components/button";

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Tests: Story = {
    render: (args) => (<Avatar {...args}/>)
}
Tests.decorators = [withTests({results})];
export const BrandColors: Story = {
    render: () => (
        <>
            <Avatar/>
            <Avatar variant="neutral"/>
            <Avatar variant="primary"/>
            <Avatar variant="secondary"/>
            <Avatar variant="accent"/>
            <Avatar variant="ghost"/>
        </>
    )
}
export const StateColors: Story = {
    render: () => (
        <>
            <Avatar variant="success"/>
            <Avatar variant="info"/>
            <Avatar variant="warning"/>
            <Avatar variant="error"/>
        </>
    )
}
export const AvatarSize: Story = {
    render: () => (
        <>
            <Avatar size="tiny"/>
            <Avatar size="small"/>
            <Avatar size="normal"/>
            <Avatar size="large"/>
        </>
    )
}