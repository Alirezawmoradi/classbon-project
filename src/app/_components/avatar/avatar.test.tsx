import {render} from "@testing-library/react";
import {Avatar} from "./avatar";

describe('Avatar Component', () => {
    test('renders a default avatar', () => {
        const {getByTestId} = render(<Avatar/>);
        expect(getByTestId('avatar')).toBeInTheDocument();
    });
    test('should contain className property', () => {
        const {getByTestId} = render(<Avatar className=''/>);
        expect(getByTestId('avatar')).toHaveProperty('className')
    });
    test('applies the correct css class for different avatar variants', () => {
        const {rerender, getByTestId} = render(<Avatar variant='warning'/>);
        expect(getByTestId('avatar')).toHaveClass('avatar-warning');
        rerender(<Avatar variant='error'/>);
        expect(getByTestId('avatar')).toHaveClass('avatar-error');
    });
    test('applies the correct css class for different avatar sizes', () => {
        const {rerender, getByTestId} = render(<Avatar size='tiny'/>);
        expect(getByTestId('avatar')).toHaveAttribute('style', 'width: 40px; height: 40px;');
        rerender(<Avatar size='large'/>);
        expect(getByTestId('avatar')).toHaveAttribute('style', 'width: 120px; height: 120px;');
    });
})