import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Perfil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faAngleDoubleDown, faArrowUp, faArrowDown, faExclamationTriangle, faInfoCircle, faMars, faVenus, faBaby, faChild, faUserGraduate, faUserTie, faUserDoctor, faUser, faPersonCane } from '@fortawesome/free-solid-svg-icons';

const Perfil = ({ altura, peso, imc, idade, sexo }) => {
    const [tooltipAlturaVisible, setTooltipAlturaVisible] = useState(false);
    const [tooltipPesoVisible, setTooltipPesoVisible] = useState(false);
    const [tooltipSexoVisible, setTooltipSexoVisible] = useState(false);
    const [tooltipIdadeVisible, setTooltipIdadeVisible] = useState(false);
    const [tooltipIMCVisible, setTooltipIMCVisible] = useState(false);
    const [tooltipClassificacaoVisible, setTooltipClassificacaoVisible] = useState(false);

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
    
    const toggleTooltipIMC = () => {
        setTooltipIMCVisible(!tooltipIMCVisible);
    };
    
    const toggleTooltipClassificacao = () => {
        setTooltipClassificacaoVisible(!tooltipClassificacaoVisible);
    };

    let classificacao = '';
    let classificacaoIcon = null;


    const calcularClassificacaoBebe = (imc) => {
        return [
            { max: 12.8, classificacao: 'Baixo Peso', icon: faExclamationTriangle },
            { max: 13.8, classificacao: 'Baixo Peso', icon: faExclamationTriangle },
            { max: 17, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 18.6, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade', icon: faAngleDoubleUp },
        ].find(item => imc <= item.max);
    };

    const calcularClassificacaoCrianca2Ate5Masculino = (imc) => {
        return [
            { max: 13, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 13.9, classificacao: 'Baixo Peso', icon: faExclamationTriangle },
            { max: 16.6, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 18.1, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau I', icon: faAngleDoubleUp },
        ].find(item => imc <= item.max);
    };

    const calcularClassificacaoCrianca2Ate5Feminino = (imc) => {
        return [
            { max: 12.8, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 13.8, classificacao: 'Baixo Peso', icon: faExclamationTriangle },
            { max: 17, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 18.6, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau I', icon: faAngleDoubleUp },
        ].find(item => imc <= item.max);
    };

    const calcularClassificacaoAdolescenteMasculino = (imc) => {
        return [
            { max: 17.7, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 19.5, classificacao: 'Abaixo do Peso', icon: faAngleDoubleDown },
            { max: 25.5, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 27, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: 28.5, classificacao: 'Obesidade Grau I', icon: faArrowUp },
            { max: 29.1, classificacao: 'Obesidade Grau II', icon: faAngleDoubleUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau III', icon: faExclamationTriangle },
        ].find(item => imc <= item.max);
    };

    const calcularClassificacaoAdolescenteFeminino = (imc) => {
        return [
            { max: 16.7, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 18.5, classificacao: 'Abaixo do Peso', icon: faAngleDoubleDown },
            { max: 25, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 26.5, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: 28, classificacao: 'Obesidade Grau I', icon: faArrowUp },
            { max: 29, classificacao: 'Obesidade Grau II', icon: faAngleDoubleUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau III', icon: faExclamationTriangle },
        ].find(item => imc <= item.max);
    };

    const calcularClassificacaoAdultoMulher = (imc) => {
        return [
            { max: 13.9, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 18.9, classificacao: 'Abaixo do Peso', icon: faAngleDoubleDown },
            { max: 23.9, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 28.9, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: 29, classificacao: 'Obesidade Grau I', icon: faArrowUp },
            { max: 38.9, classificacao: 'Obesidade Grau II', icon: faAngleDoubleUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau III', icon: faExclamationTriangle },
        ].find(item => imc <= item.max);
    };

    const classificacaoTextos = {
        'Muito Abaixo do Peso': 'Procure um médico imediatamente.',
        'Abaixo do Peso': 'Cuidado! É recomendável um consulta com seu médico ou educador físico',
        'Peso Normal': 'Parabéns!! Vc está com a medida ideal, faça a verificação com um profissional',
        'Sobrepeso': 'Cuidado! É recomendável um consulta com seu médico ou educador físico',
        'Obesidade Grau I': 'Cuidado! É recomendável um consulta com seu médico ou educador físico',
        'Obesidade Grau II': 'Procure um médico imediatamente.',
        'Obesidade Grau III': 'Procure um médico imediatamente.',
    };

    const idadeTextos = {
        '0-1': 'Recém-nascido, consulte um pediatra.',
        '1-2': 'Bebê com 1 ano, está em desenvolvimento rápido!',
        '2-5': 'Criança de 2 a 5 anos, crescendo rapidamente!',
        '6-12': 'Criança de 6 a 12 anos, em fase de crescimento!',
        '13-19': 'Adolescente, aproveite essa fase de mudanças!',
        '20-39': 'Adulto Jovem, mantenha hábitos saudáveis!',
        '40-59': 'Adulto Intermediário, cuide da sua saúde!',
        '60-79': 'Adulto Mais Velho, continue ativo!',
        '80-100': 'Idoso, aproveite a vida!',
    };

    const getClassificationColorClass = (classificacao) => {
        const classificationToColorClass = {
            'Muito Abaixo do Peso': 'muito-abaixo-peso',
            'Abaixo do Peso': 'abaixo-peso',
            'Peso Normal': 'peso-normal',
            'Sobrepeso': 'sobrepeso',
            'Obesidade Grau I': 'obesidade-grau-1',
            'Obesidade Grau II': 'obesidade-grau-2',
            'Obesidade Grau III': 'obesidade-grau-3',
        };

        const colorClass = classificationToColorClass[classificacao];
        if (colorClass) {
            return styles[colorClass];
        }
        return ''; 
    };

    const genderIcon = sexo === 'masculino' ? faMars : faVenus;

    const ageGroupIcon = idade < 2 ? faBaby : idade >= 2 && idade <= 5 ? faChild : idade >= 6 && idade < 20 ? faUserGraduate : idade >= 20 && idade < 40 ? faUserTie : idade >= 40 && idade < 60 ? faUserDoctor : idade >= 60 ? faUser : faPersonCane;

    if (idade < 2) {
        classificacaoIcon = calcularClassificacaoBebe(imc)?.icon;
        classificacao = calcularClassificacaoBebe(imc)?.classificacao;
    } else if (idade >= 2 && idade <= 5) {
        classificacaoIcon = sexo === 'masculino' ? calcularClassificacaoCrianca2Ate5Masculino(imc)?.icon : calcularClassificacaoCrianca2Ate5Feminino(imc)?.icon;
        classificacao = sexo === 'masculino' ? calcularClassificacaoCrianca2Ate5Masculino(imc)?.classificacao : calcularClassificacaoCrianca2Ate5Feminino(imc)?.classificacao;
    } else if (idade >= 6 && idade < 20) {
        classificacaoIcon = sexo === 'masculino' ? calcularClassificacaoAdolescenteMasculino(imc)?.icon : calcularClassificacaoAdolescenteFeminino(imc)?.icon;
        classificacao = sexo === 'masculino' ? calcularClassificacaoAdolescenteMasculino(imc)?.classificacao : calcularClassificacaoAdolescenteFeminino(imc)?.classificacao;
    } else if (idade >= 20 && sexo === 'feminino') {
        classificacaoIcon = calcularClassificacaoAdultoMulher(imc)?.icon;
        classificacao = calcularClassificacaoAdultoMulher(imc)?.classificacao;
    } else {
        // Valores de classificação para adultos
        const classificacoesAdulto = [
            { max: Number.NEGATIVE_INFINITY, classificacao: 'Muito Abaixo do Peso', icon: faExclamationTriangle },
            { max: 20, classificacao: 'Abaixo do Peso', icon: faAngleDoubleDown },
            { max: 24.9, classificacao: 'Peso Normal', icon: faArrowDown },
            { max: 29.9, classificacao: 'Sobrepeso', icon: faArrowUp },
            { max: 39.9, classificacao: 'Obesidade Grau I', icon: faArrowUp },
            { max: 43, classificacao: 'Obesidade Grau II', icon: faAngleDoubleUp },
            { max: Number.POSITIVE_INFINITY, classificacao: 'Obesidade Grau III', icon: faExclamationTriangle },
        ];

        classificacaoIcon = classificacoesAdulto.find(item => imc <= item.max)?.icon;
        classificacao = classificacoesAdulto.find(item => imc <= item.max)?.classificacao;
    }
    return (
        <div className={styles['profile-container']}>
            <h2 className={`${styles['profile-heading']} ${getClassificationColorClass(classificacao)}`}>

                <FontAwesomeIcon
                    icon={genderIcon}
                />
                Perfil
                <FontAwesomeIcon
                    icon={ageGroupIcon}
                />
            </h2>
            <div className={styles['profile-columns']}>
                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>Altura:</p>
                    <p className={styles['profile-detail-value']}>
                        <div className={styles['info-icon-container']}>
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                className={styles['info-icon']}
                                data-tip="Altura em centímetros."
                                onClick={toggleTooltipAltura}
                            />
                            {altura} cm
                        </div>

                    </p>
                    {tooltipAlturaVisible && (
                        <div className={styles['tooltip']}>
                            Medida a partir da sola dos pés até o topo da cabeça, em centímetros.
                        </div>
                    )}
                </div>
                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>Peso:</p>
                    <p className={styles['profile-detail-value']}>

                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className={styles['info-icon']}
                            data-tip="Peso em quilogramas."
                            onClick={toggleTooltipPeso}
                        />
                        {peso} kg
                    </p>
                    {tooltipPesoVisible && (
                        <div className={styles['tooltip']}>
                            Medida da força de atração gravitacional.
                        </div>
                    )}
                </div>
                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>Sexo:</p>
                    <p className={styles['profile-detail-value']}>

                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className={styles['info-icon']}
                            data-tip="Sexo do usuário."
                            onClick={toggleTooltipSexo}
                        />

                        {sexo === 'masculino' ? 'Masculino' : 'Feminino'}
                        <FontAwesomeIcon
                            icon={genderIcon}
                            className={styles['sexo-idade-icon']}
                            data-tip={`Gênero ${sexo === 'masculino' ? 'Masculino' : 'Feminino'}`}
                        />
                    </p>
                    {tooltipSexoVisible && (
                        <div className={styles['tooltip']}>
                            Sexo do usuário
                        </div>
                    )}
                </div>
                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>Idade:</p>
                    <p className={styles['profile-detail-value']}>

                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className={styles['info-icon']}
                            data-tip="Idade em anos."
                            onClick={toggleTooltipIdade}
                        />
                        {idade} anos
                        <FontAwesomeIcon
                            icon={ageGroupIcon}
                            className={styles['sexo-idade-icon']}
                        />
                    </p>
                    {tooltipIdadeVisible && (
                        <div className={styles['tooltip']}>
                            {idadeTextos[idade] || 'Informações sobre esta idade não disponíveis.'}
                        </div>
                    )}
                </div>
                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>IMC:</p>
                    <p className={`${styles['profile-detail-value']} ${getClassificationColorClass(classificacao)}`}>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className={styles['info-icon']}
                            data-tip="Índice de Massa Corporal calculado."
                            onClick={toggleTooltipIMC}
                        />
                        {imc.toFixed(2)}
                    </p>
                    {tooltipIMCVisible && (
                        <div className={styles['tooltip']}>
                            Medida avalia se uma pessoa tem um peso corporal saudável em relação à sua altura.
                        </div>
                    )}
                </div>

                <div className={styles['profile-detail']}>
                    <p className={styles['profile-detail-label']}>Classificação:</p>
                    <FontAwesomeIcon
                        icon={classificacaoIcon}
                        className={`${styles['classificacao-icon']} ${getClassificationColorClass(classificacao)}`}
                        data-tip={`Classificação: ${classificacao}`}
                        onClick={toggleTooltipClassificacao}
                    />
                    <p className={`${styles['classificacao-text']} ${getClassificationColorClass(classificacao)}`}>
                        {classificacao}
                    </p>
                    {tooltipClassificacaoVisible && (
                        <div className={styles['tooltip']}>
                            {classificacaoTextos[classificacao]}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


Perfil.propTypes = {
    altura: PropTypes.number.isRequired,
    peso: PropTypes.number.isRequired,
    imc: PropTypes.number.isRequired,
    idade: PropTypes.number.isRequired,
    sexo: PropTypes.string.isRequired,
};
export default Perfil;





