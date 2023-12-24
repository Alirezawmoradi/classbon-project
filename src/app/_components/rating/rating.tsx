import React from "react";
import {RatingProps} from "@/app/_components/rating/rating.types";
import {IconStar} from "@/app/_components/icons/icons";
import {Size} from "@/app/types/size.type";

export const Rating: React.FC<RatingProps> = ({rate, className, size = 'normal', variant = 'warning'}: RatingProps) => {
    const sizeClasses: Record<Size, number> = {
        tiny: 14,
        small: 18,
        normal: 24,
        large: 30
    }
    return (
        <div className={`flex gap-1 ${className}`} data-testid='rating'>
            {
                [1, 2, 3, 4, 5].map((index) => (
                    <IconStar key={`star-${index}`}
                              width={sizeClasses[size]}
                              height={sizeClasses[size]}
                              fill={rate >= index ? `var(--color-${variant})` : ''}
                              color={rate >= index ? `var(--color-${variant})`:'currentColor'}/>
                ))
            }
        </div>
    )
}