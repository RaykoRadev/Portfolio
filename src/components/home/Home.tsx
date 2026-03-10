import { Button } from "@base-ui/react/button";

export default function Home() {
    return (
        <>
            {/* title */}
            <div className="flex flex-col items-center align-middle">
                <h1 className="mt-20 font-syne font-bold text-6xl text-center text-space tracking-wide">
                    Adaptive Logo Design for Your Brand
                </h1>
                <Button className="mt-20 bg-orange-400 rounded-full px-7 py-4 font-rubik font-bold text-sm text-slate-100 tracking-[1.63px] self-center">
                    EXPLORER WORKS &rarr;
                </Button>
            </div>

            {/* me */}
            <div className="flex justify-between p-13">
                <div className="w-3/5">
                    <h2>Let's get know about me closer</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Similique error non rerum atque esse maxime itaque
                        exercitationem et ipsam ex asperiores consectetur
                        aspernatur nemo, nam optio doloremque iste? Eveniet,
                        reiciendis.
                    </p>
                </div>
                <div className=" w-113.5 h-126.5 overflow-hidden rounded-2xl">
                    <img
                        className="w-full h-full object-cover object-right"
                        src="me.jpg"
                        alt="me"
                    />
                </div>
            </div>
        </>
    );
}
