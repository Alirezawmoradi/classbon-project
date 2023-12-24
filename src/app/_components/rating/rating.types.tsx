import {ComponentBase} from "@/app/types/component-base.type";

export type RatingProps = Omit<ComponentBase, 'isDisabled'> & {
    rate: number;
}