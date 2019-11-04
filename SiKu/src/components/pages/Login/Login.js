import React,{Component,Fragment} from 'react';

import {connect} from 'react-redux';
import {LoginWrapper,Header,Nav,Input,Button} from '../style/login';

import { actionCreators } from './store';

class Detail extends Component {
    render(){
        return(
            <Fragment>
                <LoginWrapper>
                    <Header>

                    </Header>
                    <Nav>
                        <div className={'login'}>
                            <div>扫码登陆</div>
                            <div>密码登录</div>
                            <Input placeholder={'用户名/手机/邮箱'} ref={(input)=>{this.account=input}}/>
                            <Input  placeholder={'密码'} type='password'ref={(input)=>{this.password=input}}/>
                            <Button onClick={()=>this.props.Login(this.account,this.password)}>立即登录</Button>
                        </div>
                    </Nav>
                </LoginWrapper>
            </Fragment>
        )
    }
}
const MapState=(state)=>({
    Login:state.getIn(['login','Login'])
})
const MapDispatch=(dispatch)=>({
    Login(accountElem,passwordElem){
        dispatch(actionCreators.Login(accountElem.value,passwordElem.value))
    }
});
export default connect(MapState,MapDispatch) (Detail);