import { ModeToggle } from "./mode-toggle/ModeToggle";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex justify-between align-baseline p-13 pb-3 backdrop-blur-xl">
            <p className="font-syne font-bold text-[30px]">That is a navBar</p>
            <div className="flex gap-4">
                <Button
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
