import Image from "next/image";
import {TopNavigation} from "./top-navigation";
import {auth} from "@/auth";


export const Header: React.FC = async () => {
    const session = await auth()

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
                <div className="mr-auto">{session?.user.mobile}</div>
            </div>
        </header>
    );
};