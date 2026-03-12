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
        <div className="px-13">
            <PageTitle name={"My Works"} info={"Showcasese About Works"} />
            <div className="grid grid-cols-3 gap-7 mt-15">
                {projects.map((project) => (
                    <div>
                        <img className="rounded-2xl" src={project.img} alt="" />
                        <h5 className="mt-5 font-syne text-2xl">
                            {project.title}
                        </h5>
                        <p className="mt-5">{project.description}</p>
                        <Button
                            onClick={() => detailshandler(project._id)}
                            className={`${theme === "dark" ? "text-slate-100" : "text-gray-700"} mt-10 bg-transparent border border-orange-400 rounded-full px-7 py-3 font-rubik font-bold text-sm  tracking-[1.63px] self-center`}
                        >
                            More details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
