import {render} from "@testing-library/react";
import {Alert} from "@/app/_components/alert/alert";

describe('Alert Component', () => {
    test('renders a default alert', () => {
        const {getByTestId} = render(<Alert children='Defualt Alert'/>);
        expect(getByTestId('alert')).toBeInTheDocument();
    });
    test('should contain children property', () => {
        const {getByTestId} = render(<Alert children='Contain children property'/>);
        expect(getByTestId('alert')).toHaveProperty('children');
    });
    test('should contain className property', () => {
        const {getByTestId} = render(<Alert children='Defualt Alert' className=''/>);
        expect(getByTestId('alert')).toHaveProperty('className');
    });
    test('applies the correct css class for different alert variants', () => {
        const {getByTestId, rerender} = render(<Alert children='Defualt Alert' variant='warning'/>);
        expect(getByTestId('alert')).toHaveClass('alert-warning');
        rerender(<Alert children='Defualt Alert' variant='success'/>);
        expect(getByTestId('alert')).toHaveClass('alert-success');
    })
})