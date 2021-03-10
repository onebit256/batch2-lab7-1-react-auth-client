import { Component } from 'react';

class SideBar extends Component {
    constructor(props) {    
        super(props);    
    }

    render() {
      return (

	<div className="layui-side layui-bg-black">
	    <div className="layui-side-scroll">
	     
	      <ul className="layui-nav layui-nav-tree"  lay-filter="test">
	        <li className="layui-nav-item">
	          <a className="" href="/contracts">Contracts</a>
	          
	        </li>
	        <li className="layui-nav-item  layui-nav-itemed">
	          <a href="javascript:;">Operational Data</a>
	          <dl className="layui-nav-child">
	            <dd><a href="javascript:;" className="index-init layui-this" data-url="modular/money/apply_for.html">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	          </dl>
	        </li>
	        
	        <li className="layui-nav-item">
	          <a href="javascript:;">External Data</a>
	          <dl className="layui-nav-child">
	            <dd><a href="javascript:;">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	            <dd><a href="">超链接</a></dd>
	          </dl>
	        </li>
	        
	        <li className="layui-nav-item">
	          <a href="javascript:;">Settings</a>
	          <dl className="layui-nav-child">
	            <dd><a href="javascript:;">列表一</a></dd>
	            <dd><a href="javascript:;">列表二</a></dd>
	          </dl>
	        </li>
	      </ul>
	    </div>
	  </div>

	  )}

}

export default SideBar;