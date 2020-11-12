import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'

export default function DanhSachAnh({ navigation }) {
    const url3 = 'https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=6749460ac4726a20f0b3bb1ca9de91ac&user_id=190435896%40N05&extras=views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=50&page=1&format=json&nojsoncallback=1';
    const [data, setData] = useState();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(url3)
            //chuyen du liệu về dang json
            .then((response) => response.json())
            //được gọi khi ket thúc request dữ liệu
            .then((responseJson) => {
                const albumId1 = responseJson.photos.photo[0].id;
                const link = responseJson.photos.photo[0].url_sq;
                setData(link);
                setArr(responseJson.photos.photo)
            })
            //gọi dữ liệu khi xảy ra lỗi
            .catch((error) => {
                console.error(error);

            })
    })

    return (
        <View style={styles.container}>



            <FlatList
                data={arr}
                //giao diện 1 mảng
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { navigation.navigate('ChiTietAnh', { urlpt: `http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`, title: item.title }) }}>
                        <View style={{ margin: 1, borderRadius: 50 }}>

                            <ImageBackground
                                imageStyle={{ borderRadius: 20, }}
                                style={{
                                    resizeMode: "cover",
                                    justifyContent: "flex-end",
                                    width: 200,
                                    height: 250,
                                    padding: 10,
                                    borderRadius: 30,
                                    marginVertical: 5,
                                }}
                                source={{ uri: `http://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg` }}

                            >
                                <Text style={{ color: "black" }}>Lượt xem: {item.views}</Text>
                            </ImageBackground>

                        </View>

                    </TouchableOpacity>


                )}
                // giá trị trên mảng để phân biệt các hàng
                keyExtractor={item => item.id}
                numColumns={2}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('ThongTin') }}>
                    <View style={{ flexDirection: 'row', marginRight: 100, margin: 10 }}>
                        <Feather name='info' size={30} color='#121212' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('LienHe') }}>
                    <View style={{ flexDirection: 'row', marginLeft: 100, margin: 10 }}>
                        <Feather name='phone' size={30} color='#121212' />
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});