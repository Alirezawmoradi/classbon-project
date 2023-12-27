'use client';
import React, {useState} from "react";
import {TabsProps} from "@/app/_components/tabs/tabs.types";

export const Tabs: React.FC<TabsProps> = ({tabs}: TabsProps) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <div className="tabs">
            <div className="tab-labels">
                {tabs.map((tab, index) => (
                    <a
                        key={`tab-${index}`}
                        className={`tab-label ${index === activeTab ? "tab-active" : ""}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </a>
                ))}
            </div>
            {tabs.map((tab, index) => (
                <div
                    className="tab-content"
                    key={`tab-content-${index}`}
                    style={{display: activeTab !== index ? "none" : "block"}}
                >
                    {typeof tab.content === "string" ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: tab.content as TrustedHTML,
                            }}
                        />
                    ) : (
                        tab.content
                    )}
                </div>
            ))}
        </div>
    )
}