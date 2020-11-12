import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function ThongTin() {
    return (
        <View style={styles.container}>
            <Image style={{ width: 400, height: 400 }} source={require('../assets/LogoReactNative.png')} />
            <Text style={{ fontSize: 30, color: '#282c37', marginBottom: 10 }}>Admin : Phạm Minh Đức</Text>
            <Text style={{ fontSize: 20, color: '#282c37', marginBottom: 10 }}>MSSV: PH09506</Text>
            <View style={{ flexDirection: 'row' }}>
                <Feather name='disc' size={30} color='#f9c00c' />
                <Text style={{ margin: 5, fontSize: 18, color: '#282c37' }}>App Wallpaper </Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#548687',
        alignItems: 'center',
        justifyContent: 'center',
    },
});