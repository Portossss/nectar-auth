import styled from 'styled-components/native';

type FlexBoxType = {
    flex?: number
    height?: string | number
    width?: string | number
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
}

export const FlexBox = styled.View<FlexBoxType>`
    flex: ${props => props.flex || 0};
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "column"};
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
`