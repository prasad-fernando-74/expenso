import { colors, fonts } from '../../theme';

const styles = {
    topContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: colors.white, 
        borderBottomColor: colors.borderGray, 
        borderBottomWidth: 1 
    },
    leftContainer: { 
        width: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 14 
    },
    rightContainer: {
        flex: 1, 
        padding: 16, 
        justifyContent: 'center'
    },
    image: { 
        backgroundColor: colors.bluePurple, 
        height: 40, 
        width: 40, 
        borderRadius: 40, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    imageText: { 
        ...fonts.h1,
        color: colors.white,
        opacity: 0.8
    },
    rowOneContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start'
    },
    rowTwoContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
    },
    rowThreeContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        paddingTop: 8
    },
    merchant: {
       ...fonts.h4
    },
    date: {
        ...fonts.h7, 
        color: '#3b60c4'
    },
    time: {
        ...fonts.h7,
        color: '#3b60c4'
    },
    invoice: {
        ...fonts.h6,
    },
    totalCost: {
        ...fonts.h4,
        color: colors.orangeRed
    }
};

export default styles;
