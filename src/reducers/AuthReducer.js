import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_FAIL,
    SIGN_IN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };    
        case SIGN_IN_USER:
            return { ...state, loading: true, error: '' };
        case SIGN_IN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGN_IN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false };
        default:
            return state;
    }
};
