export interface SvgContainerProps {
  svg: React.ReactNode;
  label: string;
}

const SvgContainer: React.FunctionComponent<SvgContainerProps> = (
  props: SvgContainerProps
) => (
  <p className={`flex text-sm items-center`}>
    {props.svg}&nbsp;{props.label}
  </p>
);

export default SvgContainer;
