import React, {Fragment} from 'react';
import {HomeWrapper,Hot,NavImg,Column,Banner,Menu,News,SubNav,Footer,CopyRight,Sidebar} from '../style/home.js';
import Header from '../../common/Header/Header';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import {actionCreators }from './store';
class Home extends React.Component{
    render(){
        const {List,First,Second,Third} =this.props;
        return(
            <Fragment>
                <HomeWrapper>
                    <Header/>
                    <Hot>
                        <NavImg className={'left'}>
                            <div className={'bg-mask'}></div>
                            <img src="https://pic11.secooimg.com/push/2019/0617/b2ad8797be5f4a76a8e7bc0e7327530b.jpg" alt="" />
                            <img className={'icu'} src="https://pic11.secooimg.com/push/18/11/34f9f24874af4ae6a6a5d8f0aa253ddf.png" alt="" />
                        </NavImg>
                        <NavImg className={'center'}>

                            <img className={'pic-a'} src="https://pic12.secooimg.com/push/18/11/ad48819e0e524d72a31dfb902561f744.jpg" alt="" />
                            <div className={'bg-mask'}></div>
                            <img className={'pic-b'} src="https://pic13.secooimg.com/push/18/11/5e08f1525e484e95824002ae33cb6322.png" alt="" />
                        </NavImg>
                        <NavImg className={'right'}>
                            <div className={'bg-mask'}></div>
                            <img src="https://pic13.secooimg.com/push/18/11/ab8194828ffc4a5a91202b5ac17c241d.jpg" alt="" />
                            <Player src="https://pic13.secooimg.com/video/productvideo/secoo1111.mp4"/>
                        </NavImg>
                    </Hot>
                    <Column>
                        <Banner>
                            <div>
                                <div className={'mouse'}></div>
                            </div>
                            <h3>.</h3>
                        </Banner>
                        <Menu>
                            <ul className={'product-list'}>
                                {
                                    List.map((item,index)=>{
                                        return(
                                        <li key={item.get('id')}>
                                            <a href={item.get('link')}>
                                                <div className={'product-img'}>
                                                    <img src={item.get('imgUrl')} alt=""/>
                                                </div>
                                                <div className={'product-details'}>
                                                    <p className={'name'}>{item.get('product-name')}</p>
                                                    <p className={'desc'}>{item.get('product-desc')}</p>
                                                    <p className={'price'}>{item.get('product-price')}</p>
                                                </div>
                                            </a>
                                        </li>
                                        )
                                    })
                                }

                            </ul>
                        </Menu>
                        <div>
                            <img className={'said'} src="http://mpic.secooimg.com/images/2018/11/07/bottom-line.png" alt=""/>
                            <img src="http://mpic.secooimg.com/images/2018/11/07/editor-pick-logo.png" alt=""/>
                        </div>
                    </Column>
                    <News>
                        <div className={'left'}>
                            <div className={'bg-mask'}></div>
                            <img src="https://pic10.secooimg.com/push/18/11/e3e8ba6182a54c92b56c53899b751116.jpg" alt="" />
                        </div>
                        <div className={'center'}>
                            <img src="https://pic12.secooimg.com/push/18/11/8ee9d414c7674563b892271e2eb81951.png" alt="" />
                        </div>
                        <div className={'right'}>
                            <img src="https://pic13.secooimg.com/push/2019/0722/cd2f846655a04cd1ad1341254a916431.jpg" alt="" />
                        </div>

                    </News>
                    <SubNav>
                        <ul className={'native'}>
                            <div className={'bg-mask'}></div>
                            {
                                First.map((item)=>{
                                    return(
                                        <li key={item.get('id')}>
                                            <a href={item.get('link')}>
                                            <div className={'bg-mask'}></div>
                                            <img src={item.get('imgUrl')} alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </SubNav>
                    <Footer>
                        <div className={'foot'}>
                            <img src="https://mpic.secooimg.com/images/2018/11/07/the-world-of-secoo-title.png" alt=""/>
                        </div>
                        <ul className={'foots'}>
                            {
                                Second.map((item)=>{
                                    return(
                                        <li key={item.get('id')}>
                                            <a href={item.get('link')}>
                                            <div className={'bg-mask'}></div>
                                            <img src={item.get('imgUrl')} alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Footer>
                    <CopyRight>
                        <div className={'test'}>
                            <div className={'left'}>
                                <h4>服务指南</h4>
                                <ul>
                                    <li><a href="http://ir.secoo.com">Investors</a></li>
                                    <li><a href="http://www.secoo.com/static/help/3_1.shtml">物流配送</a></li>
                                    <li><a href="http://www.secoo.com/static/help/4_1.shtml">售后服务</a></li>
                                    <li><a href="http://www.secoo.com/static/help/11_2.shtml">联系我们</a></li>
                                    <li><a href="http://www.secoo.com/static/help/10_7.shtml">加入我们</a></li>
                                    <li><a href="http://www.secoo.com/static/help/1_1.shtml">帮助</a></li>
                                    <li><a href="http://www.secoo.com/shopindex.shtml">寺库招商</a></li>
                                </ul>
                            </div>
                            <div className={'center'}>
                                <h4>公共媒体</h4>
                                <img src="http://mpic.secooimg.com/images/2018/11/07/footer-logo.png" alt=""/>
                                <span className={'left'}>微博</span><span className={'right'}>微信</span>
                            </div>
                            <div className={'right'}>
                                <h4>我们的APP</h4>
                                <ul>
                                    <div className={'bg-mask'}></div>
                                    <li>
                                        <img src="http://pic11.secooimg.com/push/18/11/7f2ea806edad4471806dd1be4a2ed4dc.png" alt=""/>
                                        寺库商城
                                    </li>
                                    <li>
                                        Try Try
                                        <img src="http://pic13.secooimg.com/push/18/11/5a66b41778324e60bad93c9b01e61f01.png" alt=""/>
                                    </li>
                                    <li>
                                        寺库艺术
                                        <img src="http://pic11.secooimg.com/push/18/11/8876d60e3f624569b6515616da230479.png" alt=""/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={'footer-info'}>
                            <p>
                                <span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102001392">京公网安备 11010502038706号</a></span>
                                <span>京ICP证110119号 京ICP备09084709号-3</span>
                                <span><a href="http://www.secoo.com/listTop/180712_zlgl.shtml">ISO9001中国质量管理体系认证</a></span>
                                <span><a href="http://www.secoo.com/listTop/180712_publication.shtml">出版物经营许可证</a></span>
                                <span><a href="http://www.secoo.com/listTop/180712_foodBlicense.shtml">食品经营许可证</a></span>
                                <span>京B2-20181305</span>
                            </p>
                            <p>
                                <span>京食药网食备201810026</span>
                                <span>客服电话：400-875-6789</span>
                                <span>COPYRIGHT © 2010-2018 北京寺库商贸有限公司 版权所有</span>
                            </p>
                            <p className={'footer-info-imgs'}>
                                {
                                    Third.map((item)=>{
                                        return(
                                            <li key={item.get('id')}>
                                                <a href={item.get('link')}>
                                                    <img src={item.get('imgUrl')} alt=""/>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <div className={'friend'}>
                                <h4>
                                    <img src="http://pic12.secooimg.com/res/common/pc/gh.png" alt=""/>
                                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038706">京公网安备 11010502038706号</a>
                                </h4>
                        </div>
                    </CopyRight>
                    <Sidebar>
                        <img src="http://pic11.secooimg.com/push/2019/1022/8a7e0f58c4d74a44b1723e97b94d1018.jpg" alt=""/>
                    </Sidebar>
                </HomeWrapper>
            </Fragment>
        );
    };
componentDidMount(){
    this.props.changeHomeData();
}
}
const mapState =(state)=>({
    List:state.getIn(['home','PicList']),
    First:state.getIn(['home','NavList']),
    Second:state.getIn(['home','SubList']),
    Third:state.getIn(['home','SpaList']),
})

const mapDispatch =(dispatch)=>({
    changeHomeData(){
    const action=actionCreators.getHomeList();
    dispatch(action)
    }
})
export default connect(mapState,mapDispatch)(Home);