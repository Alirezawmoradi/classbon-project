'use client';

import { logout } from '@/actions/auth';
import {getSession, useSession} from 'next-auth/react';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { Loading } from '../loading';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export const HeaderUserSection = () => {
    const {data: session} = useSession();
    const router = useRouter();
    const [signOutState, action] = useFormState(logout, undefined);

    useEffect(() => {
        if (signOutState?.isSuccess) {
            const fetchSession = async () => await getSession();
            fetchSession();
            router.push('/');
        }
    }, [signOutState, router])
    return (
        <>
            {
                session?.user ? <> <p>{session.user.mobile}</p>
                        <form action={action as () => void}>
                            <LogoutButton/>
                        </form>
                    </> :
                    <Link href="/signin">ورود یا ثبت نام</Link>
            }
        </>
    )
}

const LogoutButton = () => {
    const {pending} = useFormStatus();

    return (
        <button className='text-error'>
            {
                pending && <Loading size='tiny'/>
            }
            خروج از حساب کاربری
        </button>
    )
}