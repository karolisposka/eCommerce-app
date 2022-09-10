import Styled from "styled-components"
import Button from "../Button/Button"
import { FaExclamation } from "react-icons/fa"

export const InputContainer = Styled.div`
   margin:1rem;
`

export const Label = Styled.label`
    display:Block;
    margin-bottom:0.25rem;
    color:rgba(0,0,0,0.3); //keisti spalva
`

export const InputWrapper = Styled.div`
   display:flex;
   justify-content:Space-between;
   align-items:Center;
   position:relative;
   border:1px solid rgba(0,0,0,0.3);
   border-radius:0.25rem;
   
       
`

export const Input = Styled.input`
    padding:0.25rem;
    background:transparent;
    outline:none;
    border:none;
    width:100%;
    border-radius:0.25rem;
`

export const CommentIcon = Styled(FaExclamation)`
    color:${(props) => props.theme.colors.background.warning}; //pakeisti spalva
    cursor: pointer; 
    margin:0 1rem;
    
`

export const Comment = Styled.div`
    display:flex;
    width:10rem;
    text-align:center;
    position:absolute;
    right:0;
    top:2rem;
    background:white; //pakeisti spalva
    border-radius:0.25rem;
    z-index:3;
    border:1px solid rgba(0,0,0,0.3);
`

export const CommentText = Styled.p`
    padding:0.25rem;
    font-size:0.75rem;
`
