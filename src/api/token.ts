//local storage에 토큰 저장
export const setToken = (token: string, value: string) => {
    localStorage.setItem(token, value);
};
//토큰 가져오기
export const getToken = (token: string) => {
    return localStorage.getItem(token);
};
//토큰 삭제
export const removeToken = (token: string) => {
    localStorage.removeItem(token);
};