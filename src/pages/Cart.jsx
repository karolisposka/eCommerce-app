import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import Container from "../components/Container/Container"
import CartContainer from "../components/cartContainer/CartContainer"
import CartTable from "../components/cartTable/CartTable"
import OrderInfo from "../components/orderInfo/OrderInfo"
import BackToStore from "../components/backToStore/BackToStore"
import Footer from "../components/footer/Footer"
import MainContainer from "../components/mainContainer/MainContainer"

const Cart = () => {
    const navigate = useNavigate()
    const [deliveryOption, setDeliveryOption] = useState()
    const { cart } = useSelector((state) => state.cart)
    const totalQuantity = Number(cart.reduce((current, value) => current + value.quantity, 0))
    const totalAmount = Number(cart.reduce((current, value) => current + value.price * value.quantity, 0).toFixed(2))
    const deliveryAtHome = 1

    const options = [
        { value: deliveryAtHome, label: "Home" },
        { value: "0", label: "Pick up" },
    ]

    return (
        <MainContainer>
            <Container>
                {cart.length === 0 ? (
                    <BackToStore
                        handleClick={() => {
                            navigate("/")
                        }}
                    >
                        Back to
                    </BackToStore>
                ) : (
                    <CartContainer>
                        <CartTable items={cart} />
                        <OrderInfo
                            totalPrice={totalAmount}
                            quantity={totalQuantity}
                            options={options}
                            handleBackToStore={() => {
                                navigate("/")
                            }}
                            deliveryOption={deliveryOption}
                            handleChange={(value) => {
                                setDeliveryOption(value)
                            }}
                        />
                    </CartContainer>
                )}
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default Cart
