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
        <div className="px-13 pb-15">
            <PageTitle name="Details" info="Details About The Project" />
            <div>
                <img className="rounded-2xl my-10" src={project.img} alt="" />
                <div className="w-2/3 mx-auto">
                    <h5 className="mt-5 font-syne text-3xl self-center">
                        {project.title}
                    </h5>

                    <p className="mt-5 text-xl">
                        <span className="font-bold text-orange-400">
                            Technology:{"  "}
                        </span>
                        {project.technology}
                    </p>
                    <p className="mt-5  text-xl">
                        <span className="font-bold text-orange-400">App: </span>
                        <Button variant="link">
                            <Link
                                target="_blank"
                                className="text-xl"
                                to={project.app.git}
                            >
                                Git repository
                            </Link>
                        </Button>
                        {project.app.deploy && (
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-xl"
                                    to={project.app.deploy}
                                >
                                    Deploy
                                </Link>
                            </Button>
                        )}
                    </p>
                    {project.server && (
                        <p className="mt-5  text-xl">
                            <span className="font-bold text-orange-400">
                                Server:
                            </span>
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-xl"
                                    to={project.server?.git}
                                >
                                    Git repository
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link
                                    target="_blank"
                                    className="text-xl"
                                    to={project.server?.link}
                                >
                                    Deployed on {project.server?.deploy}
                                </Link>
                            </Button>
                        </p>
                    )}
                    <p className="mt-5  text-xl">
                        <span className="font-bold text-orange-400">
                            Desctription:{"  "}
                        </span>
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
