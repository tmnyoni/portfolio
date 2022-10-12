import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="py-6 mx-auto">
            <div className="container m-auto">
                <div className="flex items-center justify-between">
                    <div className="rounded-l-full">
                        <Link href={"/"}>
                            <a className="flex items-center text-sm font-semibold">
                                Tawanda M.
                            </a>
                        </Link>
                    </div>
                    <div className="hidden rounded-lg border px-4 py-2 text-xs font-semibold shadow-md md:block">
                        <Link href={"about"}>
                            <a className="px-4 py-2">
                                About
                            </a>
                        </Link>
                        <Link href={"projects"}>
                            <a className="px-4 py-2">
                                Projects
                            </a>
                        </Link>
                        <Link href={"articles"}>
                            <a className="px-4 py-2">
                                Articles
                            </a>
                        </Link>
                        <Link href={"skills"}>
                            <a className="px-4 py-2">
                                Skills
                            </a>
                        </Link>
                    </div>
                    <div className="right-0">
                        <Link href="contact">
                            <a className="rounded-lg border py-2 px-4  text-xs font-semibold shadow-sm">
                                Contact me
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
