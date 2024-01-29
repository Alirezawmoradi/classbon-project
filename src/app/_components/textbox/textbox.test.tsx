import {render} from "@testing-library/react";
import {Textbox} from "@/app/_components/textbox/textbox";

describe('TextBox Component', () => {
    test('renders a default textbox', () => {
        const {getByPlaceholderText} = render(<Textbox placeholder='default textbox'/>);
        expect(getByPlaceholderText('default textbox')).toBeInTheDocument();
    });
    test('applies the correct css class for different textbox variants', () => {
        const {getByPlaceholderText, rerender} = render(<Textbox placeholder='default textbox' variant='primary'/>);
        expect(getByPlaceholderText('default textbox')).toHaveClass('textbox-primary');
        rerender(<Textbox placeholder='default textbox' variant='warning'/>);
        expect(getByPlaceholderText('default textbox')).toHaveClass('textbox-warning');
    });
    test('applies the correct css class for different textbox size', () => {
        const {getByPlaceholderText, rerender} = render(<Textbox placeholder='default textbox' size='tiny'/>);
        expect(getByPlaceholderText('default textbox')).toHaveClass('textbox-xs');
        rerender(<Textbox placeholder='default textbox' size='normal'/>);
        expect(getByPlaceholderText('default textbox')).toHaveClass('textbox-md');
    });
})