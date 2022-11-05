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
        margin: 16px 15%;
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

    @media (max-width: 970px) {
        left: 15px;
        top: 15px;

        ul{
            max-height: 100px;
            padding-right: 30px;
            font-size: 1.3rem;
            overflow-y: scroll;
        }

        ul::-webkit-scrollbar {
            width: 0.15em;
        }
        
        ul::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }
        
        ul::-webkit-scrollbar-thumb {
            background-color: #999;
            outline: 1px solid #999;
        }
        
    }
`