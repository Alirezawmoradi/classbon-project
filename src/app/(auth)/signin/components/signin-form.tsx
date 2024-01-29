'use client';
import {Button} from "@/app/_components/button";
import {Textbox} from "@/app/_components/textbox/textbox";

const SignInForm = () => {
    return (
        <>
            <h5 className='text-2xl'>ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className='flex flex-col gap-6 mt-16'>
                <Textbox placeholder='شماره موبایل'/>
                <Button type='submit' variant='primary'>
                    تایید و دربافت کد
                </Button>
            </form>
        </>
    );
}
export default SignInForm;