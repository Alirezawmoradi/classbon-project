'use client';
import {Button} from "@/app/_components/button";
import Link from "next/link";
import {AuthCode} from "@/app/_components/auth-code";
import {useRef, useState} from "react";
import {AuthCodeRef} from "@/app/_components/auth-code/auth-code.types";
import {Timer} from "@/app/_components/timer";
import {TimerRef} from "@/app/_components/timer/timer.types";
import {useSendAuthCode} from "@/app/(auth)/verify/_api/send-auth-code";
import {useNotificationStore} from "@/stores/notification.store";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";

const getTwoMinutesFromNow = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);
    return time;
};

const VerificationForm = () => {
    const [showResendCode, setShowResendCode] = useState<boolean>(false);
    const authCodeRef = useRef<AuthCodeRef>(null);
    const timerRef = useRef<TimerRef>(null);

    const {handleSubmit, setValue, register, formState: {isValid}} = useForm<VerifyUserModel>();

    const showNotification = useNotificationStore(state => state.showNotification);

    const params = useSearchParams();
    const username = params.get('mobile')!;

    const sendAuthCode = useSendAuthCode({
        onSuccess: () => {
            showNotification({
                type: 'info',
                message: 'کد تایید به شماره شما ارسال شد'
            })
        }
    })

    const onSubmit = (data: VerifyUserModel) => {
        data.username = username;
        console.log(data);
    }

    register('code', {
        validate: (value: string) => (value ?? '').length === 5
    })

    const resendAuthCode = () => {
        timerRef.current?.restart(getTwoMinutesFromNow());
        setShowResendCode(false);
        sendAuthCode.submit(username);
        authCodeRef.current?.clear();
    }
    return (
        <>
            <h5 className='text-2xl'>کد تایید</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className='flex flex-col gap-6 mt-10 flex-1' onSubmit={handleSubmit(onSubmit)}>
                <AuthCode className='mt-10' ref={authCodeRef} onChange={value => {
                    setValue('code', value, {shouldValidate: true})
                }}
                />
                <Timer className='my-8' size='small' ref={timerRef} onExpire={() => {
                    setShowResendCode(true)
                }} expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false}/>
                <Button isLink={true} isDisabled={!showResendCode} onClick={resendAuthCode}>ارسال مجدد کد تایید</Button>
                <Button type='submit' variant='primary' isDisabled={!isValid}>تایید و ادامه</Button>
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