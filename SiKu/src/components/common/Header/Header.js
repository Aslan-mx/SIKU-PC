import React,{ Component,Fragment} from 'react';
import {HeaderWrapper,Logo,Headers, Nav} from '../style/header';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Header extends Component{
    render(){
        return(
            <Fragment>
                <HeaderWrapper>
                    <Headers>
                        <Logo>
                            <ul className={'left'}>
                                <li className={'nice'}>中文</li>
                                <li className={'nice-it'}><h4>RMB ¥</h4></li>
                            </ul>
                            <div className={'center'}>
                               <img src="http://pic10.secooimg.com/push/18/11/013e7d9eb7674c799c3c21e84dd1c88a.jpg" alt=""/>
                            </div>
                            <ul className={'right'}>
                                {/*{*/}
                                    {/*Login ? <li>退出</li>:*/}
                                        {/*<Link to='/Login'>*/}
                                        {/*<li>登录</li>*/}
                                        {/*</Link>*/}
                                {/*}*/}
                                <li><a href="https://passport.secoo.com/">登录</a></li>
                                <li className={'size'}><a href="https://passport.secoo.com/_register.jsp">注册</a></li>
                                <li>收藏</li>
                            </ul>
                        </Logo>
                    </Headers>
                    <Nav>
                        <ul>
                            <Link to="/"><li>首页</li></Link>
                            {/*<li><a href="//www.secoo.com">首页</a></li>*/}
                            <li>
                                包袋
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://list.secoo.com/bags/30-0-0-0-0-3-0-0-1-10-0-877_0-100-0.shtml#J_FilterPos">男士包袋</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-0-0-3-0-0-1-10-0-877_1-1-0.shtml#pageTitle">女士包袋</a>
                                            <a href="http://list.secoo.com/bags/30-40-0-0-0-3-0-0-1-10-0-0-100-0.shtml#J_FilterPos">钱包</a>
                                            <a href="http://list.secoo.com/bags/30-37-0-0-0-3-0-0-1-10-0-0-1-0.shtml#pageTitle">手拿包</a>
                                            <a href="http://list.secoo.com/bags/30-32-0-0-0-3-0-0-1-10-0-0-100-0.shtml#J_FilterPos">斜挎包</a>
                                            <a href="http://list.secoo.com/bags/30-568-0-0-0-3-0-0-1-10-0-0-100-0.shtml#J_FilterPos">拉杆箱</a>
                                            <a href="http://list.secoo.com/bags/30-339-0-0-0-3-0-0-1-10-0-0-100-0.shtml#J_FilterPos">双肩包</a>
                                            <a href="http://list.secoo.com/bags/30-33-0-0-0-3-0-0-1-10-0-0-100-0.shtml#J_FilterPos">手提包</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2588%25B1%25E9%25A9%25AC%25E4%25BB%2595&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">爱马仕</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25A6%2599%25E5%25A5%2588%25E5%2584%25BF&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">香奈儿</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25BF%25AA%25E5%25A5%25A5&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">迪奥</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25B7%25AF%25E6%2598%2593%25E5%25A8%2581%25E7%2599%25BB&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">路易威登</a>
                                            <a href="http://search.secoo.com/search?keyword=Gucci&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">古驰</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%259C%25A3%25E7%25BD%2597%25E5%2585%25B0&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">圣罗兰</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-76-0-3-0-0-1-10-0-0-100-0.shtml#pageTitle">宝格丽</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-11-0-3-0-0-1-10-0-0-100-0.shtml#pageTitle">蔻驰</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-35-0-3-0-0-1-10-0-0-100-0.shtml#pageTitle">葆蝶家</a>
                                            <a href="http://search.secoo.com/search?keyword=Versace&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">范思哲</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-32-0-3-0-0-1-10-0-0-100-0.shtml#pageTitle">杜嘉班纳</a>
                                            <a href="http://list.secoo.com/bags/30-0-0-33-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">克洛伊</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/170820.shtml">普拉达</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/170953.shtml">缪缪</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E4%25BA%259A%25E5%258E%2586%25E5%25B1%25B1%25E5%25A4%25A7%25E9%25BA%25A6%25E6%2598%2586&firstcategoryid=30&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">亚历山大麦昆</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">腕表</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://list.secoo.com/watches/93-0-0-0-0-1-0-0-1-10-0-908_0.shtml">男士</a>
                                            <a href="http://list.secoo.com/watches/93-0-0-0-0-1-0-0-1-10-0-908_1-100-0.shtml">女士</a>
                                            <a href="http://list.secoo.com/watches/93-0-0-0-0-1-0-0-1-10-0-348_2_348_1-100-0.shtml#pageTitle">机械腕表</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%259F%25B3%25E8%258B%25B1%25E8%25A1%25A8&firstcategoryid=93&secondcategoryid=0&thirdcategoryid=0&brandId=0&level=0&orderType=1&filterType=0&source=&pageNo=1&st=10&price=0&prop=0&warehouse=100&actscr=0&expKey=#pageTitle">石英腕表</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://list.secoo.com/watches/93-120-0-0-0-1-0-0-1-10-0-0-100-0.shtml">百达翡丽</a>
                                            <a href="http://list.secoo.com/watches/93-121-0-0-0-8-0-0-1-10-0-0.shtml">江诗丹顿</a>
                                            <a href="http://list.secoo.com/watches/93-129-0-0-0-8-0-0-1-10-0-0.shtml">宝柏</a>
                                            <a href="http://list.secoo.com/watches/93-131-0-0-0-8-0-0-1-10-0-0.shtml">宝玑</a>
                                            <a href="http://list.secoo.com/watches/93-124-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">朗格</a>
                                            <a href="http://list.secoo.com/watches/93-158-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">积家</a>
                                            <a href="http://list.secoo.com/watches/93-155-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">芝柏</a>
                                            <a href="http://list.secoo.com/watches/93-150-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">萧邦</a>
                                            <a href="http://list.secoo.com/watches/93-119-0-0-0-8-0-0-1-10-0-0.shtml">万国</a>
                                            <a href="http://list.secoo.com/watches/93-146-0-0-0-1-0-0-1-10-0-0-100-0.shtml">沛纳海</a>
                                            <a href="http://list.secoo.com/watches/93-141-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">格拉苏蒂</a>
                                            <a href="http://list.secoo.com/watches/93-108-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">劳力士</a>
                                            <a href="http://list.secoo.com/watches/93-156-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">真力时</a>
                                            <a href="http://list.secoo.com/watches/93-94-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">卡地亚</a>
                                            <a href="http://list.secoo.com/watches/93-96-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">欧米茄</a>
                                            <a href="http://list.secoo.com/watches/93-133-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">浪琴</a>
                                            <a href="http://list.secoo.com/watches/93-147-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">天梭</a>
                                            <a href="http://list.secoo.com/watches/93-442-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">汉密尔顿</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">珠宝首饰</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://list.secoo.com/jewelry/66-2564-2565-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">项链</a>
                                            <a href="http://list.secoo.com/jewelry/66-2564-2566-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">吊坠</a>
                                            <a href="http://list.secoo.com/jewelry/66-2576-2578-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">手链</a>
                                            <a href="http://list.secoo.com/jewelry/66-2571-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">耳饰</a>
                                            <a href="http://list.secoo.com/jewelry/66-2576-2577-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">手镯</a>
                                            <a href="http://list.secoo.com/jewelry/66-117-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">戒指/指环</a>
                                            <a href="http://list.secoo.com/jewelry/66-2576-2579-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">手串</a>
                                            <a href="http://list.secoo.com/jewelry/66-2600-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">串珠配珠</a>
                                            <a href="http://list.secoo.com/jewelry/66-112-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">首饰套装</a>
                                            <a href="http://list.secoo.com/jewelry/66-104-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">胸针</a>
                                            <a href="http://list.secoo.com/jewelry/66-2583-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">头饰</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%25A2%25B5%25E5%2585%258B%25E9%259B%2585%25E5%25AE%259D&amp;firstcategoryid=66&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">梵克雅宝</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25B0%259A%25E7%25BE%258E&amp;firstcategoryid=66&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">尚美</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-88-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">蒂芙尼</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-12-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">迪奥</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-76-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">宝格丽</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-307-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">施华洛世奇</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-1-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">爱马仕</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-1449-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">潘多拉</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-3-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">香奈儿</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-2-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">路易威登</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-4686-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">Apm Monaco</a>
                                            <a href="http://list.secoo.com/jewelry/66-0-0-5567-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">莫妮卡维纳德</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">服饰</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://list.secoo.com/undefined/1660-0-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">男装</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A5%25B3%25E8%25A3%2585&amp;level=0&amp;qfs=1">女装</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2594%25B7%25E5%25A3%25AB%25E5%258D%25AB%25E8%25A1%25A3&amp;level=0&amp;qfs=1">男士卫衣</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2594%25B7%25E5%25A3%25AB%25E8%25A3%25A4%25E8%25A3%2585&amp;level=0&amp;qfs=1">男士裤装</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2594%25B7%25E5%25BC%258F%25E8%25A1%25AC%25E8%25A1%25AB&amp;level=0&amp;qfs=1">男士衬衫</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2594%25B7%25E5%25A3%25AB%25E5%25A4%25B9%25E5%2585%258B&amp;level=0&amp;qfs=1">男士夹克</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A5%25B3%25E5%25A3%25AB%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599&amp;level=0&amp;qfs=1">女式连衣裙</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A5%25B3%25E5%25A3%25AB%25E5%25A4%2596%25E5%25A5%2597&amp;level=0&amp;qfs=1">女式外套</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=BURBERRY&amp;firstcategoryid=1660&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=3&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">博柏利</a>
                                            <a href="http://search.secoo.com/search?keyword=Emporio%2BArmani&amp;firstcategoryid=1660&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=3&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">Emporio Armani</a>
                                            <a href="http://search.secoo.com/search?keyword=VERSACE&amp;firstcategoryid=1660&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">范思哲</a>
                                            <a href="http://search.secoo.com/search?keyword=MaxMara&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=237&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">MaxMara</a>
                                            <a href="http://search.secoo.com/search?keyword=Dolce%2526Gabbana&amp;firstcategoryid=1660&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=3&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">杜嘉班纳</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/171604.shtml">PRADA</a>
                                            <a href="http://list.secoo.com/undefined/1690-0-0-311-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">纪梵希</a>
                                            <a href="http://list.secoo.com/undefined/1690-0-0-6638-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">圣罗兰</a>
                                            <a href="http://search.secoo.com/search?keyword=Valentino&amp;firstcategoryid=1690&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">华伦天奴</a>
                                            <a href="http://list.secoo.com/undefined/1690-0-0-665-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">丝黛拉麦卡妮</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">鞋履</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25B9%25B3%25E5%25BA%2595%25E9%259E%258B&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">平底鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%259D%25B4%25E5%25AD%2590&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">靴子</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%259A%25AE%25E9%259E%258B&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">皮鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%258B%2596%25E9%259E%258B&amp;level=0&amp;qfs=1">拖鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25AB%2598%25E8%25B7%259F%25E9%259E%258B&amp;level=0&amp;qfs=1">高跟鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%2587%2589%25E9%259E%258B&amp;level=0&amp;qfs=1">凉鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25BF%2590%25E5%258A%25A8%25E9%259E%258B&amp;level=0&amp;qfs=1">运动鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E4%25B9%2590%25E7%25A6%258F&amp;level=0&amp;qfs=1">乐福鞋</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%258F%25A4%25E9%25A9%25B0&amp;firstcategoryid=1554&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">古驰</a>
                                            <a href="http://search.secoo.com/search?keyword=Balenciaga&amp;firstcategoryid=1555&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">巴黎世家</a>
                                            <a href="http://search.secoo.com/search?keyword=Jimmy%2520Choo&amp;level=0&amp;qfs=1">Jimmy Choo</a>
                                            <a href="http://search.secoo.com/search?keyword=Manolo%2520Blahnik&amp;level=0&amp;qfs=1">马诺洛 伯拉尼克</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%258F%25B2%25E6%258B%2589%25E6%25A0%25BC%25E6%2585%2595&amp;firstcategoryid=1555&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=6&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">菲拉格慕</a>
                                            <a href="http://search.secoo.com/search?keyword=Burberry&amp;firstcategoryid=1555&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">博柏利</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%258D%258E%25E4%25BC%25A6%25E5%25A4%25A9%25E5%25A5%25B4&amp;firstcategoryid=1554&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">华伦天奴</a>
                                            <a href="http://search.secoo.com/search?keyword=Stuart%2520Weitzman&amp;level=0&amp;qfs=1">斯图尔特 韦茨曼</a>
                                            <a href="http://search.secoo.com/search?keyword=Sergio%2BRossi&amp;firstcategoryid=1554&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">塞乔 罗西</a>
                                            <a href="http://search.secoo.com/search?keyword=Golden%2BGoose&amp;firstcategoryid=1555&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=1&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#pageTitle">Golden Goose</a>
                                            <a href="http://search.secoo.com/search?keyword=Roger%2520Vivier&amp;level=0&amp;qfs=1">Roger Vivier</a>
                                            <a href="http://search.secoo.com/search?keyword=Tod%27s&amp;level=0&amp;qfs=1">Tod's</a>
                                            <a href="http://search.secoo.com/search?keyword=hogan&amp;level=0&amp;qfs=1">Hogan</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/171144.shtml">普拉达</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/171228.shtml">缪缪</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">配饰</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A2%25A8%25E9%2595%259C&amp;level=0&amp;qfs=1">墨镜</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%2595%259C%25E6%25A1%2586&amp;level=0&amp;qfs=1">眼镜框</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%2585%25B0%25E5%25B8%25A6&amp;level=0&amp;qfs=1">腰带</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%259B%25B4%25E5%25B7%25BE&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">围巾</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E4%25B8%259D%25E5%25B7%25BE&amp;firstcategoryid=0&amp;secondcategoryid=0&amp;thirdcategoryid=0&amp;brandId=0&amp;level=0&amp;orderType=7&amp;filterType=0&amp;source=&amp;pageNo=1&amp;st=10&amp;price=0&amp;prop=0&amp;warehouse=100&amp;actscr=0&amp;expKey=#J_FilterPos">丝巾</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%259B%25A8%25E4%25BC%259E&amp;level=0&amp;qfs=1ndex.shtml">雨伞</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%258C%2582%25E9%25A5%25B0&amp;level=0&amp;qfs=1">挂饰</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25B8%25BD%25E5%25AD%2590&amp;level=0&amp;qfs=1">帽子</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%2589%258B%25E5%25A5%2597&amp;level=0&amp;qfs=1">手套</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%2592%25A5%25E5%258C%2599%25E6%2589%25A3&amp;level=0&amp;qfs=1">钥匙扣</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25A2%2596%25E6%2589%25A3&amp;level=0&amp;qfs=1">袖扣</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25A2%2586%25E7%25BB%2593&amp;level=0&amp;qfs=1">领结</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2588%25B1%25E9%25A9%25AC%25E4%25BB%2595%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">爱马仕</a>
                                            <a href="http://search.secoo.com/search?keyword=lv%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">路易威登</a>
                                            <a href="http://search.secoo.com/search?keyword=gucci%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">古驰</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%258F%25B2%25E6%258B%2589%25E6%25A0%25BC%25E6%2585%2595%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">菲拉格慕</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%258C%2583%25E6%2580%259D%25E5%2593%25B2%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">范思哲</a>
                                            <a href="http://search.secoo.com/search?keyword=Burberry%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">博柏利</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E4%25B8%2587%25E5%25AE%259D%25E9%25BE%2599%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">万宝龙</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%259B%25B7%25E6%259C%258B%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">雷朋</a>
                                            <a href="http://www.secoo.com/listTopic/07-30/171519.shtml">普拉达</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25B7%25B4%25E5%2588%25A9%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">巴利</a>
                                            <a href="http://search.secoo.com/search?keyword=Miu%2520Miu%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">缪缪</a>
                                            <a href="http://search.secoo.com/search?keyword=Bottega%2520Veneta%2520%25E9%2585%258D%25E9%25A5%25B0&amp;level=0&amp;qfs=1">葆蝶家</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">运动</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25B7%2591%25E6%25AD%25A5%25E9%259E%258B&amp;level=0&amp;qfs=1">跑步鞋</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25BF%2590%25E5%258A%25A8%25E6%259C%258D&amp;level=0&amp;qfs=1">运动服</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%2583%258C%25E5%258C%2585&amp;level=0&amp;qfs=1">背包</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%2581%25A5%25E8%25BA%25AB%25E8%25A3%2585%25E5%25A4%2587&amp;level=0&amp;qfs=1">健身装备</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25AA%2591%25E8%25A1%258C%25E8%25A3%2585%25E5%25A4%2587&amp;level=0&amp;qfs=1">骑行装备</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%25B3%25B3%25E8%25A3%2585&amp;level=0&amp;qfs=1">泳装</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>

                                            <a href="http://search.secoo.com/search?keyword=%25E9%2598%25BF%25E8%25BF%25AA%25E8%25BE%25BE%25E6%2596%25AF&amp;level=0&amp;qfs=1">阿迪达斯</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%2580%2590%25E5%2585%258B&amp;level=0&amp;qfs=1">耐克</a>
                                            <a href="http://search.secoo.com/search?keyword=Y-3&amp;level=0&amp;qfs=1">Y-3</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25BD%25AA%25E9%25A9%25AC&amp;level=0&amp;qfs=1">彪马</a>
                                            <a href="http://search.secoo.com/search?keyword=Supreme&amp;level=0&amp;qfs=1">Supreme</a>
                                            <a href="http://search.secoo.com/search?keyword=Hotsuit&amp;level=0&amp;qfs=1">Hotsuit</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A7%258B%25E7%25A5%2596%25E9%25B8%259F&amp;level=0&amp;qfs=1">始祖鸟</a>
                                            <a href="http://search.secoo.com/search?keyword=Marmot&amp;level=0&amp;qfs=1">Marmot</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25AC%25BC%25E5%2586%25A2%25E8%2599%258E&amp;level=0&amp;qfs=1">鬼冢虎</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25AE%2589%25E5%25BE%25B7%25E7%258E%259B&amp;level=0&amp;qfs=1">安德玛</a>
                                            <a href="http://search.secoo.com/search?keyword=Superga&amp;level=0&amp;qfs=1">Superga</a>
                                            <a href="http://search.secoo.com/search?keyword=Asics&amp;level=0&amp;qfs=1">亚瑟士</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">家居</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25A5%25B0%25E5%2593%2581%25E6%2591%2586%25E4%25BB%25B6&amp;level=0&amp;qfs=1">饰品摆件</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%2594%259F%25E6%25B4%25BB%25E7%2594%25B5%25E5%2599%25A8&amp;level=0&amp;qfs=1">生活电器</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25AE%25B6%25E5%2585%25B7&amp;level=0&amp;qfs=1">家具</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%2599%25BA%25E8%2583%25BD%25E7%25A7%2591%25E6%258A%2580&amp;level=0&amp;qfs=1">智能科技</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E6%2589%258B%25E6%259C%25BA&amp;level=0&amp;qfs=1">手机</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25BD%25B1%25E9%259F%25B3%25E5%25A8%25B1%25E4%25B9%2590&amp;level=0&amp;qfs=1">影音娱乐</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=Zippo&amp;level=0&amp;qfs=1">Zippo</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%2583%25BD%25E5%25BD%25AD&amp;level=0&amp;qfs=1">都彭</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%258F%25B2%25E4%25BB%2595%25E4%25B9%2590&amp;level=0&amp;qfs=1">菲仕乐</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%258E%259B%25E6%2588%2588%25E9%259A%2586%25E7%2589%25B9&amp;level=0&amp;qfs=1">玛戈隆特</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E4%25B8%2589%25E6%2598%259F&amp;level=0&amp;qfs=1">三星</a>
                                            <a href="http://search.secoo.com/search?keyword=Beats&amp;level=0&amp;qfs=1">魔声</a>
                                            <a href="http://search.secoo.com/search?keyword=Microsoft&amp;level=0&amp;qfs=1">微软</a>
                                            <a href="http://search.secoo.com/search?keyword=Huawei&amp;level=0&amp;qfs=1">华为</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">美妆</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%259D%25A2%25E9%2583%25A8%25E6%258A%25A4%25E7%2590%2586&amp;level=0&amp;qfs=1">面部护理</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%259C%25BC%25E9%2583%25A8%25E6%258A%25A4%25E7%2590%2586&amp;level=0&amp;qfs=1">眼部护理</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E8%25BA%25AB%25E4%25BD%2593%25E6%258A%25A4%25E7%2590%2586&amp;level=0&amp;qfs=1">身体护理</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E7%25BE%258E%25E5%25AE%25B9%25E5%2581%25A5%25E5%25BA%25B7&amp;level=0&amp;qfs=1">美容健康</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%25A6%2599%25E6%25B0%25B4&amp;level=0&amp;qfs=1">香水</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E9%259D%25A2%25E9%2583%25A8%25E5%25BD%25A9%25E5%25A6%2586&amp;level=0&amp;qfs=1">面部彩妆</a>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%2594%2587%25E9%2583%25A8%25E5%25BD%25A9%25E5%25A6%2586&amp;level=0&amp;qfs=1">唇部彩妆</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=La%2520Mer&amp;level=0&amp;qfs=1">海蓝之谜</a>
                                            <a href="http://search.secoo.com/search?keyword=SK-II&amp;level=0&amp;qfs=1">SK-II</a>
                                            <a href="http://search.secoo.com/search?keyword=CHANEL%2520%25E5%25BD%25A9%25E5%25A6%2586&amp;level=0&amp;qfs=1">香奈儿</a>
                                            <a href="http://search.secoo.com/search?keyword=Dior%2520%25E5%25BD%25A9%25E5%25A6%2586&amp;level=0&amp;qfs=1">迪奥</a>
                                            <a href="http://search.secoo.com/search?keyword=Lancome&amp;level=0&amp;qfs=1">兰蔻</a>
                                            <a href="http://search.secoo.com/search?keyword=Estee%2520Lauder&amp;level=0&amp;qfs=1">雅诗兰黛</a>
                                            <a href="http://search.secoo.com/search?keyword=YSL%2520%25E5%25BD%25A9%25E5%25A6%2586&amp;level=0&amp;qfs=1">YSL</a>
                                            <a href="http://search.secoo.com/search?keyword=Tom%2520Ford&amp;level=0&amp;qfs=1">Tom Ford</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="">生活方式</a>
                                <div className={'nav-fold'}>
                                    <ul className={'nav-list'}>
                                        <li className={'nav-first'}>
                                            <h5>分类</h5>
                                            <a href="http://list.secoo.com/undefined/2335-0-0-0-0-2-0-0-1-10-0-0-100-0.shtml#J_FilterPos">豪车租赁</a>
                                            <a href="http://list.secoo.com/plane/424-0-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">飞机 游艇</a>
                                            <a href="http://list.secoo.com/undefined/2195-2199-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">旅行</a>
                                            <a href="http://list.secoo.com/undefined/2195-2197-0-0-0-1-0-0-1-10-0-0-100-0.shtml#pageTitle">美容与健康</a>
                                        </li>
                                        <li className={'nav-second'}>
                                            <h5>品牌</h5>
                                            <a href="http://search.secoo.com/search?keyword=%25E5%25A5%25A5%25E8%25BF%25AA&level=0&qfs=1">奥迪</a>
                                            <a href="http://list.secoo.com/1/2195-2197-2207-8212-0-1-0-0-1-10-0-0.shtml">OXYGYM</a>
                                            <a href="http://list.secoo.com/plane/424-1004-1014-3190-0-1-0-0-1-10-0-0.shtml">青岛乘风破浪帆船俱乐部</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={'play'}>搜索</li>
                        </ul>
                    </Nav>
                </HeaderWrapper>
            </Fragment>
        )
    }
}
export default connect(null,null)(Header);