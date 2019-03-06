import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import styles from './styles';
import { DATE_TIME_FORMATS } from '../../config';
import { randomHex } from '../../services/helpers';

class ExpenseListItem extends Component {

    starPressed() {
        // TO DO
    }

    render() {
        const { merchant, timestamp, invoiceId, totalCost, currency } = this.props.expense.item;

        return (
            <View style={styles.topContainer}>
                <View style={styles.leftContainer} >
                    <View style={{ backgroundColor: randomHex(), height: 40, width: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.imageText}>{merchant.charAt(0).toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <View style={styles.rowOneContainer}>
                        <Text style={styles.merchant}>
                            {merchant}
                        </Text>
                        <Text style={styles.date}>
                            {moment(timestamp).format(DATE_TIME_FORMATS.date)}
                        </Text>
                    </View>

                    <View style={styles.rowTwoContainer}>
                        <Text style={styles.invoice}>
                            INV# {invoiceId}
                        </Text>
                        <Text style={styles.time}>
                            {moment(timestamp).format(DATE_TIME_FORMATS.time)}
                        </Text>
                    </View>

                    <View style={styles.rowThreeContainer}>
                        <Text style={styles.totalCost} ellipsizeMode="tail" numberOfLines={1}>
                            {currency} {totalCost}
                        </Text>
                        <TouchableOpacity onPress={this.starPressed.bind(this)} >
                            <Icon name="star" size={24} color="#D3D3D3" />
                        </TouchableOpacity>
                    </View>
                </View>   
            </View>   
        );
    }
}

export default ExpenseListItem;

