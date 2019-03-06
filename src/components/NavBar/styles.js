import { colors, fonts, metrics } from '../../theme';

const styles = {
    topContainer: { 
        height: metrics.headerHeight, 
        backgroundColor: colors.red, 
        paddingTop: 37 
    },
    bottomContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        padding: 16 
    },
    headerText: { 
        ...fonts.h4,
        color: colors.white,
        paddingTop: 1
    }
};

export default styles;
