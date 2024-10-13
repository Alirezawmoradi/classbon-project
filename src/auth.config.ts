import {NextAuthConfig} from "next-auth";
import {response} from "express";

export const authConfig = {
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async authorized({auth, request}) {
            const {nextUrl} = request;

            const isAuthenticated = !!auth?.user;

            const authRoutes = ['/signin', '/verify'];
            const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

            if (isAuthRoutes && isAuthenticated) {
                return Response.redirect(new URL('/student/courses', nextUrl));
            }

            const isProtectedRoutes = nextUrl.pathname.startsWith('/student');

            if (isProtectedRoutes && !isAuthenticated) {
                return Response.redirect(new URL('/signin', nextUrl));
            }

            return true;

        }
    },
    providers: []
} satisfies NextAuthConfig
