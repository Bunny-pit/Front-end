import styled from 'styled-components';

export const Page = styled.div`
	position: absolute;
	top: 10%;
	bottom: 0%;
	width: 100%;
	max-width: 60rem;
	padding: 0 2rem;
	left: 50%;
	transform: translate(-50%, 0);

	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
export const TitleAndLogoWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const TitleWrap = styled.div`
	margin-top: 1rem;

	font-size: 5rem;
	font-weight: 700;
	color: #7954f8;
`;
export const LogoWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> img {
		scale: 0.9;
	}
`;
export const FormWrap = styled.form`
	flex: 1;
`;
export const InputTitle = styled.div`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 2rem;
`;
export const InputWrap = styled.div`
	display: flex;
	border-radius: 8px;
	padding: 1.6rem;
	margin-top: 1rem;
	background-color: white;
	border: 1px solid #e3e0e0;

	&:focus-within {
		border: 1px solid #db7bf9;
	}
`;
export const InputBar = styled.input`
	width: 100%;
	border: none;
	outline: none;
	height: 2rem;
`;
export const ButtonWrap = styled.div`
	margin-top: 3rem;
`;
export const BottomButton = styled.button`
	width: 100%;
	height: 5rem;
	background-color: #e49afb;
	border: none;
	border-radius: 8px;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	color: white;
	cursor: pointer;
	&:hover {
		color: black;
		transform: scale(1.01);
	}
`;
