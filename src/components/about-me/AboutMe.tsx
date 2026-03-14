import { Link } from "react-router";
import PageTitle from "../page-title/PageTitle";
import { Button } from "../ui/button";

export default function AboutMe() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-13">
            <PageTitle name="About me" info="Little Brief About Myself" />
            <div>
                {/* description about me */}
                <div className="my-12 md:my-20 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                    <h1 className="w-full md:w-1/2 font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        To become rich :D
                    </h1>
                    <p className="w-full md:w-1/2 font-[Open_Sans] font-semibold text-lg md:text-[21px] max-w-xl mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat nemo officia, alias repellendus a omnis
                        quasi ipsum corrupti voluptates ut est qui nisi animi.
                        Iure facere provident similique cupiditate consectetur.
                    </p>
                </div>
                {/* photos */}
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start sm:mx-13 md:mx-0">
                    <div className="relative w-full  md:max-w-none md:w-113.5 md:h-126.5 rounded-2xl mx-auto">
                        <img
                            className="w-full h-full object-cover object-right rounded-2xl"
                            src="https://i.ibb.co/RGWWGbHW/me.jpg"
                            alt=""
                        />
                    </div>
                    <div className="relative w-full max-w-200 md:max-w-none md:w-200 md:h-126.5 rounded-2xl mx-auto">
                        <img
                            className="w-full h-full object-cover object-right rounded-2xl"
                            src="https://i.ibb.co/S71Y976M/IMG-20250904-153656-1.jpg"
                            alt=""
                        />
                    </div>
                </div>
                {/* follow me */}
                <div className="my-20">
                    <h4 className="text-center font-syne font-bold text-2xl md:text-3xl lg:text-4xl text-space -tracking-[0.5px]">
                        Follow me on:
                    </h4>
                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-xl sm:text-2xl md:text-[32px] tracking-[4px]"
                                to="https://github.com/RaykoRadev"
                            >
                                GIT HUB
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-xl sm:text-2xl md:text-[32px] tracking-[4px]"
                                to="https://www.instagram.com/rayko_radev/"
                            >
                                INSTAGRAM
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-xl sm:text-2xl md:text-[32px] tracking-[4px]"
                                to="https://www.facebook.com/christmas898/"
                            >
                                FACEBOOK
                            </Link>
                        </Button>
                        <Button variant="ghost">
                            <Link
                                target="blank"
                                className="font-[Inter] font-bold text-neutral-400 text-xl sm:text-2xl md:text-[32px] tracking-[4px]"
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
