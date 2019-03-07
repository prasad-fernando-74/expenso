import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { images } from '../../theme';

class Bill extends Component {
    render() {
        return (
            <View style={styles.topContainer}>
                <View style={styles.imageContainer} > 
                    <ScrollView contentContainerStyle={styles.contentContainer} >
                        <Image
                            style={styles.image}
                            source={images.billKeelsSuper}
                            resizeMode="contain"
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Bill;
