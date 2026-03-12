export type Project = {
    _id: string;
    img: string;
    title: string;
    technology: string;
    app: {
        git: string;
        deploy?: string;
    };
    server?: {
        git: string;
        deploy: string;
        link: string;
    };
    description: string;
};
