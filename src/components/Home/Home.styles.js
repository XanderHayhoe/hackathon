import Styled from "styled-components";
import Button from "react-bootstrap/Button";
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
font-family: "Times New Roman", Times, serif;
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,203,207,1) 0%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
.btn-primary {
    font-size: 2rem;
}
.btn-Secondary {
    font-size: 2rem;
    
    color: white;
}
.btn-Guest { 
    font-size: 1.5rem;
    color: white; 
    position: relative; 
    top: 55%;
}
`;
