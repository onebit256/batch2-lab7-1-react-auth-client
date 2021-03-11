import { Component } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../context/currentUser'


class Menu extends Component {
	static propTypes= {
        value: PropTypes.string
    }


    constructor(props) {    
        super(props);    
    }

	static contextType = UserContext;
	
    render() {
		let c = this.context;
      return (
		<div className="layui-header">
			<div className="layui-logo">区块链LOGO</div>
			
			<ul className="layui-nav layui-layout-left">
			  <li className="layui-nav-item"><a href="">控制台</a></li>
			  <li className="layui-nav-item"><a href="">货币管理</a></li>
			  <li className="layui-nav-item"><a href="">用户管理</a></li>
			  <li className="layui-nav-item">
				<a href="javascript:;">其它功能</a>
				<dl className="layui-nav-child">
				  <dd><a href="">邮件管理</a></dd>
				  <dd><a href="">消息管理</a></dd>
				  <dd><a href="">授权管理</a></dd>
				</dl>
			  </li>
			</ul>
			<ul className="layui-nav layui-layout-right">
			  <li className="layui-nav-item">
				<a href="javascript:;">
				  <img src="http://t.cn/RCzsdCq" className="layui-nav-img"/>{this.props.value}贤心
				</a>
				<dl className="layui-nav-child">
				  <dd><a href="">基本资料</a></dd>
				  <dd><a href="">安全设置</a></dd>
				</dl>
			  </li>
			  <li className="layui-nav-item" onClick={this.context.logout}><a href="">退出</a></li>
			</ul>
		  </div>
      );
    }
  }

export default Menu;





