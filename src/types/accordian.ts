import React from "react";

export type Accordian = {
    id: number;
    title: string;
    content: React.ReactNode | string;
}