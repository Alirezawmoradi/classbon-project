import {CourseLectures} from "@/types/course-lectures.interface";

export interface CourseChapter {
    id: number;
    title: string;
    numOfLectures: number;
    duration: string;
    lectures: CourseLectures[];
}