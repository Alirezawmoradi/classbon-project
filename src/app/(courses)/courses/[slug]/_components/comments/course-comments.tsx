'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_apis/get-comments";
import {Comment} from "@/app/_components/comment";

const CourseComments = () => {
    const {slug} = useParams();
    const {data: comments} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    })
    return (
        <>
            {
                comments?.data.map(comment => (
                        <Comment key={`comment-${comment.id}`} {...comment} variant="info"/>
                    )
                )
            }
        </>
    )
}
export default CourseComments;