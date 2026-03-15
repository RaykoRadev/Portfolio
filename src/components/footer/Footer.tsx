import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <div className="w-full py-5 flex flex-col gap-1">
            <p className="font-rubik text-center text-xl text-orange-400">
                Get in touch with me:
            </p>
            <p className="font-rubik text-center text-2xl">
                rayko_radev@yahoo.com
            </p>
            <div className="flex justify-around ">
                <p className="font-syne font-bold text-[18px] self-center">
                    JS Developer | TypeScript | React
                </p>
                <div>
                    <p className="font-rubik pb-2">+359899500426</p>
                    <div className="flex gap-2.5">
                        <SocialIcon
                            style={{ height: 25, width: 25 }}
                            url="https://github.com/RaykoRadev"
                        />
                        <SocialIcon
                            style={{ height: 25, width: 25 }}
                            url="https://www.instagram.com/rayko_radev/"
                        />
                        <SocialIcon
                            style={{ height: 25, width: 25 }}
                            url="https://www.facebook.com/christmas898/"
                        />
                        <SocialIcon
                            style={{ height: 25, width: 25 }}
                            url="https://www.linkedin.com/in/rayko-radev-996267bb/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
