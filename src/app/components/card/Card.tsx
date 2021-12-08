import { background } from "app/styles/Themes";

export interface CardProps {
  children: React.ReactNode[];
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => (
  <div
    className={`${background.secondary.get()} rounded-md divide-y-2 divide-gray-300 dark:divide-gray-900`}
  >
    {<div className={`p-4`}>{props.children[0]}</div>}
    {<div className={`p-4 text-justify`}>{props.children[1]}</div>}
  </div>
);

export default Card;
