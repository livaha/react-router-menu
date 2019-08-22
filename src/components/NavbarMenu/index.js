import React from 'react'
import { NavLink,Link, Route } from "react-router-dom";
import menu from '@/menu'

let activeIndex = 0;
export default  class NavbarMenu extends React.Component {
renderMenu=(menus)=>{
  let isActive = false;
  let linkClassName = 'bar-menu';
  let pathname =window.location.hash;             
  return( 
    menus.map((item,index)=>{
      isActive = pathname.indexOf(`#${item.key}`) === 0   
               
      if (isActive) {
        linkClassName = `${linkClassName} active`;
        activeIndex = index;
    }
      return ( <Link className={linkClassName} 
      key={index} to={item.key}>{item.title}</Link>)
    })
  )}
  
  renderChidrenMenu=(menus)=>{
    if(menus[activeIndex].children){
      return(        
        <div>
          <div className='fram-navleft fram-navleft-bg'>                        
          <dl className="left-menu">
          {
            menus[activeIndex].children.map((item,index)=>{
              return(
                <>
                  <dt><Link to={item.key}>{item.title}</Link></dt>
                  {
                    item.children?
                    item.children.map((e,idx)=>{
                      return (
                        <li><NavLink to={e.key} key={e.key}> {e.title}</NavLink></li>
                      )
                    })
                    :null
                  }
                </>
              )
            })
          }
        </dl>
        </div>

        <div className='page-content'>
          {this.props.children}
        </div>
      </div>
      )
    }else{      
      return(          
        <div className='home-content'>
          {this.props.children}
        </div>
      )
    }
  }
  
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
                  {this.renderChidrenMenu(menu.menulist())}
                  {/** 
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
                    */}
                </div>
            </div>
    </div>
    )
  }
}
  