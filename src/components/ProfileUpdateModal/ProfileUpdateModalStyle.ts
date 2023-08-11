import styled from 'styled-components';

export const customModalStyles: ReactModal.Styles = {
	content: {
		width: '100%',
		height: '100%',
		margin: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		zIndex: 1,
		left: 0,
		top: 0,
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
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 650,
height: 800,
background-color : grey;
border : 2px solid red;
`;

export const ModalHeader = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
`;
export const ModalCloseButton = styled.button`
	border: none;
	background-color: white;
	cursor: pointer;
`;

export const ModalTitle = styled.div`
	margin-right: 30px;
	margin-bottom: 20px;
	flex-grow: 1;
	text-align: center;
	font-size: 15px;
`;

export const ModalMain = styled.div`
	color: black;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ModalUploadFile = styled.div`
	position: relative;
	width: 50%;
	height: 30rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalUploadImg = styled.img`
	position: absolute;
	width: 31rem;
	border-radius: 200px;
`;

export const ModalPostButton = styled.button`
	width: 50%;
	border: 1px solid;
	margin-top: 20px;
`;
