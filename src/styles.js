import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #374774;
    background-image: url(/bg.png);
    background-repeat: repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

export const Content = styled.div`
    background-color: #010101;
    width: 40%;
    border: 3px solid #667d97;
    border-radius: 25px;
    padding: 25px 15px;

    @media (max-width: 768px) {
        width: 315px;
    }

    @media (min-width: 800px) {
        width: 400px;
        height: 75%;  
        max-height: 650px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Label = styled.p`
    font-weight: 500;
    font-size: 18px;
    font-family: 'Roboto';
    color: #d1d1d1;
    position: absolute;
    right: 25px;
    bottom: 15px;
`

