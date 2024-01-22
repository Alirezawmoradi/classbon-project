import {ComponentBase} from "@/app/types/component-base.type";
import React from "react";

export type AlertProps = Omit<ComponentBase, 'isDisabled' | 'size'> & {
    showIcon?: boolean,
    children: React.ReactNode
}