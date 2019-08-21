import React from 'react'
import { NavLink,Link, Route } from "react-router-dom";
import menu from '@/menu'

export default  class NavbarMenu extends React.Component {
  
renderMenu=(menus)=>{
  return( 
    menus.map((item,index)=>{
      return ( <Link key={index} to={item.key}>{item.title}</Link>)
    })
  )}
  render(){
    return(

      <div>
      
      <div className='navbar-menu navbar-bg'>
                <nav className='nav'>
                  {this.renderMenu(menu.menulist())}
                </nav>
            </div>

            <div className='fram'>
                <div className='fram-content'>
                    <div className='fram-navleft fram-navleft-bg'>                        
                    <dl className="about-menu">
                      <dt>3</dt>
                      <dd>
                        <ul>
                        <li><NavLink to='/about' exact  > 公司简介</NavLink></li>
                        <li><NavLink to='/about/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/about/services'>公司服务</NavLink></li>
                        <li><NavLink to='/about/location'>企业位置</NavLink></li>
                        <li><NavLink to='/events/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/events/services'>公司服务</NavLink></li>
                        </ul>
                      </dd>
                      <dt>3</dt>
                      <dd>
                        <ul>
                        <li><NavLink to='/about' exact  > 公司简介</NavLink></li>
                        <li><NavLink to='/about/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/about/services'>公司服务</NavLink></li>
                        <li><NavLink to='/about/location'>企业位置</NavLink></li>
                        <li><NavLink to='/events/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/events/services'>公司服务</NavLink></li>
                        </ul>
                      </dd>
                    </dl>
                    </div>

                    <div className='page-content'>
                      {this.props.children}
                    </div>
                </div>
            </div>
    </div>
    )
  }
}
  