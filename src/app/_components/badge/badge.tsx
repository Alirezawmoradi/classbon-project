import React from "react";
import {BadgeProps} from "@/app/_components/badge/badge.types";
import classNames from "classnames";
import {Size} from "@/app/types/size.type";

const sizeClasses: Record<Size, string> = {
    tiny: 'badge-xs',
    small: 'badge-sm',
    normal: 'badge-md',
    large: 'badge-lg'
}
export const Badge: React.FC<BadgeProps> = ({variant, className, children, size = "tiny"}: BadgeProps) => {
    const classes = classNames(
        'badge',
        className,
        {[`badge-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size},
    )
    return (
        <span className={classes}>
            {children}
        </span>
    )
}