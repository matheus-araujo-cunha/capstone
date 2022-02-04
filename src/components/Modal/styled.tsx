import styled from "styled-components";

export const Conteiner = styled.div`
    width: 450px;
    height: 400px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	.MuiDialogContent-root{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
    }
    @media screen and (max-width:900px){
        padding: 10px;
        width: 100%;
        height: 80vh;
    }
`

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 25px;
    p{
        
    }
`
