import Input from './components/Input'
import Button from './components/Button'
import Details from './components/Detail'
import { Container, Content, Row, Label } from './styles'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [results, setResults] = useState('');

  //Limpa a tela da calculadora
  const handleClear = () => {
    setFirstNumber('0')
    setCurrentNumber('0')
    setOperation('')
  };

  //Adiciona um número
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? num === '.' ? '0' : '' : prev}${num}`)                    
  }

  //Soma os números
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      const sumString = `${firstNumber} + ${currentNumber} = ${sum}`;
      setResults(results => [...results, sumString])
      
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }
  }

  //Subtrai os números
  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      const minusString = `${firstNumber} - ${currentNumber} = ${minus}`;
      setResults(results => [...results, minusString])

      setCurrentNumber(String(minus))
      setFirstNumber('0')
      setOperation('')
    }
  }

  //Multiplica os números
  const handleProdNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const product = Number(firstNumber) * Number(currentNumber);
      const productString = `${firstNumber} * ${currentNumber} = ${product}`;
      setResults(results => [...results, productString])

      setCurrentNumber(String(product))
      setFirstNumber('0')
      setOperation('')
    }
  }

  //Divide os números
  const handleDivNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      const divString = `${firstNumber} / ${currentNumber} = ${division}`;
      setResults(results => [...results, divString])

      setCurrentNumber(String(division))
      setFirstNumber('0')
      setOperation('')
    }
  }

  //Faz a potência do primeiro número sobre o segundo
  const handlePowNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('Pow')
    }else {
      const power = Math.pow(Number(firstNumber), Number(currentNumber));
      const powString = `${firstNumber} ^ ${currentNumber} = ${power}`;
      setResults(results => [...results, powString])

      setCurrentNumber(String(power))
      setFirstNumber('0')
      setOperation('')
    }
  }

  //Exibe o percentual do número
  const handlePercentNumbers = () => {
    const percent = Number(currentNumber) / 100;
    const percentString = `${currentNumber} / 100 = ${percent}`;
    setResults(results => [...results, percentString])

    setCurrentNumber(percent)
  }

  //Inverte o sinal do número
  const handleSignalInvert = () => {
    const invert = Number(currentNumber) * -1;
    const invertString = `${currentNumber} * -1 = ${invert}`;
    setResults(results => [...results, invertString])

    setCurrentNumber(invert)
  }

  //Função do igual
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleProdNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
          case '%':
            handlePercentNumbers();
            break;
          case '+/-':
            handleSignalInvert();
            break;
          case 'Pow':
            handlePowNumbers();
            break;
          default: 
            break;
        }
    }
  }

  return (
    <Container>
      <Details label={results} onClick={() => setResults('')} />
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button info="greenColorSmall" label="Pow" onClick={handlePowNumbers} />
          <Button info="greenColorSmall" label="%" onClick={handlePercentNumbers} /> 
          <Button info="greenColor" label="/" onClick={handleDivNumbers} />
          <Button info="redColor" label="C" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button info="greenColor" label="x" onClick={handleProdNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button info="greenColor" label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button info="greenColor" label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="+/-" onClick={handleSignalInvert}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button info="greenButton" label="=" onClick={handleEquals} />
        </Row>
      </Content>
      <Label>Desenvolvido por Gabriel Castro</Label>
    </Container>
  );
}

export default App;
