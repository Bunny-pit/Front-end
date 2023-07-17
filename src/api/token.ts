//local storage에 토큰 저장
export const setToken = (token: string) => {
    localStorage.setItem('accessToken', token);
};
//토큰 가져오기
export const getToken = () => {
    return localStorage.getItem('accessToken');
};
//토큰 삭제
export const removeToken = () => {
    localStorage.removeItem('accessToken');
};