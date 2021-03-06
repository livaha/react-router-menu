
//ES6
import React from 'react';
import { NavLink,Link, Route } from "react-router-dom";
import { isatty } from 'tty';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }
    toggle() {
        this.setState({visible: !this.state.visible});
    };

    render() {
        var children;

        let pathname =window.location.hash;
        let className1 = 'togglable';
        let classNameFinal = className1;
        if (this.props.node.children != null) {
            children = this.props.node.children.map(function(node, index){
                let isActive = false;
                isActive = pathname.indexOf(`#${node.key}`) === 0  
                return <Link className={isActive?'active':''} to={node.key}><li key={index}>{node.title}</li></Link>
            })

            let className2 = this.state.visible ? 'togglable-down' : 'togglable-up';
            classNameFinal = className1 + ' ' + className2;
        }

        var style;

        if (!this.state.visible) {
            style = {display: "none"};
        } 
        
        let isActive = false;
        isActive = pathname.indexOf(`#${this.props.node.key}`) === 0  
        return (
            <>
                <li onClick={()=>{this.toggle()}} className={classNameFinal}>
                    <Link className={isActive?'active':''}  to={this.props.node.key}>{this.props.node.title}</Link>
                </li>
                <ul style={style} className='child-ul'>
                    {children}
                </ul>
            </>
        )
    }
}
function Component1(props){
    console.log(props.node)
    let isActive = false;
    let thisIndex = 0
    let pathname =window.location.hash;
    return(
        <div>
        <div className='navbar-menu navbar-bg'>
            <nav className='nav'>
                {props.node.map((item,index)=>{
                    isActive = pathname.indexOf(`#${item.key}`) === 0  
                    thisIndex = isActive?index:thisIndex
                    return (
                    <Link className={isActive?'active bar-menu':'bar-menu'}
                    key={`bar${index}`} to={item.key}>{item.title}</Link>)
                })}
            </nav>
        </div>

        <div className='fram_test'>
            <div className='fram-content'>
                <div className='fram-navleft fram-navleft-bg'>    
                 <ul>
            {props.node[thisIndex].children?props.node[thisIndex].children.map(item=>{
                return <Component2 node={item}></Component2>
            }):'home'}
                </ul>
            </div>

            <div className='page-content'>
                {props.children}
            </div>
            </div>
        </div>
    </div>
    )
}

//导出组件
export default Component1;