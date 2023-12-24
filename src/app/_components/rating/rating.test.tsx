import {render} from "@testing-library/react";
import {Rating} from "./rating";

describe('Rating Component', () => {
    test('renders a default rating', () => {
        const {getByTestId} = render(<Rating rate={0}/>);
        expect(getByTestId('rating')).toBeInTheDocument();
    });
})