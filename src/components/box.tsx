import styled from 'styled-components/native';

type BoxType = {
    height?: string
    width?: string
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
}

export const Box = styled.View<BoxType>`
    height: ${props => props.height || "100%"};
    width: ${props => props.width || "100%"};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : "column"};
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
`