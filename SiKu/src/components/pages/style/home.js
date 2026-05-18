import styled from 'styled-components';

import LA from '../../../statics/img/editor-pick.png';
export const HomeWrapper=styled.div`
    width:1351px;   
`;

export const Hot=styled.div`
    width:1200px;
    height:980px;
    margin:0 auto;
    margin-top:20px;  
    .left{
        position:relative;
            img{
                display:block;
                width:100%;
            }
            .bg-mask{
                position:absolute;
                width:100%;
                height:790px;
                background-color:rgba(0, 0, 0, 0.4);
                opacity:0;
                transition:opacity linear 0.2s;
            }
            .bg-mask:hover{
                opacity:1;
            }
         .icu{
            margin-top:-50px;
        }       
    }
   .center{
   position:relative;
            .bg-mask{
                position:absolute;
                right:0;
                top:0;
                width:480px;
                height:410px;
                background-color:rgba(0, 0, 0, 0.1);
                opacity:0;
                transition:opacity linear 0.2s;
            }
            .bg-mask:hover{
                opacity:0.2;
            }
   }
   .right{
   .video-react{
   font-size:12px;
   }
   .video-react-big-play-button{
        position:absolute;
        left:275px;
        top:90px;
   }
   }
`;
export const NavImg=styled.div`
width:1200px;
    height:980px;
    &.left{
        float:left;
        width:530px;
        height:900px;
    }
    &.center{
        float:right;
        width:650px;
        height:410px;
       .pic-a{
           float:right;
       }
       .pic-b{
          margin-top:-410px;
          float:left;
          z-index:1;
       }
    }
   &.right{
        float:left;
        margin-top:20px;
        margin-left:20px;
        width:650px;
        height:550px;
        position:relative;
        .video-react{
         position:absolute;
         top:140px;
        }
   }
`;
export const Column=styled.div`
    width:1200px;
    height:565px;
    margin:0 auto;
    margin-top:54px;
    margin-bottom:42px;
    position:relative;
    img{
        display:block;
        margin:0 auto; 
        padding-top:20px;
    }
    .said{
    position:absolute;
    bottom:40px;
    }
`;
export const Banner=styled.div`
    div{
        width:467px;
        height:38px;
        float:left;
        border-bottom:2px solid #333;
            &.mouse{
                width:467px;
                height:38px;
                margin-left:733px;
            }
        }
    h3{
        width:266px;
        height:38px;
        color:#fff;
        text-align:center;
        background:url(${LA}) center;
        background-size:266px 38px;
        background-repeat:no-repeat;
        margin:0 auto;
        } 
`;
export const Menu=styled.div`
    width:1200px;
    height:400px;
    margin-top:40px;
    overflow:hidden;
       ul{
            width:1210px;
            height:410px;    
        }
            li{
                float:left;
                list-style:none;
                width:232px;
                height:410px;
                margin-right:10px; 
                background:#ffb81c; 
                transition: transform 0.1s;       
                    .product-img{ 
                        width:232px;
                        height:232px;      
                    img{
                        width:232px;
                        height:232px;
                        background:#fff;
                        opacity:1;
                    }
            }
                .product-details{
                    padding:34px 27px 44px;
                    background:#f5f5f5;
                }
                .name{
                    width:178px;
                    height:28px;
                    font-size:18px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .desc{
                    width:178px;
                    height:44px;
                    font-size:12px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .line{
                    width:80px;
                    height:2px;
                    border-top:2px solid #000;
                    padding-bottom:20px;
                
                }
                .price{
                    width:178px;
                    height:18.5px;
                    font-size:14px;
                }
                a{
                    list-style:none;
                    text-decoration:none;
                    color:#000;
                }            
        }
            li:hover{
            color:#ffb81c;
            cursor: pointer;   
            transform: translateY(-10px);         
            }
            a:hover{
                color:#ffb81c;
            }
`;
export const News=styled.div`
    width:1200px;
    height:960px;
    margin:0 auto;
    position:relative;      
        .left{
            float:left;
            width:950px;
            height:630px;
        position:relative;
            img{
                display:block;
                width:100%;
            }
            .bg-mask{
                position:absolute;
                width:100%;
                height:100%;
                background-color:rgba(0, 0, 0, 0.4);
                opacity:0;
                transition:opacity linear 0.2s;
            }
            .bg-mask:hover{
                opacity:1;
            }
        }
        .center{
            width:641px;
            height:630px;
            position: absolute; 
            right:0;
            top:0; 
        }
        .right{
            float:left;
            width:1200px;
            height:300px;
            margin:30px auto;
        }
`;
export const SubNav=styled.div`
    width:1200px;
    height:600px;
    margin:30px auto 40px;
        .native{
            width:1230px;          
                li{
                    float:left;
                    width:380px;
                    height:600px;               
                    margin-right:30px;
                    position:relative;  
                    img{
                        display:block;
                        width:100%;
                        }                           
                    }
                    .bg-mask{
                        position:absolute;
                        width:100%;
                        height:600px;
                        background-color:rgba(0, 0, 0, 0.4);
                        opacity:0;
                        transition:opacity linear 0.2s;
                    }
                    .bg-mask:hover{
                        opacity:1;
                    }
                }
`;
export const Footer=styled.div`
    width:1351px;
    height:724px;
    background:#ffb81c;
    padding:60px 0 0;
        .foot{
            width:1200px;
            height:110px;
            margin:0 auto;
            margin-bottom:50px;
            text-align:center;
            img{
                width:291px;
                height:110px;
                
            }
        }
        .foots{
            width:1230px;
            height:504px;
            margin:0 auto;           
            li{
                float:left;
                width:380px;
                height:504px;
                margin-right:30px;
                position:relative;
                    img{
                        display:block;
                        width:100%;
                        }
                    }
            .bg-mask{
                position:absolute;
                width:100%;
                height:100%;
                background-color:rgba(0, 0, 0, 0.2);
                opacity:0;
                transition:opacity linear 0.2s;
                }
            .bg-mask:hover{
                opacity:1;
                }
            }
`;
export const CopyRight=styled.div`
    width:1351px;
    height:546px;
    background:#ffb81c;
    padding:40px 0 0;
    
    .test{
        width:1200px;
        height:261px;
        margin:0 auto;
             .left{
                float:left;
                width:325px;
                height:179px;              
                    h4{
                    width:325px;
                    height:21px;
                    font-size:16px;
                    margin-bottom:26px;
                    font-family:STXihei;
                    }
                    ul{                       
                    width:325px;
                    height:132px;
                        li{
                            list-style:none;
                            color:#000;
                            float:left;
                            width:115px;
                            height:33px;
                                a{
                                    list-style:none;
                                    color:#000;
                                    text-decoration:none;
                                    font-size:14px;
                                }
                        }
                    }
            }
            .center{
                float:left;
                width:550px;
                height:261px;           
                position:relative;
                .left{
                    width:57px;
                    height:20px;
                     position:absolute;
                     top:150px;
                     left:90px;
                }
                .right{
                    width:57px;
                    height:20px;
                     position:absolute;
                     top:150px;
                     right:90px;
                }
                h4{
                    width:550px;
                    height:21px;
                    font-size:16px;
                    text-align:center;
                    margin-bottom:26px;
                    font-family:STXihei;
                    }
            }
            .right{
                float:right;
                width:80px;
                height:164px;            
                ul{
                    li{
                    width:80px;
                    height:33px;
                    font-size:14px;
                    position:relative;
                        img{
                            width:126px;
                            height:120px;
                            position:absolute;
                            right:90px;
                            top:-50px;
                            display:none;                                                
                        }                                                                         
                    }
                    li:hover img{
                        display:block;
                    }               
                }
                h4{
                    width:80px;
                    height:21px;
                    font-size:16px;
                    text-align:center;
                    margin-bottom:26px;
                    font-family:STXihei;
                    }
            }
    }
    .footer-info{
        width:1200px;
        height:22px;
        margin:0 auto;
        margin-top:80px;
        p{
        width:1200px;
        height:21.22px;
        margin-bottom:20px;
            span{
                margin-right:30px;
                font-size:14px;
                    a{
                        list-style:none;
                        color:#000;
                        text-decoration:none;
                        font-size:14px;
                    }
            }
        }
    } 
    .footer-info-imgs{
        width:1200px;
        height:60px;
            li{
                float:left;           
                 list-style:none;
                 margin-right:30px;               
                img{
                    width:108px;
                    height:40px
                }
            }
    }
    .friend{
        width:1200px;
        height:63px;
        overflow:hidden;
        margin:0 auto;
        margin-top:120px;
        h4{
            width:1200px;
            height:63px;
            padding:20px 0;
            text-align:center;            
            a{
                list-style:none;
                color:#939393;
                text-decoration:none;
                font-size:12px;    
                line-height:12px;                       
                    }
            img{       
                width:20px;
                height:20px;
                margin-right:5px;
                    }        
        }
    }
`;
export const Sidebar=styled.div`
width:1200px;
margin:0 auto;
    img{
        width:120px;
        height:164px;
        position:fixed;
        top:480px;
       
    }
`;