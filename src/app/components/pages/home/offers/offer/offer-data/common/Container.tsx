export interface ContainerProps {
    children: React.ReactNode[];
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-baseline w-full space-y-3`}>
            {props.children}
        </div>
    );
}

export default Container;