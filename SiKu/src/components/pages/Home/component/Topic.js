import React,{Component,Fragment}from 'react';
import { connect } from 'react-redux';
import {TopicWrapper,Header} from '../../style/topic';
class Topic extends Component {
    render(){
        const {List} =this.props;
        return(
            <Fragment>
                <TopicWrapper>
                <Header>

                </Header>
                </TopicWrapper>
            </Fragment>
        )
    }
}
const mapState =(state)=>({

    List:state.getIn(['home','PicList'])
})
export default connect(mapState,null)(Topic);