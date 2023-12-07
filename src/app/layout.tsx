import './globals.css';
import {Figtree} from 'next/font/google';
import localFont from "next/font/local";
import {Header} from "@/app/_components/header";
import {Footer} from "@/app/_components/footer";

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree'
})
const iranYekan = localFont({
    src: [
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebThin.woff2',
            weight: '100',
            style: 'normal'
        },
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebLight.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebRegular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebMedium.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebBold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/iranyekan/IRANYekanWebBlack.woff2',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-iranyekan'
})
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html dir='rtl' className={`dark ${figtree.variable} ${iranYekan.variable}`}>
        <body className='min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content'>
        <Header/>
        <div className='flex-1 flex'>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}
