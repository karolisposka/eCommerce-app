import Styled from "styled-components"
import ProductCard from "../productCard/ProductCard"

export const ProductsList = Styled.div`
    width:100%;
    padding:1rem;
    display:flex;
    flex-wrap:wrap;
    flex:4;
`

export const StyledProductCard = Styled(ProductCard)`
    width:calc(33% - 2rem);
    box-sizing:border-box;
    margin: 1rem;
    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        transition: opacity 1000ms;
        opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        opacity: 0;
        transition: opacity 100ms;
    }

    @media(max-width:768px){
        width:calc(50% - 2rem);
    }

`
