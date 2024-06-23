'use client';
import {Button} from "@/app/_components/button";
import {useForm} from "react-hook-form";
import {useFormState} from "react-dom";
import {SignIn} from "@/app/(auth)/signin/_types/signin.types";
import {TextInput} from "@/app/_components/form-input";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {signInAction} from "@/actions/auth";
import {Alert} from "@/app/_components/alert";
import {useEffect} from "react";
import {useNotificationStore} from "@/stores/notification.store";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<SignIn>({
        resolver: zodResolver(signInSchema)
    });

    // const router = useRouter();

    const showNotification = useNotificationStore(state => state.showNotification)

    const [formState, action] = useFormState(signInAction, {message: ''});

    useEffect(() => {
        if (formState.message) {
            showNotification({
                message: formState.message,
                type: 'error'
            })
        }
    }, [formState, showNotification])

    // const router = useRouter();
    //
    // const showNotification = useNotificationStore(state => state.showNotification)
    //
    // router.push(`/verify?mobile=${getValues('mobile')}`);
    // showNotification({
    //     message: 'کد تایید به شماره شما ارسال شد',
    //     type: 'info'
    // })

    const onSubmit = (data: SignIn) => {

        const formData = new FormData();
        formData.append('mobile', data.mobile)
        action(formData);
        // signIn.submit(data);
    }
    return (
        <>
            <h5 className='text-2xl'>ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className='flex flex-col gap-6 mt-16' onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SignIn>
                    register={register}
                    name={"mobile"}
                    errors={errors}
                />

                <Button type='submit' variant='primary'>
                    تایید و دریافت کد
                </Button>
                {
                    formState.message &&
                    <Alert variant='error'>{formState.message}</Alert>
                }
            </form>
        </>
    );
}
export default SignInForm;