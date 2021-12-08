export interface ContractorLogoProps {
  src: string;
  alt: string;
}

const ContractorLogo: React.FunctionComponent<ContractorLogoProps> = (
  props: ContractorLogoProps
) => (
  <div className={`h-20 w-20`}>
    <img
      className={`h-full w-full rounded-md`}
      src={props.src}
      alt={props.alt}
    />
  </div>
);

export default ContractorLogo;
