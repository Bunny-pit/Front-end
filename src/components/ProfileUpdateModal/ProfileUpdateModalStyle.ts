import styled from 'styled-components';

export const customModalStyles: ReactModal.Styles = {
	content: {
		width: '50%',
		height: '68%',
		margin: 'auto',
		position: 'fixed',
	},
};

export const Modal = styled.div`
  display: flex,
  justify-content: center,
  align-items: center,
  position: fixed,
  z-index: 1,
  left: 0,
  top: 0,
  width: 100%,
  height: 100%
  background-color: black;
	
`;

export const Box = styled.div`
	position: 'absolute';
	top: '10%';
	left: '50%';
	width: 100%;
	height: auto;

	padding: 4rem 0;
`;

export const ModalHeader = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.logocolor};
	padding-bottom: 3rem;
`;
export const ModalCloseButton = styled.button`
	border: none;
	background-color: white;
	margin-bottom: 2rem;
	cursor: pointer;
`;

export const ModalTitle = styled.div`
	margin-right: 30px;
	margin-bottom: 20px;
	flex-grow: 1;
	text-align: center;
	font-size: 2.5rem;
`;

export const ModalMain = styled.div`
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	.dspl-none {
		display: none;
	}
`;

export const ModalUploadFile = styled.div`
	position: relative;
	width: 100%;
	height: 35rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalUploadImg = styled.img`
	position: absolute;
	width: 25rem;
	height: 25rem;
	border-radius: 100%;
	object-fit: cover;
`;

export const ModalPostButton = styled.button`
	width: 10rem;
	height: 5rem;
	background: ${({ theme }) => theme.colors.commentpurple};
	border: none;
	border-radius: 1rem;
	color: ${({ theme }) => theme.colors.background};
	font-size: 2rem;
	font-weigth: 600;
	pointer: cursor;
	margin-top: 3rem;
`;

export const InputTitle = styled.div`
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 3rem;
`;
export const InputWrap = styled.div`
	display: flex;
	width: 80%;
	border-radius: 1rem;
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
	text-align: center;
`;
