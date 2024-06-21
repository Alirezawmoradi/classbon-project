'use client';
import {Button} from "@/app/_components/button";
import {useForm} from "react-hook-form";
import {SignIn} from "@/app/(auth)/signin/_types/signin.types";
import {TextInput} from "@/app/_components/form-input";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {signInAction} from "@/actions/auth";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<SignIn>({
        resolver: zodResolver(SignInSchema)
    });

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
        signInAction(data.mobile);
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
            </form>
        </>
    );
}
export default SignInForm;