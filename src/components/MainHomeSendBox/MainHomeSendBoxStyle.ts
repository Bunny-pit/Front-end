import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Content = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.gray200};
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const ImageUploadArea = styled.div`
	width: 100%;
	height: 70%;
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	overflow-y: scroll;
	background-color: #fff;
	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
	-ms-overflow-style: none;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`;

export const ImageUploadInput = styled.input`
	display: none;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
`;

export const DeleteButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 1.5rem 2rem;
	background: red;
	color: white;
	font-size: 2rem;
	font-weight: bold;
	border-radius: 1.5rem;
	border: none;
	cursor: pointer;
`;

export const ImageUploadButtonArea = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10%;
	background-color: #fff;
	border-top: 1px solid #eee;
`;

export const ImageUploadButton = styled.button`
	width: auto;
	padding: 1.5rem 5rem;
	color: #fff;
	font-weight: bold;
	background-color: ${({ theme }) => theme.colors.maincolor};
	border: none;
	border-radius: 0.7rem;
	cursor: pointer;
`;

export const TextAreaAndButtonContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 20%;
`;

export const TextAreaInput = styled.textarea`
	width: calc(100% - 50px);
	height: 80%;
	border: 0px;
	background-color: transparent;
	font-size: 2rem;
	outline: none;
	resize: none;
	padding: 10px 20px;

	@media (max-width: 768px) {
		font-size: 2.1rem;
	}

	@media (max-width: 390px) {
		font-size: 2rem;
	}
	overflow: auto;
`;

export const SendButton = styled.button`
	width: 50px;
	height: 100%;
	border: 0;
	background-color: transparent;
`;

export const SendIcon = styled.img`
	cursor: pointer;
`;
