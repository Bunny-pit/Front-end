// import React, { useState, useEffect } from 'react';
// import { emailValidation, passwordValidation } from '../../../utils/registerValidation';

// interface LoginFormState {
//     email: string;
//     password: string;
//     isEmailValid: boolean;
//     isPasswordValid: boolean;
//     isFormValid: boolean;
// }

// const initialLoginFormState: LoginFormState = {
//     email: '',
//     password: '',
//     isEmailValid: true,
//     isPasswordValid: true,
//     isFormValid: true,
// };

// const LoginForm: React.FC = () => {
//     const [loginForm, setLoginForm] = useState<LoginFormState>(initialLoginFormState);

//     useEffect(() => {
//         return () => {
//             // 컴포넌트가 언마운트될 때 상태 초기화
//             setLoginForm(initialLoginFormState);
//         };
//     }, []);

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const isEmailValid = emailValidation(loginForm.email);
//         const isPasswordValid = passwordValidation(loginForm.password);
//         const isFormValid = isEmailValid && isPasswordValid;

//         setLoginForm({
//             ...loginForm,
//             isEmailValid,
//             isPasswordValid,
//             isFormValid,
//         });

//         if (isFormValid) {
//             try {
//                 const response: AxiosRespones<{ accessToken: string }> = await post(
//                     API_USER_LOGIN,
//                     {
//                         email,
//                         password
//                     },
//                     { headers: { 'Content-Type ': 'application/json' } }
//                 );
//                 const accessToken: string = response.data.accessToken;
//                 setToken(accessToken);
//                 window.location.reload();
//             } catch (error) {
//                 console.log('로그인 post 오류', error)
//             }

//         } else {
//             // 유효하지 않은 입력에 대한 사용자 알림 등 추가 로직
//             alert('입력 정보를 확인해주세요!')
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {!loginForm.isEmailValid && <p>유효하지 않은 이메일입니다.</p>}
//             {!loginForm.isPasswordValid && <p>유효하지 않은 패스워드입니다.</p>}
//             <input
//                 type="text"
//                 value={loginForm.email}
//                 onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
//             />
//             <input
//                 type="password"
//                 value={loginForm.password}
//                 onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
//             />
//             <button type="submit" disabled={!loginForm.isFormValid}>
//                 로그인
//             </button>
//         </form>
//     );
// };

// export default LoginForm;