import styled from 'styled-components/native';

const MappingToFontSize = {
    small: '12px',
    medium: '20px',
    large: '50px'
}

export const Title = styled.Text`
    color: ${props => props.primary ? "#FFFFFF" : "#d290a6"};
    font-size: ${props => props.size ? MappingToFontSize[props.size] : "12px" };
    letter-spacing: 1px;
    text-align: center;
`