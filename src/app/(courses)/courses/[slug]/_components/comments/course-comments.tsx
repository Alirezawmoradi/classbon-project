'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_apis/get-comments";
import {Comment} from "@/app/_components/comment";
import {TextPlaceholder} from "@/app/_components/palceholders/text/text-placeholder";
import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";

const CourseComments = () => {
    const {ref, inView} = useInView({})
    const {slug} = useParams();
    const {data: comments, error, isFetchingNextPage, fetchNextPage, hasNextPage, refetch} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    })
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage]);
    return (
        <>
            {
                comments?.pages.map((currentPage) => (
                    <Fragment key={`comment-page-${currentPage}`}>
                        {
                            currentPage.data.map((comment) => (
                                <Comment key={`comment-${comment.id}`} {...comment} variant="info"/>
                            ))
                        }
                    </Fragment>
                ))
            }
            {
                (isFetchingNextPage || hasNextPage) && (
                    <div ref={ref}>
                        <TextPlaceholder/>
                    </div>
                )
            }

        </>
    )
}
export default CourseComments;