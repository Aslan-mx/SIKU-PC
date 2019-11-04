import axios from "axios";
import * as constants from './constants';
//
// export const getMoreList =(page)=>{
//     return(dispatch)=>{
//         axios.get('/api/HomeList.json').then((res)=>{
//             console.log(res);
//         }).catch(()=>{
//             console.log(error);
//         });
//     }
// }
const changeHomeData =(result)=>({
    type:constants.CHANGE_HOME_DATA,
    PicList: result.PicList,
    NavList: result.NavList,
    SubList: result.SubList,
    SpaList: result.SpaList,
})

export const getHomeList=() =>{
    return(dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            // const action = {
            //     type:'change_home_data',
            //     PicList: result.PicList,
            //     NavList: result.NavList,
            //     SubList: result.SubList,
            //     SpaList: result.SpaList,
            // }
            dispatch(action);
        }).catch(()=>{
        });
    }
}

//     axios.get('/api/home.json').then((res)=>{
//     const result = res.data.data;
//     const action = {
//         type:'change_home_data',
//         PicList: result.PicList,
//         NavList: result.NavList,
//         SubList: result.SubList,
//         SpaList: result.SpaList,
//     }
//     dispatch(action);
// })