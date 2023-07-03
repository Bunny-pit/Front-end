import React from 'react';
import MainLogo from '../../assets/icons/MainLogo.png';

const MainPage = () => {
  return (
    <>
      <div>
        <header>
          <img src={MainLogo} alt="main-logo" />
          <button>로그인</button>
          <button>회원가입</button>
        </header>
        <div>
          <div>
            <p>친구들과 함께 만드는,</p>
            <p>우리의 공간</p>
          </div>
          <div>
            <p>
              자유롭게 사진을 올리고, 공유할 수 있는 우리만의 공간을 버니톡과
              함께 만들어가요
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
