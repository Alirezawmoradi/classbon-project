'use client';
import {Button} from "@/app/_components/button";
import {useForm} from "react-hook-form";
import {SignIn} from "@/app/(auth)/signin/types/signin.types";
import {TextInput} from "@/app/_components/form-input";
import {useSignIn} from "@/app/(auth)/signin/_api/signin";
import {useRouter} from "next/navigation";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<SignIn>();

    const router = useRouter();
    const signIn = useSignIn({
        onSuccess: () => {
            router.push(`/verify?mobile=${getValues('mobile')}`);
        }
    })

    const onSubmit = (data: SignIn) => {
        signIn.submit(data);
    }

    return (
        <>
            <h5 className='text-2xl'>ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className='flex flex-col gap-6 mt-16' onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SignIn>
                    register={register}
                    name={"mobile"}
                    rules={{
                        required: 'شماره موبایل الزامی است',
                        maxLength: {
                            value: 11,
                            message: 'شماره موبایل باید 11 رقم باشد'
                        },
                        minLength: {
                            value: 11,
                            message: 'شماره موبایل باید 11 رقم باشد'
                        }
                    }}
                    errors={errors}
                />

                <Button type='submit' variant='primary' isLoading={signIn.isPending}>
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
}
export default SignInForm;