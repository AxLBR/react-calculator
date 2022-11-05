import { DetailsContainer } from './styles'

const Details = ({label, onClick, info}) => {
    return (
    <>
      <DetailsContainer info={info} open>
        <summary>Histórico de Cálculos</summary>
        <ul>{label !== '' ? 
                    label.slice(0).reverse().map((el, i) => {
                            return <li key={i}>{el}</li>;
                    }) 
              : ''
        }</ul> 
        <button onClick={onClick}>Limpar Histórico</button>
      </DetailsContainer>
    </>
    );
  }
  
  export default Details;