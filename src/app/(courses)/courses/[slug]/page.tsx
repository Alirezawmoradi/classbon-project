export default async function CourseDetails({params}: { params: { slug: string } }) {
    const {slug} = params;
    return (
        <h1 className='text-5xl flex justify-center items-center'>{slug}</h1>
    )
}