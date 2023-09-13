<br />
<br />

<div align="center">
<img width=1000" src="./src/assets/images/intro.png"/>
<br />
<br />
</div>

<br />

## 📌 소셜 미디어 플랫폼 버니톡🐰

#### 프로젝트 기간 : 2023년 7월 3일 ~ 9월 1일

### [🌎 웹사이트 바로가기](https://www.bunny-pit.com/)

<br />

## 📌 서비스 소개

### 👥 페르소나

이현지 (18세)

성별 : 여자

직업 : 고등학생

“친구들과 소통도 하고 컨텐츠도 올리는 새로운 서비스를 경험하고 싶어요 “

고등학생 현지는 나만의 게시물로 가득 채워진 개인 페이지를 만들고 친구들과 공유하며 놀고싶지만 한편으로는 익명의 자유 게시판에서 자신만의 생각을 공유하고 싶어합니다.

<br />

## 📌 시연 영상

### [▶️ 시연 영상 바로가기](https://www.youtube.com/watch?v=JBBsylREzyc)

<br />
<br />

## 📌 기술 스택

| **Language** |

TypeScript, JavaScript

| **Backend** |

Node.js, Express.js, Mongoose, PostMan

| **Frontend** |

React, CRA, StyledComponents, SWR, HTML5, CSS3, Figma

| **Communication** |

Notion, Github, Discord

| **Infrastructure** |

MongoDB, CloudType

<br>

## 📌 서비스 기능 명세

### 유저기능

1. 사용자는 회원가입시, ID, Email 중복을 입력할 수 없고, password 유효성 검사가 있다. (숫자, 영문, 특수문자 8자 이상)
2. 사용자가 로그인시 사용자의 회원가입 정보가 저장된다.
3. 사용자는 이메일과 비밀번호를 변경할 수 있고, 회원탈퇴를 할 수 있다.
4. 사용자는 가입된 회원을 검색할 수 있다.

### 마이페이지 기능

1. 로그인 한 유저는 마이페이지에서 프로필, 자기소개를 변경할 수 있다.
2. 로그인 한 유저는 게시글 등록 및 삭제가 가능하다.
3. 로그인 한 유저는 다른 유저의 마이페이지에 들어가 팔로우를 할 수 있다.
4. 로그인 한 유저는 나를 팔로우한 유저 수를 확인할 수 있다.

### 익명 게시판 기능

1. 유저는 익명 게시판의 게시글 확인을 할 수 있다.(작성자 이름, 이미지는 랜덤 처리)
2. 로그인 한 유저는 익명 게시판에 게시글을 등록, 수정, 삭제 할 수 있다.<br />(본인 게시글만 수정, 삭제 가능)
3. 로그인 한 유저는 익명 게시판에 작성된 게시글을 신고할 수 있다.<br />(신고 사유 입력, 3회 이상 신고시 관리자가 조회 가능하다.)

### 친구 게시판 기능

1. 로그인 한 유저는 친구 게시판에서 내가 팔로우한 친구의 게시글을 확인할 수 있다.<br />(팔로우한 유저의 게시글만 확인 가능)
2. 로그인 한 유저는 친구 게시판에서 게시글을 등록, 수정, 삭제 할 수 있다.<br />(본인 게시글만 수정, 삭제 가능)
3. 로그인 한 유저는 친구 게시판에 작성된 게시글을 신고할 수 있다.<br />(신고 사유 입력, 3회 이상 신고시 관리자가 조회 가능하다.)

### 익명 채팅 기능

1. 로그인 한 유저는 익명 유저와 1대1 대화를 실시간으로 나눌 수 있다.
2. 로그인 한 유저는 내가 채팅했던 익명 유저와의 기록을 다시 불러올 수 있다.
3. 로그인 한 유저는 채팅방을 나갈 수 있다.

### 친구 채팅 기능

1. 로그인 한 유저는 다른 유저와 1대1 대화를 실시간으로 나눌 수 있다.
2. 로그인 한 유저는 내가 채팅했던 유저와의 기록을 다시 불러올 수 있다.
3. 로그인 한 유저는 채팅방을 나갈 수 있다.

### 관리자 기능

1. 관리자는 가입된 회원 목록을 확인하고 삭제할 수 있다.
2. 관리자는 가입된 회원을 검색할 수 있다.
3. 관리자는 신고가 3회 이상 접수된 익명, 친구 게시판의 게시글 및 작성자, 
   신고자 및 사유를 확인할 수 있고 게시글을 삭제할 수 있다.

## 📌 디렉토리 파일구조

<details><summary>Backend</summary>

```bash
📦backend

 ┣ 📂src
 ┃ ┣ 📂config
 ┃ ┃ ┣📜imgAPI 2.js
 ┃ ┃ ┣📜imgAPI.js
 ┃ ┃ ┣📜s3 2.js
 ┃ ┃ ┗📜s3.js
 ┃ ┣ 📂controller
 ┃ ┃ ┣📜chat_controller.js
 ┃ ┃ ┣📜comment_controller.js
 ┃ ┃ ┣📜friendChat_controller.js
 ┃ ┃ ┣📜friendMessage_controller.js
 ┃ ┃ ┣📜like_controller.js
 ┃ ┃ ┣📜mainhomeFriends_controller.js
 ┃ ┃ ┣📜mainhomeSecret_controller.js
 ┃ ┃ ┣📜message_controller.js
 ┃ ┃ ┣📜post_controller.js
 ┃ ┃ ┗📜user_controller.js
 ┃ ┣ 📂database/models
 ┃ ┃ ┣📜chat_model.js
 ┃ ┃ ┣📜comment_model.js
 ┃ ┃ ┣📜friendChat_model.js
 ┃ ┃ ┣📜friendMessage_model.js
 ┃ ┃ ┣📜index.js
 ┃ ┃ ┣📜like_model.js
 ┃ ┃ ┣📜mainhomeFriends_model.js
 ┃ ┃ ┣📜mainhomeSecret_model.js
 ┃ ┃ ┣📜message_model.js
 ┃ ┃ ┣📜post_model.js
 ┃ ┃ ┗📜user_model.js
 ┃ ┣ 📂lib
 ┃ ┃ ┣📜constant.js
 ┃ ┃ ┣📜socket.js
 ┃ ┃ ┗📜utils.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣📜adminCheck.js
 ┃ ┃ ┣📜asyncHandler.js
 ┃ ┃ ┣📜index.js
 ┃ ┃ ┣📜login_required.js
 ┃ ┃ ┗📜registerMail.js
 ┃ ┣ 📂routers
 ┃ ┃ ┣📜chat_router.js
 ┃ ┃ ┣📜comment_router.js
 ┃ ┃ ┣📜like_router.js
 ┃ ┃ ┣📜mainhome_router.js
 ┃ ┃ ┣📜message_router.js
 ┃ ┃ ┣📜post_router.js
 ┃ ┃ ┗📜user_router.js
 ┃ ┣ 📂services
 ┃ ┃ ┣📜chat_service.js
 ┃ ┃ ┣📜comment_service.js
 ┃ ┃ ┣📜friendChat_service.js
 ┃ ┃ ┣📜friendMessage_service.js
 ┃ ┃ ┣📜like_service.js
 ┃ ┃ ┣📜mainhomeFriends_service.js
 ┃ ┃ ┣📜mainhomeSecret_service.js
 ┃ ┃ ┣📜message_service.js
 ┃ ┃ ┣📜post_service.js
 ┃ ┃ ┗📜user_service.js
 ┣ 📜.env
 ┣ 📜gitignore
 ┣ 📜package-lock.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
```

</details>
<details><summary>Frontend</summary>

```bash
📦frontend
 ┣ 📂public
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┗ 📂images
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AdminHeader
 ┃ ┃ ┃ ┣ 📜AdminHeader.tsx
 ┃ ┃ ┃ ┗ 📜AdminHeaderStyle.ts
 ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┣ 📜DefaultButton.tsx
 ┃ ┃ ┃ ┗ 📜DefaultButtonStyle.ts
 ┃ ┃ ┣ 📂Chat
 ┃ ┃ ┃ ┣ 📜Chat.tsx
 ┃ ┃ ┃ ┣ 📜FriendChat.tsx
 ┃ ┃ ┃ ┗ 📜ChatStyle.ts
 ┃ ┃ ┣ 📂ChatBox
 ┃ ┃ ┃ ┣ 📜ChatBox.tsx
 ┃ ┃ ┃ ┣ 📜FriendChatBox.tsx
 ┃ ┃ ┃ ┗ 📜ChatBoxStyle.ts
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┗ 📜FooterStyle.ts
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📂DetailHeader
 ┃ ┃ ┃ ┃ ┣ 📜DetailHeader.tsx
 ┃ ┃ ┃ ┃ ┗ 📜DeatailHeaderStyle.ts
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜HeaderStyle.ts
 ┃ ┃ ┣ 📂MainHomeContent
 ┃ ┃ ┃ ┣ 📂MainHomeContentDetail
 ┃ ┃ ┃ ┃ ┣ 📜MainHomeContentImage.tsx
 ┃ ┃ ┃ ┃ ┗ 📜MainHomeContentInnerContent.ts
 ┃ ┃ ┃ ┣ 📜MainHomeContent.tsx
 ┃ ┃ ┃ ┗ 📜MainHomeContentStyle.ts
 ┃ ┃ ┣ 📂MainHomeSendBox
 ┃ ┃ ┃ ┣ 📜MainHomeSendBox.tsx
 ┃ ┃ ┃ ┗ 📜MainHomeSendBoxStyle.ts
 ┃ ┃ ┣ 📂MessageBubble
 ┃ ┃ ┃ ┗ 📜MessageBubble.tsx
 ┃ ┃ ┣ 📂ProfileUpdateModal
 ┃ ┃ ┃ ┣ 📜arrow_back_icon.svg
 ┃ ┃ ┃ ┣ 📜media_icon.svg
 ┃ ┃ ┃ ┣ 📜ProfileUpdateModal.tsx
 ┃ ┃ ┃ ┗ 📜ProfileUpdateModalStyle.ts
 ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┃ ┗ 📜SearchBarStyle.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useAutoScroll.ts
 ┃ ┃ ┣ 📜useMainHomePost.ts
 ┃ ┃ ┗ 📜useSocket.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Admin
 ┃ ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┃ ┣ 📜AdminMain.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdminMainStyle.ts
 ┃ ┃ ┃ ┣ 📂ReportManagement
 ┃ ┃ ┃ ┃ ┣ 📜ReportManagement.tsx
 ┃ ┃ ┃ ┃ ┣ 📜FriendsHooks.tsx
 ┃ ┃ ┃ ┃ ┣ 📜SecretHooks.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ReportManagementStyle.ts
 ┃ ┃ ┃ ┗ 📂UserMembers
 ┃ ┃ ┃ ┃ ┣ 📜UserMembers.tsx
 ┃ ┃ ┃ ┃ ┣ 📜UserMembersHooks.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UserMembersStyle.ts
 ┃ ┃ ┣ 📂Chatting
 ┃ ┃ ┃ ┣ 📜Chatting.tsx
 ┃ ┃ ┃ ┣ 📜FriendChatting.tsx
 ┃ ┃ ┃ ┗ 📜ChattingStyle.ts
 ┃ ┃ ┣ 📂DMList
 ┃ ┃ ┃ ┣ 📜DMList.tsx
 ┃ ┃ ┃ ┣ 📜FriendDMList.tsx
 ┃ ┃ ┃ ┗ 📜DMListStyle.ts
 ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┃ ┗ 📜MainStyle.ts
 ┃ ┃ ┣ 📂MainHome
 ┃ ┃ ┃ ┣ 📜MainHomeFriends.tsx
 ┃ ┃ ┃ ┣ 📜MainHomeSecret.tsx
 ┃ ┃ ┃ ┗ 📜MainHomeStyle.ts
 ┃ ┃ ┣ 📂SearchModal
 ┃ ┃ ┃ ┣ 📜SearchModal.tsx
 ┃ ┃ ┃ ┗ 📜SearchModalStyle.ts
 ┃ ┃ ┣ 📂UserAccount
 ┃ ┃ ┃ ┣ 📂Login
 ┃ ┃ ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Register.tsx
 ┃ ┃ ┃ ┃ ┗ 📜LoginStyle.ts
 ┃ ┃ ┃ ┣ 📂UserEdit
 ┃ ┃ ┃ ┃ ┣ 📜UserEdit.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UserEditStyle.ts
 ┃ ┃ ┃ ┗ 📂UserWithdrawal
 ┃ ┃ ┃ ┃ ┗ 📜UserWithdrawal.tsx
 ┃ ┃ ┗ 📂UserMain
 ┃ ┃ ┃ ┣ 📂Detail
 ┃ ┃ ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┃ ┃ ┗ 📜DetailStyle.ts
 ┃ ┃ ┃ ┗ 📂UploadPost
 ┃ ┃ ┃ ┃ ┣ 📜UploadPost.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UploadPostStyle.ts
 ┃ ┃ ┃ ┣ 📜UserMain.tsx
 ┃ ┃ ┃ ┗ 📜UserMainStyle.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜GlobalFont.ts
 ┃ ┃ ┣ 📜GlolbalStyles.ts
 ┃ ┃ ┣ 📜Styled.d.ts
 ┃ ┃ ┗ 📜Theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜chatType.ts
 ┃ ┃ ┣ 📜dataType.ts
 ┃ ┃ ┗ 📜postType.ts
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

</details>

<br>

## 📌 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

```bash
git clone <레포지토리 주소>
```

2. 클론한 디렉토리에서 frontend, backend디렉토리로 들어가 아래 명령어를 통해 각각각 필요한 module 설치

```bash
npm install
```

3. backend에서 필요한 `.env` 설정

```bash
PORT=<포트번호>
MONGODB_URI=<몽고db url>
ACCESS_SECRET_KEY=<key>
REFRESH_SECRET_KEY=<key>
S3_ACCESS_KEY=<key>
S3_SECRET_ACCESS_KEY=<key>
S3_REGION=<key>
S3_BUCKET_NAME=<key>
```

4. frontend에서 필요한 `.env` 설정

```bash
REACT_APP_API_URL=<백엔드url>
```

4. express 앱과 react앱을 실행

```bash
npm run start
```

<br>

## 📌 팀 구성원

<table width="600">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>이름</th>
        <td width="100" align="center">오창현</td>
        <td width="100" align="center">김종욱</td>
        <td width="100" align="center">김종현</td>
        <td width="100" align="center">류이서</td>
        <td width="100" align="center">이준미</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="150" align="center">
            FullStack<br>
        </td>
        <td width="150" align="center">
            FullStack<br>
        </td>
        <td width="150" align="center">
            FullStack<br>
        </td>
         <td width="150" align="center">
            FullStack<br>
        </td>
         <td width="150" align="center">
            FullStack<br>
        </td>
    </tr>
    <tr>
    </tbody>
</table>

<br>
<br>
