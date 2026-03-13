import { Link, useParams } from "react-router";
import PageTitle from "../page-title/PageTitle";
import { Button } from "../ui/button";
import { projects } from "@/assets/projectsDB";
import type { Project } from "@/types/prodject.type";

export default function Details() {
    const { id } = useParams();

    const project: Project | undefined = projects.find((pr) => pr._id === id);
    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-13 pb-10 md:pb-15">
            <PageTitle name="Details" info="Details About The Project" />
            <div>
                <img
                    className="rounded-2xl w-full h-auto my-8 md:my-10 object-cover"
                    src={project.img}
                    alt=""
                />

                <div className="w-full md:w-2/3 mx-auto text-left md:text-left">
                    <h5 className="mt-5 font-syne text-2xl sm:text-3xl md:text-3xl font-bold">
                        {project.title}
                    </h5>

                    <p className="mt-4 text-base sm:text-lg md:text-xl">
                        <span className="font-bold text-orange-400">
                            Technology:{" "}
                        </span>
                        {project.technology}
                    </p>

                    <div className="mt-4 text-base sm:text-lg md:text-xl">
                        <span className="font-bold text-orange-400">App: </span>
                        <Button variant="link">
                            <Link
                                target="_blank"
                                className="text-base sm:text-lg md:text-xl"
                                to={project.app.git}
                            >
                                Git repository
                            </Link>
                        </Button>
                        {project.app.deploy && (
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-base sm:text-lg md:text-xl"
                                    to={project.app.deploy}
                                >
                                    Deploy
                                </Link>
                            </Button>
                        )}
                    </div>
                    {project.server && (
                        <div className="mt-4 text-base sm:text-lg md:text-xl">
                            <span className="font-bold text-orange-400">
                                Server:{" "}
                            </span>
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-base sm:text-lg md:text-xl"
                                    to={project.server.git}
                                >
                                    Git repository
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-base sm:text-lg md:text-xl"
                                    to={project.server.link}
                                >
                                    Deployed on {project.server.deploy}
                                </Link>
                            </Button>
                        </div>
                    )}

                    <p className="mt-4 text-base sm:text-lg md:text-xl">
                        <span className="font-bold text-orange-400">
                            Description:{" "}
                        </span>
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
