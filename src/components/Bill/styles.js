import { metrics } from '../../theme';

const styles = {
    topContainer: { 
        flex: 1,
        flexDirection: 'column'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 4,
        padding: 5
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: metrics.screenWidth - 10
    },
    image: {
        borderRadius: 40
    },
};

export default styles;
