import Styled from "styled-components"
import { FaFilter } from "react-icons/fa"
import { BiRefresh } from "react-icons/bi"

export const FiltersContainer = Styled.div`
    margin: 0rem 1rem;
    padding-top:1rem;
    display:flex;
    align-items:center;
    
`

export const Category = Styled.div`
    flex:1;

`

export const FiltersWrapper = Styled.div`
    display:flex;
    align-items:Center;
    flex-direction:row-reverse;
    flex:3;

`

export const FilterIcon = Styled(FaFilter)`
    color:${(props) => props.theme.colors.background.icons};
    margin-left:1rem;
`

export const RefreshIcon = Styled(BiRefresh)`
    color: ${(props) => props.theme.colors.background.warning};
    font-size: ${(props) => props.theme.fonts.size.medium};
    cursor: pointer;
    

`
