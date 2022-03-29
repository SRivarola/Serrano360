import styled, {css} from 'styled-components'

const ToggleContainer = styled.div`
    height: 88px;
    display: flex;
    position: absolute;
    justify-items: center;
    margin-left: 15px;
    top: 0;
    display: none;
    z-index: 1999;
    @media (max-width: 768px) {
        display: flex;
        ${props => props.valido === 'true' && css`
            transition: all 1s;
            display: none
        `}
    }
    .icono{
      font-size: 40px;
      width: 40px
    }
`

const BarraMenu = styled.div`
    width: 100%;
    display: block;
    position: fixed;
    z-index:999;
    top: 0;
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;

        ${props => props.valido === 'false' && css`
            transition: all 1s;
            margin-left: -100% !important;
        `} 
        ${props => props.valido === 'true' && css`
            transition: all 1s;
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

const Transparencia = styled.div`
    @media (max-width: 768px){
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.2;
        z-index:999;
        top: 0;
    }
`

export {
    ToggleContainer,
    BarraMenu,
    Menu,
    ToggleButton,
    List,
    ItemList,
    Leyenda,
    Transparencia
}