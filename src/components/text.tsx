import styled from 'styled-components/native';

type TextProps = {
    color: string
    size: 'small' | 'medium' | 'large'
    weight: 'strong' | 'bold' | 'normal'
    align: 'center' | 'left' | 'right'
    letterSpacing: string
}

const MappingToFontWeight = {
    strong: '900',
    bold: '700',
    normal: '400',
}

const MappingToFontSize = {
    small: '12px',
    medium: '16px',
    large: '30px'
}

export const Text = styled.Text<TextProps>`
    color: ${props => props.color};
    font-size: ${props => props.size ? MappingToFontSize[props.size] : "12px"};
    font-weight: ${props => props.weight ? MappingToFontWeight[props.weight] : "400"};
    letter-spacing: 1px;
    text-align: ${props => props.align ? props.align : "left"};
    letter-spacing: ${props => props.letterSpacing || "0.1px"};
`