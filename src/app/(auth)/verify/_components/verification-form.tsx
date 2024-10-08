'use client';
import {Button} from "@/app/_components/button";
import Link from "next/link";
import {AuthCode} from "@/app/_components/auth-code";
import {useEffect, useRef, useState, useTransition} from "react";
import {AuthCodeRef} from "@/app/_components/auth-code/auth-code.types";
import {Timer} from "@/app/_components/timer";
import {TimerRef} from "@/app/_components/timer/timer.types";
import {useNotificationStore} from "@/stores/notification.store";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {useFormState} from "react-dom";
import {sendAuthCode, verify} from "@/actions/auth";
import {getSession} from "next-auth/react";

const getTwoMinutesFromNow = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);
    return time;
};

const VerificationForm = ({mobile}: { mobile: string }) => {
    const [showResendCode, setShowResendCode] = useState<boolean>(false);
    const authCodeRef = useRef<AuthCodeRef>(null);
    const timerRef = useRef<TimerRef>(null);

    const {handleSubmit, setValue, register, formState: {isValid}} = useForm<VerifyUserModel>();

    const showNotification = useNotificationStore(state => state.showNotification);

    const [sendAuthCodeState, sendAuthCodeAction] = useFormState(sendAuthCode, null)
    const [verifyState, verifyAction] = useFormState(verify, undefined);
    const [verifyPendingState, startTransition] = useTransition()

    const router = useRouter();

    const params = useSearchParams();
    const username = params.get('mobile')!;

    useEffect(() => {
        if (verifyState && !verifyState.isSuccess) {
            showNotification({
                message: '',
                type: 'error'
            });
        }
        else if(verifyState?.isSuccess) {
            const fetchSession = async () => await getSession();
            fetchSession();
            router.push('/student/courses');
        }
    })

    useEffect(() => {
        if (sendAuthCodeState && !sendAuthCodeState.isSuccess && sendAuthCodeState.error) {
            showNotification({
                type: 'error',
                message: sendAuthCodeState.error.detail!
            })
        } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
            console.log(sendAuthCodeState.response)
            showNotification({
                type: 'info',
                message: 'کد تایید به شماره شما ارسال شد'
            })
        }
    }, [sendAuthCodeState, showNotification])


    const onSubmit = (data: VerifyUserModel) => {
        data.username = username;

        startTransition(async () => {
            verifyAction({
                username: data.username,
                code: data.code,
            })
        })
    }

    register('code', {
        validate: (value: string) => (value ?? '').length === 5
    })

    const resendAuthCode = () => {
        timerRef.current?.restart(getTwoMinutesFromNow());
        setShowResendCode(false);
        authCodeRef.current?.clear();
        sendAuthCodeAction(mobile);
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
                <Button type='submit' variant='primary' isDisabled={!isValid} isLoading={verifyPendingState}>تایید و
                    ادامه</Button>
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