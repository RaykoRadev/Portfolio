type Props = {
    name: string;
    info: string;
};

export default function PageTitle({ name, info }: Props) {
    return (
        <div>
            <h1 className="font-syne font-bold text-6xl text-space tracking-wide">
                {name}
            </h1>
            <p className="mt-5 font-rubik font-medium text-neutral-400">
                {info}
            </p>
            <hr className="border-t border-neutral-400 my-4 mt-15" />
        </div>
    );
}
