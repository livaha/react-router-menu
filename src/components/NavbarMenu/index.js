import React from 'react'
import { NavLink,Link, Route } from "react-router-dom";
import menu from '@/menu'

let activeIndex = 0;
export default  class NavbarMenu extends React.Component {
renderMenu=(menus)=>{
  let isActive = false;
  let pathname =window.location.hash;
  return( 
    menus.map((item,index)=>{
      let linkClassName = 'bar-menu';
      isActive = pathname.indexOf(`#${item.key}`) === 0   
               
      if (isActive) {
        linkClassName = `${linkClassName} active`;
        activeIndex = index;
    }
      return ( <Link className={linkClassName} 
      key={`bar${index}`} to={item.key}>{item.title}</Link>)
    })
  )}
  
  renderChidrenMenu=(menus)=>{
    let isActive = false;
    let pathname =window.location.hash;
    if(menus[activeIndex].children){
      return(        
        <div>
          <div className='fram-navleft fram-navleft-bg'>                        
          <dl className="left-menu">
          {
            menus[activeIndex].children.map((item,index)=>{
              let tClassName = '';
              isActive = pathname.indexOf(`#${item.key}`) === 0
              if (isActive) {
                tClassName = `${tClassName} active`;
              } 
              return(
                <div key={index}>
                  <dt><li className={tClassName}
                  onClick={this.leftMenuClick}>{item.title}</li></dt>
                  {
                    item.children?
                    item.children.map((e,idx)=>{
                      let linkClassName = '';
                      isActive = pathname.indexOf(`#${e.key}`) === 0
                      
                      if (isActive) {
                        linkClassName = `${linkClassName} active`;
                      } 
                      return (
                        <NavLink to={e.key} key={idx}>
                          <li className={linkClassName} onClick={this.leftMenuActive}>{e.title}</li>
                        </NavLink>
                      )
                    })
                    :null
                  }
                </div>
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
                </div>
            </div>
    </div>
    )
  }
}
  