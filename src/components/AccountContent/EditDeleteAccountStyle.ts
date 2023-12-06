import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 20%;
	height: auto;
	width: 100%;
	max-width: 60rem;
	padding: 0 2rem;
	left: 50%;
	transform: translate(-50%, 0);
	border-top: none;
	border: 1px solid grey;

	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
export const TopButtonWrap = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0 -2rem;
	height: 5rem;
`;

export const TopButton = styled.button`
	background-color: white;
	border-top: none;
	border-bottom: 1px solid grey;
	border-right: none;
	border-left: none;
	width: 100%;
	&:first-child {
		border-right: 1px solid grey;
	}
	&:hover {
		background-color: #7954f8;
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
	margin: 0.5rem 0 0.5rem 0;
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
	margin-bottom: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const BottomButton = styled.button`
	width: 100%;
	height: 5rem;
	background-color: #e49afb;
	border: none;
	border-radius: 8px;
	margin: 0.5rem 0 0.5rem 0;
	color: white;
	cursor: pointer;
	&:hover {
		color: black;
		transform: scale(1.01);
	}
`;
