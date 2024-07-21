import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import {createData} from "@/core/http-service/http-service";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {User, UserToken} from "@/types/user.interface";
import {API_URL} from "@/configs/global";
import {jwtDecode} from "jwt-decode";
import {JWT} from "next-auth/jwt";

declare module 'next-auth' {
    interface User {
        accessToken: string;
    }
}
declare module 'next-auth/jwt' {
    interface JWT {
        user: UserToken;
    }
}
export const {
    signIn,
    signOut,
    auth,
    handlers: {
        GET,
        POST
    }
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {label: 'username', type: 'text'},
                code: {label: 'code', type: 'text'}
            },
            async authorize(credentials) {
                try {
                    const user = await createData<VerifyUserModel, User>(`${API_URL}/verify`, {
                            username: credentials.username as string,
                            code: credentials.code as string
                        }
                    );
                    return {
                        accessToken: user.token
                    }
                } catch (error: unknown) {
                    throw new Error('')
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = jwtDecode<UserToken>(user.accessToken);
                token.user.accessToken = user.accessToken;

                console.log(token.user)
            }
            return token
        },
        // async session() {
        //
        // }
    }
})