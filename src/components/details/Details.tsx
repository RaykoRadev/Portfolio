import PageTitle from "../page-title/PageTitle";

export default function Details() {
    return (
        <>
            <PageTitle name="Details" info="Details About The Project" />
            <div>
                <img
                    className="rounded-2xl"
                    src="https://i.ibb.co/fVcy8xqb/smart-and-happy.png"
                    alt=""
                />
                <h5 className="mt-5 font-syne text-2xl">Smart and Happy</h5>

                <p className="mt-5">
                    technology: "React, Tailwind, TypeScript, TanStack Query,
                    Zod, Sonner"
                </p>
                <p className="mt-5">Links:"</p>
                <p className="mt-5">server: git:..... deploy: ......"</p>
                <p className="mt-5">app: git:.....m deploy: ......"</p>
                <p className="mt-5">
                    Desctription: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Enim minima autem accusantium officiis sed
                    facilis tempora perspiciatis veniam quam animi!
                </p>
            </div>
        </>
    );
}
