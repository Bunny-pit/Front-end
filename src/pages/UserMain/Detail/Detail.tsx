import React from 'react';
import DetailHeader from '../../../components/Header/DetailHeader/DetailHeader';
import Footer from '../../../components/Footer/Footer';
import ProfileImg from '../../../assets/images/userimagesmall.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.png';
import likeIcon from '../../../assets/icons/like.png';
import { Container, DeleteButton } from './DetailStyle';

const Detail = () => {
	return (
		<>
			<DetailHeader />
			<Container>
				<div className='profile-wrap'>
					<div className='profile'>
						<img src={ProfileImg} alt='userImg' />
						<p>유저 아이디</p>
					</div>
					<div className='deletebutton-wrap'>
						<button>
							<DeleteButton src={DeleteIcon} alt='삭제버튼' />
						</button>
					</div>
				</div>
				<div className='post-wrap'>
					{/* 게시글 큰 wrap */}
					<div className='img-wrap'>
						{/* 사진 wrap */}
						<p className='post-img'>이미지 들어갈 자리</p>
					</div>
					<div className='post-detail-wrap'>
						{/* 좋아요버튼, 좋아요수, 시간 */}
						<div className='like-wrap'>
							<button className='like-button'>
								<img src={likeIcon} alt='좋아요 버튼' />
							</button>
							<p className='like-count-wrap'>
								좋아요 수 <span className='like-count'>0</span>
							</p>
						</div>
						<p className='post-time'>시간 들어갈 자리</p>
					</div>
					<div className='content-wrap'>
						{/* 게시글 내용 들어갈 자리 */}
						<div className='content'>
							게시글 내용이 들어갈 자리입니다아아아아아아아앙
						</div>
					</div>
					<hr />
				</div>
				<div className='comment-wrap'>
					<h3>댓글</h3>
					<ul className='comment-ul'>
						<li className='comment-li'>
							<h4 className='comment-userId'>UserName</h4>
							<p className='comment-content'>댓글 내용이다 깽깽이들아!!!</p>
						</li>
						<li className='comment-li'>
							<h4 className='comment-userId'>UserName</h4>
							<p className='comment-content'>댓글 내용이다 깽깽이들아!!!</p>
						</li>
						<li className='comment-li'>
							<h4 className='comment-userId'>UserName</h4>
							<p className='comment-content'>댓글 내용이다 깽깽이들아!!!</p>
						</li>
					</ul>
					<input
						type='text'
						className='comment-input'
						placeholder='댓글 남기기'></input>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export default Detail;
