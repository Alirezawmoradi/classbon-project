import {z} from "zod";
import {SignInSchema} from "@/app/(auth)/signin/_types/signin.schema";

export type SignIn= z.infer<typeof SignInSchema>