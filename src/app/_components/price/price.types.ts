import {ComponentBase} from "@/app/types/component-base.type";

export type PriceProps = Omit<ComponentBase, 'isDisabled' | 'variant'> & {
    price?:number;
    text?:string;
}