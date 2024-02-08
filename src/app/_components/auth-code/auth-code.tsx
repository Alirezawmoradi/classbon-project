"use client";

import React, {useRef} from "react";
import {AuthCodeProps, AuthInputProps} from "@/app/_components/auth-code/auth-code.types";
import classNames from "classnames";


export const AuthCode: React.FC<AuthCodeProps> = ({
                                                      variant = 'ghost',
                                                      autoFocus = true,
                                                      className,
                                                      isDisabled,
                                                      length = 5,
                                                      onChange
                                                  }: AuthCodeProps) => {
    if (length < 1) {
        throw new Error('تعداد ارقام باید بزرگ تر از صفر باشد')
    }
    const inputsRef = useRef<Array<HTMLInputElement>>([]);

    const inputProps: AuthInputProps = {
        min: '0',
        max: '9',
        pattern: '[0-9]{1}'
    }

    const sedResult = () => {
    }

    const handleOnChange = () => {
    }

    const handleOnFocus = () => {
    }

    const handleOnKeyDown = () => {
    }

    const classes = classNames('textbox flex-1 w-1 text-center', {
        [`textbox-${variant}`]: variant

    })

    const inputs = ([]);
    for (let i = 0; i < length; i++) {
        inputs.push(
            <input
                type='text'
                maxLength={1}
                disabled={isDisabled}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onKeyDown={handleOnKeyDown}
                className={classes}
                ref={
                    (element: HTMLInputElement) => {
                        inputsRef.current[i] = element;
                    }
                }
            />
        )
    }


    return (
        <>
            <div className='flex gap-4 flex-row-reverse'>
                {inputs}
            </div>
        </>
    )
}
export default AuthCode;