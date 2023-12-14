import React from "react";
import {ButtonProps, ButtonShape} from "@/app/_components/button/button.types";
import classNames from "classnames";
import {Size} from "@/app/types/size.type";
import { Loading } from "../loading";

const sizeClasses: Record<Size, string> = {
    tiny: 'btn-xs',
    small: 'btn-sm',
    normal: '',
    large: 'btn-lg'
}
const shapeClasses: Record<ButtonShape, string> = {
    default: '',
    wide: 'btn-wide',
    full: 'btn-block',
    square: 'btn-square',
}
export const Button: React.FC<ButtonProps> = ({
                                                  variant,
                                                  size = 'normal',
                                                  isDisabled = false,
                                                  isOutline = false,
                                                  shape = 'default',
                                                  isLoading = false,
                                                  loadingType = 'spinner',
                                                  loadingText = 'درحال ارسال درخواست ...',
                                                  type = 'button',
                                                  isLink = false,
                                                  animatedIcon = false,
                                                  children,
                                                  className,
                                                  ...rest
                                              }: ButtonProps) => {
    const classes = classNames(
        'btn',
        className,
        {'btn-outline': isOutline},
        {'btn-link': isLink},
        {'animated-icon': animatedIcon},
        {'pointer-events-none opacity-80': isLoading},
        {[`btn-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size},
        {[`${shapeClasses[shape]}`]: shape}
    )
    return (
        <button type={type} disabled={isDisabled} {...rest} className={classes}>
            {isLoading && <Loading type={loadingType}/> }
            {isLoading ? loadingText : children}
        </button>
    )
}