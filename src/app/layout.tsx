import './globals.css';
import {Figtree} from 'next/font/google';
import localFont from "next/font/local";

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
        <html  dir='rtl' className={`${figtree.variable} ${iranYekan.variable}`}>
        <body className='flex flex-col min-h-screen font-bold uppercase'>
        <header className='bg-gray-200 flex items-center justify-center h-20'>
            دوره معماری ری اکت
        </header>
        <div className='flex-1 flex'>
            {children}
        </div>
        <footer className='bg-gray-200 flex items-center justify-center h-20'>
            footer
        </footer>
        </body>
        </html>
    )
}
