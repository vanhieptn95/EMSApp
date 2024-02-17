import React, {useEffect} from 'react'
import {View, StyleSheet, Modal, Text, ActivityIndicator} from 'react-native'
export default function ModalLoading(props){
    
    return(
        <Modal animationType='fade'
            transparent={true}
            visible={props.modalVisible}
            statusBarTranslucent={true}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator size='large' color={'red'} />
                    <Text style={styles.modalText}>{props.task?props.task: 'Loading ...'}</Text>
                </View>
            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0008'
    },
    modalView:{
        margin: 20,
        width: 200,
        height:70,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginVertical: 15,
        textAlign: 'center',
        fontSize: 17,
        marginLeft: 15,
        marginTop: 22
    }
})