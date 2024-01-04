'use client';
import {PropsWithChildren} from "react";
import {QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/react-query";
import {ReactQueryDevtools} from "react-query/devtools";

function QueryProvider({children}: PropsWithChildren) {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default QueryProvider;