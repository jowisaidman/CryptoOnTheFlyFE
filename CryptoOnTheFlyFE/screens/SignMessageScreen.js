import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignMessageButton from '../components/SignMessageButton';
import Loading from '../components/Loader';
import { getWalletAlias } from '../utils/WalletService';

const SignMessageScreen = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [jsonMessage, setJsonMessage] = useState(null);
    const [containsData, setContainsData] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const [viewMoreButtonTitle, setViewMoreButtonTitle] = useState("Show details")

    useEffect(() => {
        const formattedMessage = JSON.parse(route.params.messageInfo);
        formattedMessage.to = getWalletAlias(formattedMessage.to);
        formattedMessage.data = formattedMessage.data.trim();
        setJsonMessage(formattedMessage);
        setContainsData(formattedMessage.data !== '0x');
    }, []); 

    const handleShowDetailsButton = () => {
        setViewMore(!viewMore);
        viewMore ? setViewMoreButtonTitle("Show details") : setViewMoreButtonTitle("Show less");
    }
    
    if (isLoading) {
        return <Loading text="Signing message ..."/>
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Transacion Information</Text>
                {
                    jsonMessage ? 
                    <View style={styles.infoView}>
                        <Text style={styles.messageInfoText}>Chain: {jsonMessage.chainId}</Text>
                        <Text style={styles.messageInfoText}>to: {jsonMessage.to}</Text>
                        <Text style={styles.messageInfoText}>value: {jsonMessage.value}</Text>
                        {
                            containsData ? <Text style={styles.warningText}>Warning: This transaction contains data</Text>: null
                        }
                        {
                            viewMore ? <Text style={styles.messageInfoText}>Detailed transaction: {route.params.messageInfo}</Text> : null
                        }
                    </View>
                    : null
                }
                <Button
                    title={viewMoreButtonTitle}
                    onPress={() => handleShowDetailsButton()}
                />
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
        backgroundColor: '#1A1733',
    },
    infoView: {
        marginLeft: 30,
        backgroundColor: '#1A1733',
    },
    messageInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FDFEFF',
        marginBottom: '15%',
    },
    warningText: {
        color: '#d4c117',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    }
});

export default SignMessageScreen;