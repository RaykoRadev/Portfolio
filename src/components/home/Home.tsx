import { Button } from "@base-ui/react/button";
import { useTheme } from "../theme-provider/ThemeProvider";

export default function Home() {
    const { theme } = useTheme();

    return (
        <>
            {/* title */}
            <div className="flex flex-col items-center align-middle p-13">
                <h1 className="font-syne font-bold text-6xl text-center text-space tracking-wide">
                    Adaptive Logo Design for Your Brand
                </h1>
                <Button className="mt-20 bg-orange-400 rounded-full px-7 py-4 font-rubik font-bold text-sm text-slate-100 tracking-[1.63px] self-center">
                    EXPLORER WORKS &rarr;
                </Button>
            </div>

            {/* me */}
            <div className="flex justify-between p-13 gap-10">
                <div className="w-3/5 self-center">
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
                <div className="relative w-113.5 h-126.5  rounded-2xl">
                    {/* <p className="border border-orange-400 w-27.5 h-8.5 z-50 rounded-2xl absolute -top-4 right-0"></p>
                    <p className="border border-orange-400 w-12.5 h-44.5 z-50 rounded-3xl absolute bottom-8 -left-6"></p> */}
                    <img
                        className={`${theme === "dark" ? "opacity-70" : ""} w-full h-full object-cover object-right  rounded-2xl`}
                        src="me.jpg"
                        alt="me"
                    />
                </div>
            </div>

            {/* projects overview */}
            <div className="p-13">
                <div className="flex flex-col">
                    <h2 className="self-center font-syne font-bold text-4xl text-space tracking-wide">
                        My Projects Highlight
                    </h2>
                    <Button
                        className={`${theme === "dark" ? "text-slate-100" : "text-gray-700"} mt-10 border border-orange-400 rounded-full px-7 py-3 font-rubik font-bold text-sm  tracking-[1.63px] self-center`}
                    >
                        EXPLORER MOER &rarr;
                    </Button>
                </div>
                <div className="flex gap-5 mt-15">
                    <div>
                        <img
                            className="rounded-2xl"
                            src="pet-shelter.png"
                            alt=""
                        />
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Enim minima autem accusantium officiis sed
                            facilis tempora perspiciatis veniam quam animi!
                        </p>
                    </div>
                    <div>
                        <img
                            className="rounded-2xl"
                            src="smart-and-happy.png"
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
        </>
    );
}
