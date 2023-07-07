import styled from 'styled-components';

export const Container = styled.div`
	width: 75%;
	margin: 0 auto;
	.profile-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.profile {
			display: flex;
			align-items: center;
			img {
				width: 10rem;
			}
			p {
				font-size: 2.7rem;
			}
		} //profile
		button {
			border: none;
			background: #fff;
			cursor: pointer;
		}
	} // profile-wrap
	.post-wrap {
		.img-wrap {
			.post-img {
				width: 100%;
			} //post-img
			width: 100%;
			height: 60rem;
			background: lightblue;
		} //img-wrap
		.post-detail-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.like-wrap {
				display: flex;
				align-items: center;
				.like-button {
					border: none;
					background: #fff;
					img {
						width: 3.6rem;
					} //img
				}
			} //like-button
			.like-count-wrap {
				font-size: 2rem;
				.like-count {
					font-weight: 600;
				} //like-count
			} //like-wrap
			.post-time {
				font-size: 1.8rem;
				color: ${({ theme }) => theme.colors.gray600};
			}
		} //.post-detail-wrap
		.content-wrap {
			margin: 2rem 0;
			font-size: 2rem;
		} //content-wrap
	} //post-wrap
	.comment-wrap {
		h3 {
			text-align: center;
		}
		.comment-ul {
			list-style: none;
			padding: 0;
			display: flex;
			flex-direction: column;
			.comment-li {
				display: flex;
				flex-direction: row;
				align-items: center;
				.comment-userId {
					font-size: 1.8rem;
					margin-right: 2rem;
				}
				.comment-content {
					font-size: 1.8rem;
				}
			} //comment-li
		} //comment-ul
		.comment-input {
			width: 99%;
			margin: 0;
			padding: 0;
			margin: 2rem 0 6rem;
		}
	} //comment-wrap
`;
export const DeleteButton = styled.img`
	width: 3.3rem;
	background: #fff;
	margin: 0 auto;
`;
