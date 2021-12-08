export interface HeaderProps {
  header: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => (
  <h2 className={`text-2xl font-bold px-6`}>{props.header}</h2>
);

export default Header;
