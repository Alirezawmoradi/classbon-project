import {render} from "@testing-library/react";
import {Badge} from "@/app/_components/badge/badge";

describe('Badge Component', () => {
    test('renders a default badge', () => {
        const {getByText} = render(<Badge>default Badge</Badge>);
        expect(getByText('default Badge')).toBeInTheDocument();
    });
    test('applies the correct css class for different badge variants', () => {
        const {rerender, getByText} = render(<Badge variant='error'>default Badge</Badge>);
        expect(getByText('default Badge')).toHaveClass('badge-error');
        rerender(<Badge variant='ghost'>default Badge</Badge>);
        expect(getByText('default Badge')).toHaveClass('badge-ghost');
    });
    test('applies the correct css class for different badge sizes', () => {
        const {rerender, getByText} = render(<Badge size='tiny'>default Badge</Badge>);
        expect(getByText('default Badge')).toHaveClass('badge-xs');
        rerender(<Badge size='normal'>default Badge</Badge>);
        expect(getByText('default Badge')).toHaveClass('badge-md');
    });
    test('should contain className property', () => {
        const {getByText} = render(<Badge className=''>default Badge</Badge>);
        expect(getByText('default Badge')).toHaveProperty('className');
    })
})