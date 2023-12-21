//sessionStorage에 토큰 저장
export const setToken = (token: string, value: string) => {
	sessionStorage.setItem(token, value);
};

//토큰 가져오기
export const getToken = (token: string) => {
	return sessionStorage.getItem(token);
};

//토큰 삭제
export const removeToken = (token: string) => {
	sessionStorage.removeItem(token);
};
