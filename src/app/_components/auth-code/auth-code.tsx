"use client";

import React, {useEffect, useRef} from "react";
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
    };

    useEffect(() => {
        if (autoFocus) {
            inputsRef.current[0].focus();
        }
    }, [autoFocus]);

    const sedResult = () => {
        const result = inputsRef.current.map((input) => input.value).join('');
        onChange(result)
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value, nextElementSibling}} = e;

        if (value.match(inputProps.pattern)) {
            if (nextElementSibling !== null) {
                (nextElementSibling as HTMLInputElement).focus();
            }
        } else {
            e.target.value = '';
        }
        sedResult();
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {key} = e;

        const target = e.target as HTMLInputElement;

        if (key === 'Backspace') {
            if (target.value === '') {
                if (target.previousElementSibling !== null) {
                    const previousElement = target.previousElementSibling as HTMLInputElement;
                    previousElement.value = '';
                    previousElement.focus();
                }
            } else {
                target.value = ''
            }
        }

        sedResult();
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