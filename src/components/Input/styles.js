import styled from 'styled-components';

export const InputContainer = styled.div`
    width: calc(100% - 30px);
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    margin: 20px 15px;
    
    input {
        width: 100%;
        height: 75px;
        background-color: #4f5566;
        border: 0;
        text-align: right;
        font-size: 50px;
        font-family: 'Roboto';
        padding: 0 10px;
        color: #FFFFFF;

        @media (min-width: 1150px) {
            height: 120px;    
            font-size: 65px;
        }
    }

    @media (min-width: 1150px) {
        height: 120px; 
    }
`