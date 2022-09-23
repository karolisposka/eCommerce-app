import React from "react"
import PropTypes from "prop-types"
import * as S from "./CheckoutButton.styles"

const CheckoutButton = ({ type, handleClick, className }) => {
    return (
        <>
            <S.StyledButton className={className} type={type} onClick={handleClick}>
                Checkout <S.Icon />
            </S.StyledButton>
        </>
    )
}

// CheckoutButton.propTypes = {
//     type: PropTypes.oneOf(["submit", "text", "reset"]).isRequired(),
//     handleClick: PropTypes.func.isRequired(),
// }

export default CheckoutButton
