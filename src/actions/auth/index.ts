'use server'

import {redirect} from "next/navigation";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";

export async function signInAction(mobile: string) {

    const validatedData = signInSchema.safeParse({
        mobile
    });
    if (!validatedData.success) {
        console.log('error');
    } else {
        console.log(mobile);
        redirect('/');
    }
}