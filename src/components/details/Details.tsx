import { Link } from "react-router";
import PageTitle from "../page-title/PageTitle";
import { Button } from "../ui/button";

export default function Details() {
    return (
        <div className="px-13 pb-15">
            <PageTitle name="Details" info="Details About The Project" />
            <div>
                <img
                    className="rounded-2xl my-10"
                    src="https://i.ibb.co/fVcy8xqb/smart-and-happy.png"
                    alt=""
                />
                <div className="w-2/3 mx-auto">
                    <h5 className="mt-5 font-syne text-3xl self-center">
                        Smart and Happy
                    </h5>

                    <p className="mt-5 text-xl">
                        <span className="font-bold text-orange-400">
                            Technology:{" "}
                        </span>
                        "React, Tailwind, TypeScript, TanStack Query, Zod,
                        Sonner"
                    </p>
                    <p className="mt-5  text-xl">
                        <span className="font-bold text-orange-400">App: </span>
                        <Button variant="link">
                            <Link className="text-xl" to="/login">
                                Git repository
                            </Link>
                        </Button>
                        <Button variant="link">
                            <Link className="text-xl" to="/login">
                                Deploy
                            </Link>
                        </Button>
                    </p>
                    <p className="mt-5  text-xl">
                        <span className="font-bold text-orange-400">
                            Server:{" "}
                        </span>
                        <Button variant="link">
                            <Link className="text-xl" to="/login">
                                Git repository
                            </Link>
                        </Button>
                        <Button variant="link">
                            <Link className="text-xl" to="/login">
                                Deploy
                            </Link>
                        </Button>
                    </p>
                    <p className="mt-5  text-xl">
                        <span className="font-bold text-orange-400">
                            Desctription:{" "}
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim minima autem accusantium officiis sed facilis
                        tempora perspiciatis veniam quam animi!
                    </p>
                </div>
            </div>
        </div>
    );
}
