import { useNavigate } from "react-router";
import { ModeToggle } from "../mode-toggle/ModeToggle";
import { Button } from "../ui/button";

export default function Navbar() {
    const navigate = useNavigate();

    const myWorksHandler = () => {
        navigate("/my-works");
    };

    const homeHandler = () => {
        navigate("/");
    };

    const aboutMeHandler = () => {
        navigate("/about-me");
    };

    return (
        <div className="sticky top-0 z-50 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-baseline justify-between px-6 md:px-10 lg:px-13 py-5 md:py-7">
                <p className="font-syne font-bold text-xl md:text-[30px]">
                    JS Developer | TypeScript | React
                </p>

                <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4">
                    <Button
                        onClick={homeHandler}
                        variant="outline"
                        className="rounded-full px-5 h-11 text-sm md:text-base font-rubik opacity-80"
                    >
                        Home
                    </Button>

                    <Button
                        onClick={aboutMeHandler}
                        variant="outline"
                        className="rounded-full px-5 h-11 text-sm md:text-base font-rubik opacity-80"
                    >
                        About me
                    </Button>

                    <Button
                        onClick={myWorksHandler}
                        variant="outline"
                        className="rounded-full px-5 h-11 text-sm md:text-base font-rubik opacity-80"
                    >
                        My works
                    </Button>

                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}
