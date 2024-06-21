import {z} from "zod";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";

export type SignIn= z.infer<typeof signInSchema>