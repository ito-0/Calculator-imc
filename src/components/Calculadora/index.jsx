import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Calculadora.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Calculadora = ({ onSubmit }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [tooltipAlturaVisible, setTooltipAlturaVisible] = useState(false);
    const [tooltipPesoVisible, setTooltipPesoVisible] = useState(false);
    const [tooltipSexoVisible, setTooltipSexoVisible] = useState(false);
    const [tooltipIdadeVisible, setTooltipIdadeVisible] = useState(false);

    const toggleTooltipAltura = () => {
        setTooltipAlturaVisible(!tooltipAlturaVisible);
    };
    
    const toggleTooltipPeso = () => {
        setTooltipPesoVisible(!tooltipPesoVisible);
    };
    
    const toggleTooltipSexo = () => {
        setTooltipSexoVisible(!tooltipSexoVisible);
    };
    
    const toggleTooltipIdade = () => {
        setTooltipIdadeVisible(!tooltipIdadeVisible);
    };

    const handleCalcularIMC = () => {
        if (altura === '' || peso === '' || idade === '' || sexo === '') {
            return;
        }

        const alturaMetros = parseFloat(altura) / 100; // Converter para metros
        const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);

        onSubmit(altura, peso, imcCalculado, idade, sexo);
    };

    return (
        <div className={styles['calculator-container']}>
            <h2 className={styles['calculator-heading']}>Calculadora de IMC</h2>
            <div className={styles['input-container']}>
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles['info-icon']}
                    data-tip="Informe sua altura em centímetros."
                    onClick={toggleTooltipAltura}
                />
                <label className={styles['label-calc']} htmlFor='altura'>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    placeholder="Digite a altura (xx.xx)"
                />
                {tooltipAlturaVisible && (
                    <div className={styles['tooltip']}>
                        Medida a partir da sola dos pés até o topo da cabeça.
                    </div>
                )}
            </div>
            <div className={styles['input-container']}>
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles['info-icon']}
                    data-tip="Informe seu peso em quilogramas."
                    onClick={toggleTooltipPeso}
                />
                <label className={styles['label-calc']} htmlFor='peso'>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Digite o peso (xx.xx)"
                    
                />
                {tooltipPesoVisible && (
                    <div className={styles['tooltip']}>
                        Medida da força de atração gravitacional.
                    </div>
                )}
            </div>
            <div className={styles['input-container']}>
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles['info-icon']}
                    data-tip="Informe sua idade em anos."
                    onClick={toggleTooltipIdade}
                />
                <label className={styles['label-calc']}>Idade (anos):</label>
                <input 
                    type="number"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="Digite a idade"
                />
                {tooltipIdadeVisible && (
                    <div className={styles['tooltip']}>
                        Idade em anos
                    </div>
                )}
            </div>
            <div className={styles['input-container']}>
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles['info-icon']}
                    data-tip="Informe seu sexo."
                    onClick={toggleTooltipSexo}
                />
                <label className={styles['label-calc']}>Sexo:</label>
                <select title="Selecione um gênero" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                    <option value="">Selecione um gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                {tooltipSexoVisible && (
                    <div className={styles['tooltip']}>
                        Defina o sexo do indivíduo.
                    </div>
                )}
            </div>
            <button className={styles['calculate-button']} onClick={handleCalcularIMC}>
                Calcular IMC
            </button>
        </div>
    );
};

Calculadora.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Calculadora;