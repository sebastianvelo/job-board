import { background } from "app/styles/Themes";

export interface PillProps {
  children: React.ReactNode;
}

const Pill: React.FunctionComponent<PillProps> = (props: PillProps) => (
  <p
    className={`${background.accent.get()} rounded-md px-4 py-1 text-xs flex items-center`}
  >
    {props.children}
  </p>
);

export default Pill;
