import styled from 'styled-components';

export const Page = styled.div`
position : absolute;
top:0;
bottom:0;
width:100%;
max-width : 60rem;
padding : 0 2rem;
left: 50%;
transform : translate(-50%, 0);

background-color : grey;

display : flex;
flex-direction : column;
overflow : hidden;
`
export const TitleAndLogoWrap = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`

export const TitleWrap = styled.div`
margin-top : 3rem;

font-size : 5rem;
font-weight : 700;
color : #7954F8;
`

export const LogoWrap = styled.div`
width : 100%;
background-color : pink;

display:flex;
justify-content : center;
`

export const FormWrap = styled.form`
margin-top : 2.6rem;
flex : 1;
`
export const InputTitle = styled.div`
font-size : 2rem;
font-weight : 500;
margin-top:2.6rem;
`
export const InputWrap = styled.div`
display : flex;
border-radius : 8px;
padding : 1.6rem;
margin-top : 1rem;
margin-bottom : 4rem;
background-color : white;
border : 1px solid #e3e0e0;

&:focus-within {
    border : 1px solid #DB7BF9;
}
`

export const InputBar = styled.input`
width: 100%;
border : none;
outline : none;
height: 2rem;
`

// export const ErrorMessageWrap = styled.div`
// margin-top : 1rem;
// margin-bottom : 2rem;
// color : red;
// font-size : 2rem;
// `
export const ButtonWrap = styled.div`
margin-top : 7rem;
`
export const BottomButton = styled.button`
width: 100%;
height : 5rem;
background-color: #E49AFB; 
border : none;
border-radius : 8px;
margin-top : 1rem;
margin-bottom : 1rem;
color : white;
cursor : pointer;
&:hover{
    color: black;
    transform: scale(1.01);
}
`
