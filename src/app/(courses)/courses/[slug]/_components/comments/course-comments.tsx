'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_apis/get-comments";
import {Comment} from "@/app/_components/comment";
import {TextPlaceholder} from "@/app/_components/palceholders/text/text-placeholder";

const CourseComments = () => {
    const {slug} = useParams();
    const {data: comments,isLoading} = useCourseComments({
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
            {
                isLoading && <TextPlaceholder/>
            }
        </>
    )
}
export default CourseComments;