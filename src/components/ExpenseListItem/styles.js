import { colors } from '../../theme';

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
        color: 'rgba(255,255,255,.5)', 
        fontSize: 24, 
        fontWeight: '700' 
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
        fontSize: 18, 
        color: 'black', 
        fontWeight: '700'
    },
    date: {
        fontSize: 12, 
        color: '#3b60c4'
    },
    time: {
        fontSize: 12, 
        color: '#3b60c4'
    },
    invoice: {
        fontWeight: '700'
    },
    totalCost: {
        fontWeight: '700',
        color: '#f46161',
    }
};

export default styles;
