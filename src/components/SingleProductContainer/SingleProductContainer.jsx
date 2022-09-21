import React, { useState } from "react"
import * as S from "./SingleProductContainer.styles"
import pizza from "../../assets/pizza.png"
import { increment, decrement } from "../../store/cart"
import { useSelector, useDispatch } from "react-redux"
import IngredientTag from "../ingredientTag/IngredientTag"

const SingleProductContainer = ({ handleExit, item }) => {
    const [ingredients, setIngredients] = useState(item.description.split(","))
    console.log(ingredients)
    const [ingredientsState, setIngredientsState] = useState(
        item.description
            .split(",")
            .sort((a, b) => a.length - b.length)
            .map((ingredient, index) => {
                return {
                    id: index,
                    ingredient,
                    deleted: false,
                }
            })
    )
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cart)

    return (
        <S.ProductContainer id={item.id}>
            <S.ExitBtn onClick={handleExit} />
            <S.ProductSection>
                <S.ImageWrapper>
                    <S.SizeLine>
                        <S.ProductImage src={item.imageurl} alt="alt" />
                    </S.SizeLine>
                </S.ImageWrapper>
                <S.ProductInfoWrapper>
                    <S.Title>{item.title}</S.Title>
                    <S.SmallText>Size 30cm, tradicinis padas</S.SmallText>
                    <S.IngredientsWrapper>
                        {ingredientsState.map((product, index) => (
                            <IngredientTag
                                id={index}
                                deleted={product.deleted}
                                handleDelete={() => {
                                    setIngredients(
                                        ingredients.filter((ingredient) => ingredient !== product.ingredient)
                                    )
                                    setIngredientsState(
                                        ingredientsState.map((item) => {
                                            if (item.id === product.id) {
                                                return { ...item, deleted: true }
                                            }
                                            return item
                                        })
                                    )
                                }}
                                handleUndo={() => {
                                    setIngredientsState(
                                        ingredientsState.map((item) => {
                                            if (item.id === product.id) {
                                                return { ...item, deleted: false }
                                            }
                                            return item
                                        })
                                    )
                                    setIngredients([...ingredients, product.ingredient])
                                    console.log(product.ingredient)
                                }}
                            >
                                {product.ingredient}
                            </IngredientTag>
                        ))}
                    </S.IngredientsWrapper>

                    <S.description>Choose size:</S.description>
                    <S.StyledPizza big={true} />
                    <S.StyledPizza />
                    {data.cart.filter(
                        (product) => product.title === item.title && product.description === ingredients
                    ) ? (
                        <S.StyledButton
                            handleClick={() =>
                                dispatch(
                                    increment({
                                        id: item.id,
                                        title: item.title,
                                        description: ingredients.toString(),
                                        price: item.price,
                                    })
                                )
                            }
                        >
                            Add to Cart for {item.price}€
                        </S.StyledButton>
                    ) : (
                        <S.StyledQuantityReducer
                            quantity={data.cart.filter((items) => items.id === item.id).map((item) => item.quantity)}
                            handleIncrement={() =>
                                dispatch(
                                    increment({
                                        id: item.id,
                                        title: item.title,
                                        description: ingredients.toString(),
                                        price: item.price,
                                    })
                                )
                            }
                            handleDecrement={() =>
                                dispatch(decrement({ id: item.id, description: ingredients.toString() }))
                            }
                        />
                    )}
                </S.ProductInfoWrapper>
            </S.ProductSection>
        </S.ProductContainer>
    )
}

export default SingleProductContainer
