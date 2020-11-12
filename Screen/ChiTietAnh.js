import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

export default function ChiTietAnh({ navigation, route }) {
    const { urlpt, title } = route.params;
    const [p, setP] = useState(0);

    useEffect(
        () => {
            Image.getSize(urlpt, (width, height) => {
                setP(height / width);
            }
            )
        }
    )


    let download = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            const fileuri = FileSystem.documentDirectory + "aaa.jpg"
            FileSystem.downloadAsync(urlpt, fileuri).then(({ uri }) => {
                MediaLibrary.createAssetAsync(fileuri);
            })
        }
    }


    return (
        <View style={styles.container}>
            <Text>{urlpt}</Text>
            <Text>{title}</Text>
            <Image
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height * p, flex: 1 }}
                source={{ uri: urlpt }}>

            </Image>

            <Text style={{ color: "black", fontSize: 80, marginLeft: 330, marginTop: 10, backgroundColor: '#519D9E', borderRadius: 45 }}
                onPress={() => {
                    download();
                    // const uri = urlpt;

                    // let fileUri = FileSystem.documentDirectory + title + ".jpg";
                    // FileSystem.downloadAsync(uri, fileUri)
                    //     .then(({ uri }) => {
                    //         saveFile(uri);
                    //         Alert.alert("TẢI ẢNH", "Bạn có muốn tải ảnh")
                    //     })
                    //     .catch(error => {
                    //         console.error(error);
                    //     })

                }}
            >+</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const saveFile = async (fileUri) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
        await MediaLibrary.createAssetAsync(fileUri)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});