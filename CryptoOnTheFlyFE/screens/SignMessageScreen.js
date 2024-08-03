import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SignMessageButton from '../components/SignMessageButton';
import Loading from '../components/Loader';

const SignMessageScreen = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return <Loading text="Signing message ..."/>
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sign message: {route.params.messageInfo}</Text>
                <SignMessageButton message={route.params.messageInfo} navigation={navigation} setIsLoading={setIsLoading}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SignMessageScreen;