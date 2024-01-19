'use client';
import {PropsWithChildren} from "react";
import {queryClient} from "@/lib/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

function QueryProvider({children}: PropsWithChildren) {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default QueryProvider;