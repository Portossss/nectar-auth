import styled from 'styled-components/native';

type BackgroundType = {
    color: string
    flex: number
    width: string
    height: string
    border: boolean
}

export const Background = styled.View<BackgroundType>`
    background-color: ${props => props.color};
    flex: ${props => props.flex};
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};
    border-radius: ${props => props.border ? "18px" : "0"};
    border: ${props => props.border ? "1px solid #E2E2E2" : "0px solid #E2E2E2"};
`