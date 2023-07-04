import styled from 'styled-components';

const Page = styled.div`
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
const TitleAndLogoWrap = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`

const TitleWrap = styled.div`
margin-top : 3rem;

font-size : 5rem;
font-weight : 700;
color : #7954F8;
`

const LogoWrap = styled.div`
width : 100%;
background-color : pink;

display:flex;
justify-content : center;
`

const ContentWrap = styled.div`
margin-top : 2.6rem;
flex : 1;
`
const InputTitle = styled.div`
font-size : 2rem;
font-weight : 500;
margin-top:2.6rem;
`
const InputWrap = styled.div`
display : flex;
border-radius : 8px;
padding : 1.6rem;
margin-top : 1rem;
background-color : white;
border : 1px solid #e3e0e0;

&:focus-within {
    border : 1px solid #DB7BF9;
}
`

const InputBar = styled.input`
width: 100%;
border : none;
outline : none;
height: 2rem;
`

const ErrorMessageWrap = styled.div`
margin-top : 1rem;
margin-bottom : 2rem;
color : red;
font-size : 2rem;
`

const BottomButton = styled.button`
width: 100%;
height : 5rem;
background-color: #E49AFB; 
border : none;
border-radius : 8px;
margin-top : 1rem;
color : white;
cursor : pointer;
&:hover{
    color: black;
    transform: scale(1.01);
}
`

export { Page, TitleAndLogoWrap, TitleWrap, LogoWrap, ContentWrap, InputTitle, InputWrap, InputBar, ErrorMessageWrap, BottomButton }
