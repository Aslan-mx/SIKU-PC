import axios from 'axios';
import * as constants from './constants.js'
const changeLogin =()=>({
    type:constants.CHANGE_LOGIN,
    value:true
});
export const Login=(account,password)=>{
    return(dispatch)=>{
        axios.get('/api/login.json?account='+ account + '&password='+ password).then((res)=>{
            const result=res.data.data;
            if(result){
               dispatch(changeLogin())
            }else {
                alert('失败')
            }
console.log(res)
        })
    }
}