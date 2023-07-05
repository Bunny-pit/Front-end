import { Container, InputArea, SendIcon } from './InputBarStyle';
import sendicon from '../../assets/icons/Sendicon.png';

interface InputBarProps {
  placeholder: string;
}

const InputBar = ({ placeholder }: InputBarProps) => {
  return (
    <>
      <Container>
        <InputArea>{placeholder}</InputArea>
        <SendIcon src={sendicon} alt="send-icon" />
      </Container>
    </>
  );
};
export default InputBar;
