import {Variant} from "@/app/types/variant.type";
import {Size} from "@/app/types/size.type";

export type ComponentBase = {
    isDisabled?:boolean;
    className?:string;
    variant?:Variant;
    size?:Size;
}