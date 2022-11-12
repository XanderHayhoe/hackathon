import Styled from "styled-components";

export const Wrapper = Styled.div`
position: relative; 
margin: auto;

border: 5px solid #ADD8E6;
padding: 10px;
alignment: center;
display: flex; 
align-items: center; 
justify-content: center; 
min-height: 100vh;
background: rgb(2,0,36);
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);

form {
    box-sizing: border-box;
    margin:10px 0;
    
    border-bottom:1px solid #eee;
}

h2 {
  position:fixed;
  top:25%;
  text-align: center;
  width:100%;
  font-size: 2.5rem;
  font-weight: lighter; 
  
}
.btn-primary {
    margin-top: 15px;
    display: block;
    width: 20%;
    font-weight: lighter;
}
h3 {
    font-size: 2rem;
    font-weight: lighter;
}
`;
