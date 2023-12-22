import {render} from "@testing-library/react";
import {Price} from "@/app/_components/price/price";

describe('Price Component', () => {
    test('renders a default price', () => {
        const {getByText} = render(<Price text='default Price'/>);
        expect(getByText('default Price')).toBeInTheDocument();
    });
    test('renders a default text', () => {
        const {getByText} = render(<Price text='رایگان'/>);
        expect(getByText('رایگان')).toHaveTextContent('رایگان');
    });
})