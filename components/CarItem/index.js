import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton/index';

const CarItem = (props) => {

    const {model, tagline, taglineCTA, image} = props

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{model}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                    type='primary'
                    content={'Custom Order'} 
                    onPress={() => {
                        console.warn('Custom Order was pressed')
                    }}
                />
                <StyledButton 
                    type='secondary'
                    content={'Existing Inventory'} 
                    onPress={() => {
                        console.warn('Existing Inventory was pressed')
                    }}
                />
            </View>
        </View>
    );
}
 
export default CarItem;