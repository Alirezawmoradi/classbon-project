import {render} from "@testing-library/react";
import {HomeHeroSection} from "./home-hero-section";
import {Button} from "@/app/_components/button";
import Image from "next/image";
import {IconArrowLeftFill} from "@/app/_components/icons/icons";
import React from "react";

describe('Home hero section', () => {
    test('display the home hero section', () => {
        const {container} = render(<HomeHeroSection/>);
        expect(container).toMatchSnapshot(`
        <section className='bg-hero-pattern bg-center bg-no-repeat mt-5 xl:mt-20 xl:bg-left'>
            <div className='container flex flex-col-reverse items-center xl:flex-row'>
                <div className='flex flex-col gap-5 mt-12 text-center xl:text-right'>
                    <h3 className='text-xl dark:text-info xl:text-2xl'>
                        خوش اومدی به ...
                    </h3>
                    <h1 className='text-3xl font-black gradient lg:text-3xl xl:text-4xl'>
                        مسیر صعود به قله‌های برنامه‌نویسی
                    </h1>
                    <p className='text-lg font-bold leading-8'>
                        هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
                        کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
                        هواتو داریم.
                    </p>
                    <div className='mt-5 gap-4 flex justify-center xl:justify-start'>
                        <Button variant='primary' size='large'>
                            دوره های ری اکت و نکست
                            <IconArrowLeftFill fill='currentColor'/>
                        </Button>
                        <Button variant='neutral' size='large'>مشاوره برنامه نویسی</Button>
                    </div>
                    <Image
                        className='grayscale mt-4 opacity-70 m-auto xl:m-0'
                        src='/images/frameworks.png'
                        alt=''
                        width={412}
                        height={39}/>
                </div>
                <Image
                    className=''
                    src='/images/programmer-landing.svg'
                    alt='کلاسبن'
                    width={702}
                    height={521}/>
            </div>
        </section>
        `)
    })
})