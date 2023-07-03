import { DefaultBtn } from './DefaultButtonStyle';

type DefaultButtonProps = {
  toNavigate: () => void;
  text: string;
};
const DefaultButton = ({ toNavigate, text }: DefaultButtonProps) => {
  return <DefaultBtn onClick={toNavigate}>{text}</DefaultBtn>;
};

export default DefaultButton;
