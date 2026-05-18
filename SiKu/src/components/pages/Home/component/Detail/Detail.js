import React,{Component,Fragment} from 'react';
import Header from '../../../../common/Header/Header';
import {connect} from 'react-redux';
import {DetailWrapper} from '../../../style/detail';

class Detail extends Component {
    render(){
        return(
            <Fragment>
                <Header/>
                <DetailWrapper>

                </DetailWrapper>
            </Fragment>
        )
    }
}
const MapState =(state)=>({

})
const MapDispatch=(dispatch)=>({

})
export default connect(MapState,MapDispatch) (Detail);