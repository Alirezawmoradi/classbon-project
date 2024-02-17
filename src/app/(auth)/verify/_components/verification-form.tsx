'use client';
import {Button} from "@/app/_components/button";
import Link from "next/link";
import {AuthCode} from "@/app/_components/auth-code";
import {useRef} from "react";
import {AuthCodeRef} from "@/app/_components/auth-code/auth-code.types";
import {Timer} from "@/app/_components/timer";

const VerificationForm = () => {
    const authCodeRef = useRef<AuthCodeRef>(null);
    const getTwoMinutesFromNow = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 120);
        return time;
    };
    return (
        <>
            <h5 className='text-2xl'>کد تایید</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className='flex flex-col gap-6 mt-10 flex-1'>
                <AuthCode className='mt-10' ref={authCodeRef} onChange={value => {
                    console.log(value)
                }}
                />
                <Timer className='my-8' size='small' expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false}/>
                <Button isLink={true} onClick={authCodeRef.current?.clear}>ارسال مجدد کد تایید</Button>
                <Button type='submit' variant='primary'>تایید و ادامه</Button>

                <div className='flex items-start gap-1 justify-center mt-auto'>
                    <span>برای اصلاح شماره موبایل</span>
                    <Link href="/signin">اینجا</Link>
                    <span>کلیک کنید</span>
                </div>
            </form>
        </>
    )
}
export default VerificationForm;