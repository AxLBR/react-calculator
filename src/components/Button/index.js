import { ButtonContainer } from './styles'

const Button = ({label, onClick, info}) => {
    return (
      <ButtonContainer info={info} onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;