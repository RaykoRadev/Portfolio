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
                    <div className="w-full md:w-1/2 ">
                        <h3 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Skills:
                        </h3>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Frontend:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            JavaScript (ES6+), TypeScript, React, Angular,
                            HTML5, CSS3, Responsive Design, Tailwind CSS, Shadcn
                            UI
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Backend:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            Node.js, Express.js, REST APIs, Authentication, CRUD
                            Operations
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Databases:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            MongoDB, (Currently learning PostgreSQL)
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            State Management & Data:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            TanStack Query, API Integration, Client‑Server Data
                            Flow
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Validation & Utilities:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            Zod, Form Validation, Error Handling
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Tools & Workflow:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            Git, GitHub, NPM, Modular Architecture,
                            Component‑Based Development
                        </p>

                        <h3 className="mt-5 text-orange-400 font-syne font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Learning & Upcoming:
                        </h3>
                        <p className="mt-2 font-rubik text-lg">
                            Advanced TypeScript, PostgreSQL, DevOps
                            fundamentals, React Native
                        </p>
                    </div>
                    <p className="w-full md:w-1/2 font-[Open_Sans] tracking-wide text-lg md:text-[21px] max-w-xl mx-auto md:mx-0">
                        I am a JavaScript developer with a strong background in
                        healthcare and client-oriented work. I graduated as a
                        physiotherapist and spent four years working in
                        rehabilitation, followed by eight years as a spa
                        therapist, gaining valuable experience in communication,
                        problem solving, and client‑focused thinking.
                        <br />
                        <br />
                        In the last two years, I transitioned into software
                        development and completed the full JavaScript learning
                        path at{" "}
                        <Link
                            target="blank"
                            className="underline"
                            to="https://softuni.bg/"
                        >
                            SoftUni Bulgaria
                        </Link>
                        , covering modern web technologies such as: JavaScript
                        (Advanced and Applications), TypeScript, React, Angular,
                        Node.js with Express, MongoDB, HTML & CSS.
                        <br />
                        <br />
                        Through this journey I built a strong foundation in
                        full‑stack development and modern web application
                        architecture.
                        <br />
                        <br />
                        I continue to improve my skills through additional
                        learning and practical projects. Currently I am
                        deepening my TypeScript knowledge through advanced
                        courses on Udemy while also expanding my stack with
                        TanStack Query, Tailwind CSS, Zod, and Shadcn UI.
                        <br />
                        <br />
                        Later this year I plan to complete PostgreSQL and DevOps
                        courses at SoftUni to strengthen my backend and
                        deployment knowledge. I also plan to expand into mobile
                        development with React Native.
                        <br />
                        <br />I enjoy building clean, scalable, and user‑focused
                        applications and I am always motivated to learn new
                        technologies and improve my development skills.
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
