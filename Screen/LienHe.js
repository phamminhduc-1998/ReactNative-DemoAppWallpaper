import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function LienHe() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/MinhDuc.jpg')} style={{ width: 360, height: 500 }} />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0000ff', marginRight: 10, borderRadius: 10, height: 50, width: 50, }}>
                    <Feather name='facebook' size={30} color='#fff' />
                </View>
                <Text style={{ margin: 5, fontSize: 15, color: '#ff3366' }}>https://www.facebook.com/Minhduc.Navy/</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0000ff', marginRight: 10, borderRadius: 10, height: 50, width: 50, }}>
                    <Feather name='smartphone' size={30} color='#fff' />
                </View>
                <Text style={{ margin: 5, fontSize: 18, color: '#ff3366' }}>0367839465</Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },
});