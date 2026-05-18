//home小笔记本
import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
    Login:false
});
//代码优化
export default (state = defaultState, action)=>{
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        default:
            return state;
    }
}
