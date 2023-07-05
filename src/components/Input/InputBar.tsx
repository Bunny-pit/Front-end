import { Container, InputArea, SendIcon } from './InputBarStyle';
import sendicon from '../../assets/icons/Sendicon.png';

const InputBar = () => {
  return (
    <>
      <Container>
        <InputArea placeholder="메시지 보내기" />
        <SendIcon src={sendicon} alt="send-icon" />
      </Container>
    </>
  );
};
export default InputBar;
