import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";

export async function generateStaticParams() {
    const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
        res.json()
    );

    return (slugs as string[]).map((slug) => ({
        slug: slug
    }))
}

console.log(generateStaticParams)

async function getCourse(slug: string): Promise<CourseDetails> {
    const res = await fetch(`${API_URL}/courses/${slug}`);
    return res.json();
}

export default async function CourseDetails({params}: { params: { slug: string } }) {
    const {slug} = params;
    const course = await getCourse(slug);
    return (
        <div className='h-96 container grid grid-cols-10 gap-10 py-10 grid-rows-[1fr 1fr]'>
            <div className='bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-5 -top-52 blur-3xl'></div>
            <div className='col-span-10 xl:col-span-7'>
                <h1 className='text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10'>
                    {course.title}
                </h1>
                <h2 className='mt-4 text-center lg:text-right text-lg leading-9'>
                    {course.subTitle}
                </h2>
                <div className='mt-5'>Video Player Component</div>
            </div>
            <div className='bg-secondary col-span-10 xl:col-span-3'></div>
            <div className='bg-info col-span-10 xl:col-span-6'></div>
            <div className='bg-warning col-span-10 xl:col-span-4'></div>
        </div>
    )
}