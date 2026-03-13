import PageTitle from "../page-title/PageTitle";
import { projects } from "@/assets/projectsDB";
import { Button } from "../ui/button";
import { useTheme } from "../theme-provider/ThemeProvider";
import { useNavigate } from "react-router";

export default function MyWorks() {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const detailshandler = (id: string) => {
        navigate(`/details/${id}`);
    };
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-13">
            <PageTitle name={"My Works"} info={"Showcasese About Works"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 md:mt-15">
                {projects.map((project) => (
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img
                            className="rounded-2xl w-full h-auto object-cover"
                            src={project.img}
                            alt=""
                        />

                        <h5 className="mt-4 font-syne text-xl md:text-2xl">
                            {project.title}
                        </h5>

                        <p className="mt-3">{project.description}</p>

                        <Button
                            onClick={() => detailshandler(project._id)}
                            className={`${theme === "dark" ? "text-slate-100" : "text-gray-700"} mt-8 bg-transparent border border-orange-400 rounded-full px-6 py-3 font-rubik font-bold text-sm tracking-[1.63px] self-center md:self-start`}
                        >
                            More details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
