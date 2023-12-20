import {describe} from "node:test";
import {screen, render} from "@testing-library/react";
import {Button} from ".";

describe('Button Component', () => {
    test('renders a default button', () => {
        const {getByText} = render(<Button>Click here</Button>);
        expect(getByText('Click here')).toBeInTheDocument();
    });
    test('disables the button when isDisabled prop is true', () => {
        render(<Button isDisabled={true}>Click here</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
    test('applies the correct css class for different button variants', () => {
        const {rerender} = render(<Button variant='primary'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-primary');
        rerender(<Button variant='info'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-info');
    });
    test('applies the correct css class for different button sizes', () => {
        const {rerender} = render(<Button size='tiny'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-xs');
        rerender(<Button size='small'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-sm');
    });
    test('applies the correct css class for different button shapes', () => {
        const {rerender} = render(<Button shape='square'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-square');
        rerender(<Button shape='full'>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-block');
    });
    test('change text of button when isLoading prop is true', () => {
        const {rerender} = render(<Button isLoading={true}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('درحال ارسال درخواست ...');
        rerender(<Button isLoading={false}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click here');
    });
    test('applies the correct css class when animatedIcon is true', () => {
        render(<Button animatedIcon={true}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('animated-icon');
    });
    test('applies the correct css class when isLink is true', () => {
        render(<Button isLink={true}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-link');
    });
    test('applies the correct css class when isOutline is true', () => {
        const {rerender} = render(<Button isOutline={true}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn-outline');
        rerender(<Button isOutline={false}>Click here</Button>);
        expect(screen.getByRole('button')).toHaveClass('btn');
    });

    test('show rendered button', () => {
        render(<Button variant='primary' isOutline={true} size='large' isDisabled={true}>Click here</Button>);
        screen.debug();
    })
})