import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Background, FlexBox, Box, MainIcon, NectarIcon, Text } from '../components';

const Box1 = styled(FlexBox)`
    background-color: red;
`

const Box2 = styled(FlexBox)`
    background-color: blue;
`

const Box3 = styled(FlexBox)`
    background-color: green;
`

export const OnboardingScreen = () => {
    return (
        <Background flex={1} color={"white"}>
            <Box1 flex={1}></Box1>
            <Box2 flex={2}></Box2>
            <Box width={"200px"} height={"50px"}></Box>
            <Box3 flex={3} flexDirection={"row"}>
                <Box1 flex={3}></Box1>
                <Box2 flex={2}></Box2>
            </Box3>
        </Background>
    );
};
