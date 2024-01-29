import React from "react";
import {TextboxProps} from "@/app/_components/textbox/textbox.types";
import {Size} from "@/app/types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
    tiny: 'textbox-xs',
    small: 'textbox-sm',
    normal: 'textbox-md',
    large: 'textbox-lg',
};
export const Textbox: React.FC<TextboxProps> = ({variant='ghost',type='text',className,size='normal',...rest}: TextboxProps) => {
    const classes =  classNames(
        'textbox',
        'w-full',
        className,
        {[`textbox-${variant}`]:variant},
        {[`${sizeClasses[size]}`]:size}
    )
    return <input type={type} className={classes} {...rest}/>
}