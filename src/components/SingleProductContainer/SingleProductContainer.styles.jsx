import Styled, { keyframes } from "styled-components"
import { HiOutlineX } from "react-icons/hi"
import { ReactComponent as Pizza } from "../../assets/pizza.svg"
import Button from "../Button/Button"
import Additives from "../additives/Additives"

const render = keyframes`
  0% {
    transform: translateY(-500px);
  }

  100% {
    transform: translateY(0);
  }
  
`

export const ProductContainer = Styled.section`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  height:100vh;
  background:rgba(0,0,0,0.2);
  font-family:${(props) => props.theme.fonts.names.primary};
  z-index:10;
  @media(max-width:768px){
    height:100%;
  }

`

export const ProductSection = Styled.section`
  background:${(props) => props.theme.colors.background.lightest};
  max-width:1000px;
  min-width:400px;
  margin:1rem auto;
  min-height:55vh;
  border-radius:0.25rem;
  display:Flex;
  opacity: 1;
  transform:translateY(0);
  animation: ${render} 0.5s ease-in-out;
  @media(max-width:576px){
    flex-direction:column;
    min-height:75vh;
  }
  @media(max-width:768px){

  }

`

export const ImageWrapper = Styled.div`
  flex:2;
  position:relative;
  border-right:1px solid rgba(0,0,0,0.3);
  display:flex;
  justify-content:Center;
  align-items:center;
  @media(max-width:576px){
    height:33%;
  }
`

export const ExitBtn = Styled(HiOutlineX)`
  position:absolute;
  top:1rem;
  left:1rem;
  color:${(props) => props.theme.colors.background.danger};
  font-size:2rem;
  margin:1rem;
  transition: transform 0.1s ease-in-out;
  &:hover{
    transform: scale(1.25);
  }
`

export const ProductImage = Styled.img`
  transition: width 0.3s ease-in-out;
  width:${(props) => (props.expand ? "22rem" : "19rem")};
  background-size:cover;
  background-position:center;
  background-repeat: no-repeat;
  @media(max-width:768px){
    width:${(props) => (props.expand ? "10rem" : "9rem")};
  }
`

export const SizeLine = Styled.div`
  border-radius:100%;
  width:20rem;
  display:flex;
  align-items:Center;
  justify-content:Center;
  height:20rem;
  margin:1rem;
  border:2px dotted rgba(0,0,0,0.3);
  @media(max-width:768px){
    width:9rem;
    height:9rem;
    margin:0.25rem;
  }
`

export const ProductInfoWrapper = Styled.section`
  flex:1;
  margin:1rem;
  position:relative;
  @media(max-width:768px){
    margin:0rem 1rem;
  }
`

export const Title = Styled.h4`
  margin:0.5rem 0;
  font-size:1.2rem;
`

export const SmallText = Styled.span`
  color:rgba(0,0,0,0.7);
  margin:0.5rem 0rem;
`

export const ChooseSize = Styled.div`
  width:${(props) => (props.size ? "7rem" : "5rem")};
`

export const description = Styled.p`
  

`

export const TypeWrapper = Styled.div`
  padding:1rem 0;
  @media(max-width:576px){
    padding:0.5rem 0;
  }
 
`

export const TypeButtons = Styled(Button)`
  width:50%;
  padding:0.5rem 1rem;
  transition: All 0.3s ease-in-out; 
  background:${(props) => (props.active ? "#3AB0FF" : "transparent")};
  color:${(props) => (props.active ? "white" : "black")};
  font-weight:700;
  &&:hover{
    background: ${(props) => props.theme.colors.background.info};
  }
   &&:nth-child(1){
    border-top-right-radius:0;
    border-bottom-right-radius:0;
  }
  &&:nth-child(2){
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  }
`

export const SelectionFrame = Styled.div`
  display:inline-block;
  padding:0.25rem;
  border: ${(props) => (props.display ? `1px solid rgba(0,0,0,0.3)` : "none")};
  border-radius:50%;
  margin-right:0.5rem;
`
export const StyledPizza = Styled(Pizza)`
  width:${(props) => (props.big ? "3rem" : "2.5rem")};
  cursor:pointer;
  vertical-align: middle;
  text-align: center;
  margin-right:0.5rem;
`

export const IngredientsWrapper = Styled.div`
  display:flex;
  flex-wrap:wrap;
  

`
export const ButtonWrapper = Styled.div`
  position:absolute;
  bottom:-1rem;
  left:3.5rem;
  @media(max-width:576px){
    position:static;
    padding:0.5rem;
    width:calc(100% - 1rem) ;
  }
`

export const StyledButton = Styled(Button)`
  border-radius:0.5rem;
  padding:0.5rem 1.25rem;
  margin:0.5rem 0;
  width:100%;
  font-weight:700;
  transition: all 0.3s ease-in-out;
  @media(max-width:576px){
    padding:0.5rem 0.5rem;
    margin:0;
    font-size:0.8rem;
  }

`
export const StyledAdditives = Styled(Additives)`
  padding:1rem 0;
  width:20rem;
  @media(max-width:576px){
    padding:0rem;
    width: 100%;
  }

  
`
