import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row, Label } from './styles'
import { useState } from 'react'


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleProdNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handlePowNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('Pow')
    }else {
      const power = Math.pow(Number(firstNumber), Number(currentNumber));
      setCurrentNumber(String(power))
      setOperation('')
    }
  }

  const handlePercentNumbers = () => {
    const percent = Number(currentNumber) / 100;
    setCurrentNumber(percent)
    setOperation('')
  }

  const handleSignalInvert = () => {
    const invert = Number(currentNumber) * -1;
    setCurrentNumber(invert)
    setOperation('')
  }

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
      <Content>
        <Input value={currentNumber}/>
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
