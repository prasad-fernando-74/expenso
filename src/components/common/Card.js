import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1, // width of the border
        borderRadius: 2, // rounded border
        borderColor: '#ddd',
        borderBottomWidth: 0, // hide the border on the bottom
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // side of the shadow, no shadow on left and right
        shadowOpacity: 0.1, // give darkness, see-thru, lightnes a dark color
        shadowRadius: 2, // like border radius, rounde the borders of the shadow
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
