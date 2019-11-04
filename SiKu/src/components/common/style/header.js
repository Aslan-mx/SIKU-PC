import styled from 'styled-components';

export const HeaderWrapper=styled.div`
    width:1351px;   
`;
export const Headers=styled.div`
   width:1200px;
    height:130px;
    margin:0 auto;
    
`;
export const Logo=styled.div`
width:1200px;
height:130px;
    .left{
        float:left;
        margin-top:62px;
        li{
            float:left;
            width:49px;
            height:28px;
            font-size:12px;
            line-height:31px;
            text-align:center; 
            padding-left:20px;         
         }
         .nice{
            
         }   
         .nice-it{
                border-left:1px solid #e2e2e2;
            }    
    }
    .center{
     width:190px;
     height:80px;
     margin:0 auto;
         img{
            width:190px;
            height:80px; 
            margin-top:29px;
            }
        } 
    .right{
        float:right;
        margin-top:-18px;
        li{
            float:left;
            width:63px;
            height:28px;
            font-size:12px;
            line-height:28px;
            text-align:center; 
        }
        .size{
            border-left:1px solid #e2e2e2;
            border-right:1px solid #e2e2e2
        }
    }
`;
export const Nav=styled.div`
    width:1351px;
    height:50px;
    background:#000;
    margin:0 auto;
        ul{ 
            z-index:5;
            width:1200px;
            height:50px;
            margin:0 auto;
            margin-left:50px;
            position:relative;
                li{
                    float:left;
                    height:50px;
                    padding:0 25px;
                    line-height:50px;
                    font-size:14px;
                    color:#FFB81C;
                        .nav-fold{
                            width:1351px;
                            height:345px;
                            background:#fff;
                            display:none; 
                            position:absolute;
                            top:50px;
                            left:-50px;
                            display:none;
                                }
                            .nav-list{
                                width:1200px;
                                height:300px;                                                    
                            }
                                .nav-first{
                                    float:left;
                                    width:415px;
                                    height:280px;
                                    padding:0;
                                    padding-left:25px;
                                    h5{
                                        margin-top:25px;
                                        font-size:14px;
                                        font-weight:700;
                                        color:#000;
                                    }
                                    a{
                                    float:left;
                                    width:200px;
                                    height:40px;
                                    display:block;
                                    color:#666666;
                                    }
                                     a:hover{
                                        color:#000;          
                                        }  
                                }
                                .nav-second{
                                    float:left;
                                    width:615px;
                                    height:280px;
                                    padding:0;
                                    h5{
                                        margin-top:25px;
                                        font-size:14px;
                                        font-weight:700;
                                        color:#000;
                                    }
                                    a{
                                        float:left;
                                        width:200px;
                                        height:40px;
                                        display:block;
                                        color:#666666;
                                    }
                                    a:hover{
                                        color:#000;          
                                        }   
                                }                               
                        }                      
                        a{
                        list-style:none;
                        text-decoration:none;
                        color:#FFB81C;
                        }        
                }
                .play{
                    float:right;
                    padding:0;
                }
            a:hover{
                color:#fff;          
                }      
                
        }
        li:hover .nav-fold{
                    display:block;
                }
`;