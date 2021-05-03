import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import styles from './styles'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69, 428</Text>
            </View>
            <StatusBar style='auto'/>
        </View>
    );
}
 
export default CarItem;