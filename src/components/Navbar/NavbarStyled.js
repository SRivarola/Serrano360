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
            transition: all 1.5s;
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
    top:0;
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
    background: #EFE9E1;
    border: none;
    cursor: pointer;
    height:42px;
    width:50px;
    top:20px;
    position:fixed;
    border-radius:8px;
`

const List = styled.ul`
    position:absolute;
    z-index:50;
    width: 90%;
    margin: 0 auto;
    display: grid;
    left:20px;
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
    font-size:14px;
    margin-top: -60px;
    @media (max-width: 768px){
        display: flex;
    }
    @media (max-width: 365px){
        font-size:12px;
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

const Border = styled.div`
background-color: #EFE9E1;
z-index: 400;
position: absolute;
width: 35px;
height: 500px;
left: 0;
top: 0;
z-index:1;
`

export {
    ToggleContainer,
    BarraMenu,
    Menu,
    ToggleButton,
    List,
    ItemList,
    Leyenda,
    Transparencia,
    Border
}