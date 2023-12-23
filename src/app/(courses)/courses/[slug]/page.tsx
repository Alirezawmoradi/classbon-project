import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";

export async function generateStaticParams() {
    const slugs =  await fetch(`${API_URL}/courses/slugs`).then((res) =>
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
    const courseData = await getCourse(slug);
    return (
        <h1 className='text-5xl flex justify-center items-center'>{courseData.title}</h1>
    )
}