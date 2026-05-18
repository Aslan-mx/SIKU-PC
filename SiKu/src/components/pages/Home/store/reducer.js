//home小笔记本
import { fromJS } from 'immutable';
import * as constants from './constants';

const  defaultState = fromJS ({
    PicList: [],
    NavList:[],
    SubList:[],
    SpaList:[]
});
//代码优化
export default (state = defaultState, action)=>{
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                PicList:fromJS(action.PicList),
                NavList:fromJS(action.NavList),
                SubList:fromJS(action.SubList),
                SpaList:fromJS(action.SpaList),
            })

        default:
            return state;
    }
}
