import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 0px;
    height: 70px;
    margin: 5px;
    border: none;
    border-radius: 190px;
    background-color: ${props => props.info === "greenButton" ? "#427E04" : "#2F2F2F"};
    color: ${props => props.info === "greenColor" || 
                      props.info === "greenColorSmall" ? "#74b632" : 
                      props.info === "redColor" ? "#CC7700" : "#FAFAFA"};
    font-size: ${props => props.info === "greenColor" || 
                          props.info === "greenButton" ? "35px" :
                          props.info === "greenColorSmall" ? "24px" : "28px"};
    font-weight: 400;
    flex: 1;

    &:hover {
        background-color: #3F3F3F;
        cursor: pointer;
    }

    @media (min-width: 800px) {
        height: 85px;    
    }
`