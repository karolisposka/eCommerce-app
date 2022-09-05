import Styled from "styled-components"
import Container from "../Container/Container"
import Loader from "../loader/Loader"
import { FaCartArrowDown } from "react-icons/fa"

export const NavigationContainer = Styled(Container)`
  border-bottom:1px solid rgba(0,0,0,0.6);  
`
export const ItemsContainer = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const LogoWrapper = Styled.div`
    margin:1rem 2rem;
    display:flex;
    align-items:center;

`
export const LogoImg = Styled.img`
    width:3rem;
    height:3rem;

`
export const StyledLoader = Styled(Loader)`
    margin-left:1rem;  
`

export const CartWrapper = Styled.div`
    margin: 1rem;
    display:Flex;
    

`
export const CartIcon = Styled(FaCartArrowDown)`
    font-size:1.5rem;
    color:blue; //pakeisti spalva
    display:relative;
    cursor:pointer;
    
`
export const CartItemsNumber = Styled.span`
    color:white; //pakeisti spalva
    width:1rem;
    height:1rem;
    background:red; //pakeisti spalva
    font-size:0.8rem;
    border-radius:100%;
    text-align:center;
    align-self: flex-end;
`