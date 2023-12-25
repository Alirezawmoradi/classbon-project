import React from "react";
import {ProgressProps} from "@/app/_components/progress/progress.types";
import classNames from "classnames";
import {Size} from "@/app/types/size.type";

export const Progress: React.FC<ProgressProps> = ({variant = 'neutral', size = 'small', className, value}: ProgressProps) => {
    const sizeClasses : Record<Size, string> = {
        tiny:'progress-xs',
        small:'progress-sm',
        normal:'progress-md',
        large:'progress-lg'
    }
    const classes = classNames(
        'progress',
        className,
        {
            [`progress-${variant}`]: variant,
            [`${sizeClasses[size]}`]: size
        });
    return (
        <progress value={value} max='100' className={classes}/>
    )
}