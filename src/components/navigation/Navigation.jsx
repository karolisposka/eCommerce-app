import React from "react"
import * as S from "./Navigation.styles"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate()
    const loadersState = useSelector((state) => state.entities.products.loading)
    const data = useSelector((state) => state.entities.cart)
    const totalQuantity = data.cart.reduce((a, b) => a + b.quantity, 0)
    console.log(totalQuantity)

    return (
        <S.NavigationContainer>
            <S.ItemsContainer>
                <S.LogoWrapper
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <S.LogoImg src="./logo.png" alt="logo" />
                    {(loadersState || data.loading) && <S.StyledLoader />}
                </S.LogoWrapper>
                <S.CartWrapper>
                    <S.CartItemsNumber>{totalQuantity}</S.CartItemsNumber>
                    <S.CartIcon
                        onClick={() => {
                            navigate("/cart")
                        }}
                    />
                </S.CartWrapper>
            </S.ItemsContainer>
        </S.NavigationContainer>
    )
}

export default Navigation