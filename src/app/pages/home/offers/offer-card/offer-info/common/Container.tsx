export interface ContainerProps {
  children: React.ReactNode[];
}

const Container: React.FunctionComponent<ContainerProps> = (
  props: ContainerProps
) => (
  <div
    className={`flex flex-col md:flex-row justify-between items-start md:items-end w-full space-y-3`}
  >
    {props.children}
  </div>
);

export default Container;
