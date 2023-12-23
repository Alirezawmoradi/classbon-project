import React from "react";
import {AvatarProps} from "@/app/_components/avatar/avatar.types";
import {Size} from "@/app/types/size.type";
import classNames from "classnames";
import Image from "next/image";
import {IconUserProfile} from "@/app/_components/icons/icons";

export const Avatar: React.FC<AvatarProps> = ({variant='primary',className,size='normal',src,alt=''}: AvatarProps) => {
    const sizeClasses : Record<Size, number> = {
        tiny: 40,
        small: 50,
        normal: 70,
        large: 120
    }
    const classes = classNames('avatar',
        {
            className,
            [`avatar-${variant}`]: variant,
            [`${sizeClasses[size]}`]:size
        }
    )
    return (
        <div className={classes} style={{width:sizeClasses[size],height:sizeClasses[size]}} data-testid='avatar'>
            {
                src?(<Image src={src} alt={alt} width={sizeClasses[size]} height={sizeClasses[size]}/> ):(
                    <IconUserProfile width={sizeClasses[size]/2} height={sizeClasses[size]/2}/>
                )
            }
        </div>
    )
}