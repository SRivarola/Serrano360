import styled, {css} from 'styled-components'

const BarraMenu = styled.div`
    width: 100%;
    display: block;
    position: fixed;
    top:0;
    z-index:999;
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;

        ${props => props.valido === 'false' && css`
            margin-left: 100% !important;
        `} 
        ${props => props.valido === 'true' && css`
            margin-left: 0% !important;
        `}
    }
`

const Menu = styled.nav`
    width: 100%;
    height: 88px;
    z-index:999;
    background: #fff;
    top: 0;
    @media (max-width: 768px){
        width: 100%;
        height: 100%;
        padding-top: 48px;
    }
`
const ToggleButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

const List = styled.ul`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
`

const ItemList = styled.li`
    line-height: 88px;
    text-align: center;
    &:first-child {
        text-align: left !important;   
        margin-top: 0px !important;  
        margin-bottom: 30px; 
    }
    @media (max-width: 768px){
        text-align: left;
        margin-top: -20px;
    }
`
const Leyenda = styled.p`
    display: none;
    margin-top: -60px;
    @media (max-width: 768px){
        display: flex;
    }
`

export {
    BarraMenu,
    Menu,
    ToggleButton,
    List,
    ItemList,
    Leyenda,
}