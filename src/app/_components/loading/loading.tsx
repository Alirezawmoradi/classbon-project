import React from "react";
import {LoadingProps} from "@/app/_components/loading/loading.types";
import classNames from "classnames";
import {Size} from "@/app/types/size.type";

export const Loading: React.FC<LoadingProps> = ({type='spinner',variant,size='normal',className}: LoadingProps) => {
    const sizeClasses : Record<Size, string>={
        tiny:'loading-xs',
        small:'loading-sm',
        normal:'loading-md',
        large:'loading-lg'
    }
    const classes = classNames(
        'loading',
        className,
        {[`loading-${type}`]:type},
        {[`${sizeClasses[size]}`]:size},
        {[`loading-${variant}`]:variant},
    )
    return(
        <span className={classes}></span>
    )
}