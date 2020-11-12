
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListPhoto from './Screen/DanhSachAnh';
import DetailPhoto from './Screen/ChiTietAnh'
import Info from './Screen/ThongTin';
import Contact from './Screen/LienHe';

{/*
Installation
expo install expo-media-library  cung cấp quyền truy cập vào thư viện phương tiện của người dùng
expo install expo-permissions    xin phép người dùng.
expo install expo-file-system    cung cấp quyền truy cập vào hệ thống tệp được lưu trữ cục bộ trên thiết bị.
quản lý, chuyển màn hình
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/}

export const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Danh sách ảnh' }} name='DanhSachAnh' component={ListPhoto} />
        <Stack.Screen options={{ title: 'Chi tiết ảnh' }} name='ChiTietAnh' component={DetailPhoto} />
        <Stack.Screen options={{ title: 'Thông tin' }} name='ThongTin' component={Info} />
        <Stack.Screen options={{ title: 'Liên hệ' }} name='LienHe' component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
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