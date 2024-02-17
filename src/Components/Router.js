import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from 'react';

import TrangChu from './Home';
import Notification from  './Notification'
import HoSo from './profile/CaNhan'
import HoSoGiaDinh from './profile/GiaDinh'
import HoSoKetQua from './profile/KetQua'

import DangKyHoc from './dangkyhoc/Home'
import DangKyHocDangKy from './dangkyhoc/DangKyHoc'
import DangKyHocLoc from './dangkyhoc/Loc'
import DangKyHocSoDuHienTai from './dangkyhoc/SoDuHienTai'
import DangKyHocSoDuPhatSinh from './dangkyhoc/SoDuPhatSinhThemTrongDot'
import DangKyHocTongLopDaDangKy from './dangkyhoc/TongLopDaDangKy'
import DangKyHocChonMon from './dangkyhoc/ChonMon'
import DangKyHocChonThem from './dangkyhoc/ChonThem'
import DangKyHocChiTiet from './dangkyhoc/ChiTietMon'

import TaiChinh from './taichinh/TaiChinh'
import TaiChinhDaNop from './taichinh/KhoanDaNop'
import TaiChinhPhaiNop from './taichinh/KhoanPhaiNop'
import TaiChinhChiTiet from './taichinh/ChiTiet'

import ChuongTrinhHoc from './chuongtrinhhoc/Home'
import ChuongTrinhHocHocPhan from './chuongtrinhhoc/ChuongTrinhHoc'
import ChuongTrinhHocKhoiLuaChonDon from './chuongtrinhhoc/KhoiLuaChonDon'
import ChuongTrinhHocKhoiLuaChonBatBuoc from './chuongtrinhhoc/KhoiLuaChonBatBuoc'
import ChuongTrinhHocChiTiet from './chuongtrinhhoc/ChiTiet'

import ThoiKhoaBieu from './lichbieucanhan/LichBieuCaNhan'

import MotCua from './motcua/Intro'
import MotCuaDichVu from './motcua/DichVu'
import MotCuaXemPhieu from './motcua/XemPhieu'
import MotCuaChoXacNhan from './motcua/ChoXacNhan'
import MotCuaChoXacNhanSua from './motcua/ChoXacNhanSua'

import TinTuc from './tintuc/Home'
import TinTucChiTiet from './tintuc/ChiTiet'
import TinTucBinhLuan from './tintuc/BinhLuan'

import Chat from './Chat/Home'
import ChatNoiDung from './Chat/Chat'

import TraCuuDiem from './gochoctap/TraCuuDiem'
import BangDiem from './gochoctap/BangDiem'
import KhoiKienThuc from './gochoctap/KhoiKienThuc'

import LichThi from './lichthi/LichThi'

const Stack = createStackNavigator();

  
export default function Router(){
    
        return(
            <Stack.Navigator>

                <Stack.Screen
                    name="TrangChu"
                    component={TrangChu}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="HoSo"
                    component={HoSo}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="HoSoKetQua"
                    component={HoSoKetQua}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="HoSoGiaDinh"
                    component={HoSoGiaDinh}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHoc"
                    component={DangKyHoc}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocDangKy"
                    component={DangKyHocDangKy}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocLoc"
                    component={DangKyHocLoc}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocSoDuHienTai"
                    component={DangKyHocSoDuHienTai}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocSoDuPhatSinh"
                    component={DangKyHocSoDuPhatSinh}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocTongLopDaDangKy"
                    component={DangKyHocTongLopDaDangKy}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocChonMon"
                    component={DangKyHocChonMon}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocChonThem"
                    component={DangKyHocChonThem}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="DangKyHocChiTiet"
                    component={DangKyHocChiTiet}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="TaiChinh"
                    component={TaiChinh}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="TaiChinhDaNop"
                    component={TaiChinhDaNop}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="TaiChinhPhaiNop"
                    component={TaiChinhPhaiNop}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="TaiChinhChiTiet"
                    component={TaiChinhChiTiet}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChuongTrinhHoc"
                    component={ChuongTrinhHoc}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChuongTrinhHocHocPhan"
                    component={ChuongTrinhHocHocPhan}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChuongTrinhHocKhoiLuaChonDon"
                    component={ChuongTrinhHocKhoiLuaChonDon}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChuongTrinhHocKhoiLuaChonBatBuoc"
                    component={ChuongTrinhHocKhoiLuaChonBatBuoc}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChuongTrinhHocChiTiet"
                    component={ChuongTrinhHocChiTiet}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ThoiKhoaBieu"
                    component={ThoiKhoaBieu}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="MotCua"
                    component={MotCua}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="MotCuaDichVu"
                    component={MotCuaDichVu}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="MotCuaXemPhieu"
                    component={MotCuaXemPhieu}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="MotCuaChoXacNhan"
                    component={MotCuaChoXacNhan}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="MotCuaChoXacNhanSua"
                    component={MotCuaChoXacNhanSua}
                    options={{
                            headerShown: false
                        }}
                />
                
                <Stack.Screen
                    name="TinTuc"
                    component={TinTuc}
                    options={{
                            headerShown: false
                        }}
                />
                
                <Stack.Screen
                    name="TinTucChiTiet"
                    component={TinTucChiTiet}
                    options={{
                            headerShown: false
                        }}
                />
                
                <Stack.Screen
                    name="TinTucBinhLuan"
                    component={TinTucBinhLuan}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="ChatNoiDung"
                    component={ChatNoiDung}
                    options={{
                            headerShown: false
                        }}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                            headerShown: false
                        }}
                />

                <Stack.Screen
                    name="TraCuuDiem"
                    component={TraCuuDiem}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="BangDiem"
                    component={BangDiem}
                    options={{
                            headerShown: false
                        }}
                />
                <Stack.Screen
                    name="KhoiKienThuc"
                    component={KhoiKienThuc}
                    options={{
                            headerShown: false
                        }}
                />

                
                <Stack.Screen
                    name="LichThi"
                    component={LichThi}
                    options={{
                            headerShown: false
                        }}
                />

            </Stack.Navigator>
        )
    
}