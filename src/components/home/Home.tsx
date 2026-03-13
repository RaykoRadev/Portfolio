import { Button } from "@base-ui/react/button";
import { useTheme } from "../theme-provider/ThemeProvider";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const myWorksHandler = () => {
        navigate("/my-works");
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* title */}
            <div className="flex flex-col items-center align-middle p-13">
                <h1 className="ont-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-space tracking-wide">
                    Adaptive Logo Design for Your Brand
                </h1>
                <Button
                    onClick={myWorksHandler}
                    className="mt-10 md:mt-16 lg:mt-20 bg-orange-400 rounded-full px-7 py-4 font-rubik font-bold text-sm text-slate-100 tracking-[1.63px] self-center"
                >
                    EXPLORER WORKS &rarr;
                </Button>
            </div>

            {/* me */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-6 md:p-10 lg:p-13 gap-10 text-center lg:text-left">
                <div className="w-full lg:w-3/5 mx-auto lg:mx-0">
                    <h3 className="font-syne font-bold text-3xl text-space tracking-wide">
                        Let's get know about me closer
                    </h3>
                    <p className="mt-5 font-rubik text-neutral-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Similique error non rerum atque esse maxime itaque
                        exercitationem et ipsam ex asperiores consectetur
                        aspernatur nemo, nam optio doloremque iste? Eveniet,
                        reiciendis.
                    </p>
                    <Button className="mt-10 bg-orange-400 rounded-full px-7 py-3 font-rubik font-bold text-sm text-slate-100 tracking-[1.63px] self-center">
                        Discover more about me
                    </Button>
                </div>
                <div className="relative w-full max-w-87.5 lg:max-w-none lg:w-113.5 h-105 md:h-125 lg:h-126.5 rounded-2xl mx-auto flex justify-center">
                    {/* <p className="border border-orange-400 w-27.5 h-8.5 z-50 rounded-2xl absolute -top-4 right-0"></p>
                    <p className="border border-orange-400 w-12.5 h-44.5 z-50 rounded-3xl absolute bottom-8 -left-6"></p> */}
                    <img
                        className={`${theme === "dark" ? "opacity-70" : ""} w-full max-w-md h-100 md:h-125 lg:w-113.5 lg:h-126.5 object-cover object-right  rounded-2xl`}
                        src="https://i.ibb.co/RGWWGbHW/me.jpg"
                        // src="me.jpg"
                        alt="me"
                    />
                </div>
            </div>

            {/* projects overview */}
            <div className="px-10 lg:px-13 py-10">
                <div className="flex flex-col">
                    <h2 className="font-syne font-bold text-3xl sm:text-4xl text-center text-space tracking-wide mx-auto">
                        My Projects Highlight
                    </h2>
                    <Button
                        onClick={myWorksHandler}
                        className={`${theme === "dark" ? "text-slate-100" : "text-gray-700"} mt-10 border border-orange-400 rounded-full px-7 py-3 font-rubik font-bold text-sm  tracking-[1.63px] self-center`}
                    >
                        EXPLORER MORE &rarr;
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-10 md:mt-15">
                    <div className="md:w-1/2 text-center md:text-left">
                        <img
                            className="rounded-2xl w-full"
                            src="https://i.ibb.co/fVcy8xqb/smart-and-happy.png"
                            alt=""
                        />
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim minima autem accusantium officiis sed
                            facilis tempora perspiciatis veniam quam animi!
                        </p>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <img
                            className="rounded-2xl w-full"
                            src="https://i.ibb.co/CpC49Xd3/pet-shelter.png"
                            alt=""
                        />
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim minima autem accusantium officiis sed
                            facilis tempora perspiciatis veniam quam animi!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
