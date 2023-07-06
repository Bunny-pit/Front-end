import React from 'react';
import DetailHeader from '../../../components/Header/DetailHeader/DetailHeader';
import ProfileImg from '../../../assets/images/userimage.png';
import { Container } from './DetailStyle';

const Detail = () => {
	return (
		<>
			<DetailHeader />
			<Container>
				<div>
					<div>
						<img src={ProfileImg} alt='userImg' />
						<p>유저 아이디</p>
					</div>
					<div>
						<button>삭제버튼</button>
					</div>
				</div>
				<div>
					{/* 게시글 큰 wrap */}
					<div>
						{/* 사진 wrap */}
						<p>이미지 들어갈 자리</p>
					</div>
					<div>
						{/* 좋아요버튼, 좋아요수, 시간 */}
						<button>좋아요 버튼</button>
						<p>
							좋아요 수 <span>0</span>
						</p>
						<p>시간 들어갈 자리</p>
					</div>
					<div>
						{/* 게시글 내용 들어갈 자리 */}
						<div>게시글 내용이 들어갈 자리입니다아아아아아아아앙</div>
					</div>
					<hr />
				</div>
			</Container>
		</>
	);
};

export default Detail;
