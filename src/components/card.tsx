import React from 'react';
import { View } from 'react-native';
import { Padding, Flex, Image, Text, Background, Button } from '../components';

export const Card: React.FC<any> = ({ title, description }) => {

    return (
        <Background width={"173.32px"} height={"248.51px"} primary border>
            <Padding size={15}>
                <View style={{height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image source={require('../assets/sprite.png')} resizeMode='contain'></Image>
                    <View style={{height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text size={"medium"} weight={"bold"}>{title}</Text>
                        <Text size={"medium"} weight={"normal"}>{description}</Text>
                    </View>
                    {/* <Text size={"medium"} weight={"normal"}>{}</Text> */}
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text size={"medium"} weight={"bold"}>$1.99</Text>
                        <Button>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text size={"large"} weight={"bold"} primary>+</Text>
                            </View>
                        </Button>
                    </View>
                </View>
            </Padding>
        </Background>
    )
}