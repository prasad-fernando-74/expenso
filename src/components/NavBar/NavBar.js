import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { colors, metrics } from '../../theme';

class NavBar extends Component {

    render() {
        return (
            <View style={styles.topContainer}>
                <View style={styles.bottomContainer}>
                    <Icon name="md-menu" size={metrics.sizeIcon} color={colors.white} />
                    <Text style={styles.headerText}>{this.props.title}</Text>
                    <Icon name="md-search" size={metrics.sizeIcon} color={colors.white} />
                </View>
            </View>
        );
    }
}

export default NavBar;
