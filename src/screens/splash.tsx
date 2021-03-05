import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Background, FlexBox, Box, MainIcon, NectarIcon, Text } from '../components';

const Gap = styled.View`
    margin-left: 10px;
`

export const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Onboarding");
        }, 2000)
    }, [])

    return (
        <Background flex={1} color={"#53B175"}>
            <StatusBar barStyle={"light-content"} />
            <FlexBox flex={1} justifyContent={"center"} alignItems={"center"}>
                <Box flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} width={"300px"} height={"70px"}>
                    <MainIcon height={63} width={54} />
                    <Gap />
                    <FlexBox flex={1} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
                        <NectarIcon height={50} width={200} />
                        <Text color={"white"} size={"medium"} letterSpacing={"5.5px"} >online groceriet</Text>
                    </FlexBox>
                </Box>
            </FlexBox>
        </Background>
    );
};
