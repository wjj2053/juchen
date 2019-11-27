import React from 'react';
import { TabBar } from 'antd-mobile';
import homeImg from '../../images/1-2.png';
import homeImg2 from '../../images/1-1.png';
import theaterImg from '../../images/2-2.png';
import theaterImg2 from '../../images/2-1.png';
import eticketImg from '../../images/3-2.png';
import eticketImg2 from '../../images/3-1.png';
import myImg from '../../images/4-2.png';
import myImg2 from '../../images/4-1.png';
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
                            background: 'url(' + homeImg + ') center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        // 选中的图标
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(' + homeImg2 + ') center center /  21px 21px no-repeat'
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
                                background: 'url(' + theaterImg + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + theaterImg2 + ') center center /  21px 21px no-repeat'
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
                                background: 'url(' + eticketImg + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(' + eticketImg2 + ') center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="票夹"
                        key="eticket"
                        // dot
                        selected={this.state.selectedTab === 'eticket'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'eticket',
                            });
                            this.props.history.push("/eticket");
                            document.title="票夹"
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: myImg }}
                        selectedIcon={{ uri: myImg2 }}
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