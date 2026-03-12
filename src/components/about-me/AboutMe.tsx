import { Link } from "react-router";
import PageTitle from "../page-title/PageTitle";
import { Button } from "../ui/button";

export default function AboutMe() {
    return (
        <div className="px-13">
            <PageTitle name="About me" info="Little Brief About Myself" />
            <div>
                {/* description about me */}
                <div className="my-20 flex gap-5">
                    <h1 className="w-1/2 font-syne font-bold text-7xl">
                        To get rich :D
                    </h1>
                    <p className="w-1/2 font-[Open_Sans] font-semibold text-[21px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat nemo officia, alias repellendus a omnis
                        quasi ipsum corrupti voluptates ut est qui nisi animi.
                        Iure facere provident similique cupiditate consectetur.
                    </p>
                </div>
                {/* photos */}
                <div className="flex gap-5 ">
                    <div className="relative w-113.5 h-126.5 rounded-2xl">
                        <img
                            className="w-full h-full object-cover object-right  rounded-2xl"
                            src="https://i.ibb.co/RGWWGbHW/me.jpg"
                            alt=""
                        />
                    </div>
                    <div className="relative w-200 h-126.5 rounded-2xl">
                        <img
                            className="w-full h-full object-cover object-right  rounded-2xl"
                            src="https://i.ibb.co/S71Y976M/IMG-20250904-153656-1.jpg"
                            alt=""
                        />
                    </div>
                </div>
                {/* follow me */}
                <div className="my-20">
                    <h4 className="self-center font-syne font-bold text-4xl text-space -tracking-[0.5px] leading-20">
                        Follow me on:
                    </h4>
                    <div className="mt-5 flex justify-around">
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-[32px] tracking-[4px]"
                                to="https://github.com/RaykoRadev"
                            >
                                GIT HUB
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-[32px] tracking-[4px]"
                                to="https://www.instagram.com/rayko_radev/"
                            >
                                INSTAGRAM
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-[32px] tracking-[4px]"
                                to="https://www.facebook.com/christmas898/"
                            >
                                FACEBOOK
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-[32px] tracking-[4px]"
                                to="https://www.linkedin.com/in/rayko-radev-996267bb/"
                            >
                                LINKDN
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
