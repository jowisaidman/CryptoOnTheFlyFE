import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

export default function Loading({text}) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        marginTop: 20,
        color: '#1A1733',
        fontSize: 18,
    }
})