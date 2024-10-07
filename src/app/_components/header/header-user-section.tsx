'use client'
import {useSession} from "next-auth/react";
import Link from "next/link";

export const HeaderUserSection = () => {
    const {data: session} = useSession()
    return (
        <>
            {
                session?.user ? <p>{session.user.mobile}</p>:
                    <Link href={'/signin'}>ورود یا ثبت نام</Link>
            }
        </>
    )
}