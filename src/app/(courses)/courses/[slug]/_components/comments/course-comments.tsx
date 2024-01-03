'use client';

import {useEffect} from "react";
import {readData} from "@/core/http-servicw/http-service";

const CourseComments = () => {
    useEffect(() => {
        readData('./validation-error');
    })
    return (
        <></>
    )
}
export default CourseComments;