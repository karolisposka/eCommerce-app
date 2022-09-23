import Styled from "styled-components"
import Input from "../Input/Input"
import Button from "../Button/Button"

export const StyledContainer = Styled.div`
    border-top:1px solid rgba(0,0,0,0.3);
    min-height:6rem;
    width:100%;
    font-family:${(props) => props.theme.fonts.names.primary};
`

export const Section = Styled.section`
    max-width:1200px;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;
    align-items:Center;
`
export const ItemsListContainer = Styled.div`
    padding:1rem;   
    width:10rem;
`
export const ItemsList = Styled.ul`
    width:100%;
`
export const ListItem = Styled.li`
    list-style:none;
    padding:0.25rem;
    display: inline-block;
    width:100%;
    text-transform: uppercase;
    transition: font-weight 200;
    &:not(:last-child){
        border-bottom:1px solid rgba(0,0,0,0.3)
    }
    &:hover{
        font-weight:700  
        }
`

export const InputContainer = Styled.div`
    margin:0 2rem;

`

export const Text = Styled.h4`
    margin:0.5rem 1rem;
`

export const Span = Styled.span`
    display:block;
    margin:0 1rem;
    color:${(props) => props.theme.colors.background.danger};
`

export const Form = Styled.form`
    display:flex;
    align-items:Center;

`

export const StyledInput = Styled(Input)`
    padding:0.25rem 1rem;
    margin:0;
    

`

export const StyledButton = Styled(Button)`
    border:1px solid rgba(0,0,0,0.3);
    border-radius:0.25rem;
    padding:0.25rem 1rem;
    margin-left: -0.9rem;
    font-weight:700;
    transition: all 0.3s ease-in-out;
    &:hover{
        background:${(props) => props.theme.colors.background.info};
        color:white;
    }
`
