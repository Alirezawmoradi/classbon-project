import React from "react";
import {AlertProps} from "@/app/_components/alert/alert.types";
import classNames from "classnames";
import {IconInfo} from "@/app/_components/icons/icons";

export const Alert: React.FC<AlertProps> = ({variant, className, showIcon = true, children}: AlertProps) => {
    const classes = classNames(
        "alert",
        {[`alert-${variant}`]: variant},
        className
    )
    return (
        <div className={classes}>
            {showIcon && <IconInfo width={18}/>}
            {children}
        </div>
    )
}