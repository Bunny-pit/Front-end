import styled from 'styled-components';

export const ImageWrap = styled.div`

  width: 50%;
  orange;
  text-align: right;
  margin-right: 2rem;
`;
export const UserImage = styled.img`
	border-radius: 200px;
	width: 31rem;
	height: 31rem;
	object-fit: cover;
	background-color: #fff;
	cursor: pointer;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 18rem;
		height: 18rem;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 15rem;
		height: 15rem;
	}
`;
export const OtherUserImage = styled.img`
	border-radius: 200px;
	width: 31rem;
	height: 31rem;
	object-fit: cover;
	background-color: #fff;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
		width: 18rem;
		height: 18rem;
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		width: 15rem;
		height: 15rem;
	}
`;
