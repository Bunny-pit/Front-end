import styled from 'styled-components';
import UploadPost from '../../../assets/icons/UploadPost.png';
export const Container = styled.div`
	margin: 0 auto;

	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		width: 40%;
		height: auto;
	}
`;
export const UploadWrap = styled.div`
	width: 100%;
`;
export const StyledForm = styled.form`
	margin: 7rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media only screen and (min-width: 390px) and (max-width: 550px) {
		height: 110rem;
		.Slider {
			img {
				height: 75rem;
				object-fit: fill;
			}
		}
	}
	@media only screen and (min-width: 1280px) and (max-width: 1980px) {
		height: 120rem;
		.Slider {
			margin-bottom: 2rem;
			img {
				height: 80rem;
				object-fit: fill;
			}
		}
	}
`;

export const StyledFileInput = styled.input.attrs({ type: 'file' })`
	display: none; // 기본 파일 인풋 숨김
`;
export const StyledFileInputLabel = styled.label`
	display: inline-block;
	padding: 30rem 0;
	width: 100%;
	box-sizing: border-box;
	background-color: ${({ theme }) =>
		theme.colors.gray200}; // 백그라운드 색 설정
	cursor: pointer;
	background-image: url(${UploadPost});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 26rem 32rem;
`;
export const StyledTextArea = styled.textarea`
	resize: none; // textarea 크기 조절 비활성화
	width: 100%;
	height: 15rem;
	box-sizing: border-box;
	border: 1px solid ${({ theme }) => theme.colors.gray600};
`;
export const SubmitButton = styled.input`
	width: 100%;
	height: 8.8rem;
	background: ${({ theme }) => theme.colors.commentpurple};
	border: none;
	border-radius: 1rem;
	color: ${({ theme }) => theme.colors.background};
	font-size: 3.2rem;
	font-weigth: 600;
	pointer: cursor;
`;
