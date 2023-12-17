import {ComponentBase} from "@/app/types/component-base.type";
import {ReactNode} from "react";

export type BadgeProps = Omit<ComponentBase, 'isDisabled'> & {
    children: ReactNode
}