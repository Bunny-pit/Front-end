import styled from 'styled-components';
import UploadPost from '../../../assets/icons/UploadPost_11zon.webp';
export const Container = styled.div`
	margin: 0 auto;

	@media only screen and (min-width: 769px) and (max-width: 1980px) {
		width: 35%;
		height: auto;
	}
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 60%;
		height: auto;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 100%;
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
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		height: 100rem;
		.Slider {
			width: 100%;
			img {
				height: 75rem;
				object-fit: fill;
			}
		}
	}
	@media only screen and (min-width: 390px) and (max-width: 768px) {
		height: 110rem;
		.Slider {
			width: 100%;
			img {
				height: 75rem;
				object-fit: fill;
			}
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1980px) {
		height: 120rem;
		.Slider {
			width: 100%;
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

	cursor: pointer;
	background-image: url(${UploadPost});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 26rem 32rem;
`;
export const StyledTextArea = styled.textarea`
	resize: none;
	width: 100%;
	height: 15rem;
	border-radius: 15px;
	padding: 10px;
	box-sizing: border-box;
	font-weight: bold;
	border: 2px solid ${({ theme }) => theme.colors.gray600};
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
	cursor: pointer;
`;
