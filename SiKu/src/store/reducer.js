//各个文件夹中的reducer小笔记本 组合过来 组合成大笔记本
import { combineReducers } from 'redux-immutable';

import { reducer as homeReducer}   from '../components/pages/Home/store';
import { reducer as loginReducer} from '../components/pages/Login/store'

const reducer = combineReducers({

    home:homeReducer,
    // detail:detailReducer,
    login:loginReducer
});
export default reducer;
