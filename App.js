import React, {useEffect} from 'react'
import ViewTest from './src/Components/Navigation'
import {View} from 'react-native';

export default function App(){
    useEffect(()=>{
        console.log(1111);
    }, [])


    return(
        <ViewTest/>
    )
}