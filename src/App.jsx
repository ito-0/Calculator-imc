import { useState } from 'react';
import Calculadora from './components/Calculadora'; // Importe o componente da Calculadora
import Perfil from './components/Perfil'; // Importe o componente do Perfil

function App() {
  const [showCalculator, setShowCalculator] = useState(true);
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('');

  const handleCalculate = (altura, peso, imc, idade, sexo) => {
    setAltura(altura);
    setPeso(peso);
    setImc(imc);
    setIdade(idade);
    setSexo(sexo);
    setShowCalculator(false);
  };

  const handleReset = () => {
    setShowCalculator(true);
    setAltura(0);
    setPeso(0);
    setImc(0);
    setIdade(0);
    setSexo('');
  };

  return (
    <div className="App">
      {showCalculator ? (
        <Calculadora onSubmit={handleCalculate} />
      ) : (
        <Perfil
          altura={parseFloat(altura)}
          peso={parseFloat(peso)}
          imc={imc}
          idade={parseInt(idade)}
          sexo={sexo}
        />
      )}

      {showCalculator ? null : (
        <button className={'back-button'} onClick={handleReset}>
          Voltar à Tela Inicial
        </button>
      )}
      
    </div>
  );
}

export default App;