import Image from "next/image";
import {TopNavigation} from "./top-navigation";
import {HeaderUserSection} from "@/app/_components/header/header-user-section";


export const Header: React.FC = async () => {
    return (
        <header className="border-b dark:border-base-content dark:border-opacity-5">
            <div className="container flex items-center justify-between">
                <Image
                    src="/images/logo-light.svg"
                    width={100}
                    height={36}
                    alt="کلاسبن"
                />
                <TopNavigation/>
                <div className="mr-auto">
                    <HeaderUserSection/>
                </div>
            </div>
        </header>
    );
};