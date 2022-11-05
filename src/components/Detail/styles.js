import styled from 'styled-components';

export const DetailsContainer = styled.details`
    position: absolute;
    left: 25px;
    top: 25px;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 1.5rem;

    ul{
        margin-left: 20px;
    }

    button {
        padding: 15px;
        height: 50px;
        margin: 10px 15%;
        border: none;
        border-radius: 20px;
        background-color: #559417;
        color: #FAFAFA;
        font-size: 20px;
        font-weight: 500;

        &:hover {
            background-color: #3c6d0b;
            cursor: pointer;
        }
    }
`