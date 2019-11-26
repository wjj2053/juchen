import React from 'react';
import { TabBar } from 'antd-mobile';
import OneImgIco from '../../images/1.ico';
import TwoImgIco from '../../images/2.ico';
import ImcOne from '../../images/5.ico';
import ImcTwo from '../../images/6.ico';
import MoonOne from '../../images/7.ico';
import MoonTwo from '../../images/4.ico';
import {
    Eticket,
    Home,
    Theater,
    Mine
} from '@views';
import {withRouter} from 'react-router-dom';
//withRouter高阶组件
//被它包裹的组件会自动生成 history   localtion等
class TabBarCom extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen: true
        }
    }
    render() {
        // console.log(this);
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"

                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        // 默认图片
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(' + OneImgIco + ') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        // 选中的图标
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(' + TwoImgIco + ') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        // badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push("/home");
                            document.title="首页"
                        }}
                        data-seed="logId"
                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + ImcOne + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + ImcTwo + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="影院"
                        key="theater"
                        // badge={'new'} 这个就是标识
                        selected={this.state.selectedTab === 'theater'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'theater',
                            });
                            this.props.history.push("/theater");
                            document.title="影院"

                        }}

                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + MoonOne + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + MoonTwo + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="电子票"
                        key="eticket"
                        // dot
                        selected={this.state.selectedTab === 'eticket'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'eticket',
                            });
                            this.props.history.push("/eticket");
                            document.title="电子票"


                        }}
                    >
                       
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'http://image.juooo.com/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg' }}
                        selectedIcon={{ uri: 'http://image.juooo.com/group1/M00/01/D3/rAoKmVwlyY6AHU-XAABZsyVCtbY679.jpg' }}
                        title="我的"
                        key="mine"
                        selected={this.state.selectedTab === 'mine'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mine',
                            });
                            this.props.history.push("/mine");
                            document.title="我的"


                        }}
                    >
                        
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default withRouter(TabBarCom)