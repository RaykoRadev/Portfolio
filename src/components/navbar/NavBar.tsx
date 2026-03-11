import { useNavigate } from "react-router";
import { ModeToggle } from "../mode-toggle/ModeToggle";
import { Button } from "../ui/button";

export default function Navbar() {
    const navigate = useNavigate();

    const myWorksHandler = () => {
        navigate("/my-works");
    };

    const homHandler = () => {
        navigate("/");
    };

    return (
        <div className="sticky top-0 z-50 flex justify-between align-baseline px-13 py-7 backdrop-blur-xl">
            <p className="font-syne font-bold text-[30px]">That is a navBar</p>
            <div className="flex gap-4">
                <Button
                    onClick={homHandler}
                    variant="outline"
                    className="rounded-full w-34.5 h-11.75 text-base font-rubik opacity-80"
                >
                    Home
                </Button>
                <Button
                    variant="outline"
                    className="rounded-full w-34.5 h-11.75 text-base font-rubik  opacity-80"
                >
                    About me
                </Button>
                <Button
                    onClick={myWorksHandler}
                    variant="outline"
                    className="rounded-full w-34.5 h-11.75 text-base font-rubik  opacity-80"
                >
                    My works
                </Button>
                <ModeToggle />
            </div>
        </div>
    );
}
