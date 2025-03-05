
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex justify-center  w-full">
            <div className="w-2xl max-w-2xl  px-6">
                {children}

            </div>
        </div>
    )
}