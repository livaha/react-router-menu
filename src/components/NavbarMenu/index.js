import React from 'react'
import { NavLink,Link, Route } from "react-router-dom";
import menu from '@/menu'

let activeIndex = 0;
export default  class NavbarMenu extends React.Component {
  state={
    clickKey:'',
    bool:false
  }
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
  leftMenuClick=(key)=>{
    console.log(key,this.state.bool)
    this.setState({
      clickKey:key===this.state.clickKey?'no':key,
      bool:key===this.state.clickKey&&!this.state.bool
    })
  }
  
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
              console.log(this.state.clickKey,item.key)
              return(
                <div key={index}>
                  <dt><li className={this.state.clickKey===item.key/*&&!this.state.bool*/?'':tClassName}
                  onClick={()=>this.leftMenuClick(item.key)}>{item.title}</li></dt>
                  {
                    item.children?
                    item.children.map((e,idx)=>{
                      let linkClassName = '';
                      isActive = pathname.indexOf(`#${e.key}`) === 0
                      
                      if (isActive) {
                        linkClassName = `${linkClassName} active `;
                      } 
                      return (
                        <NavLink to={e.key} key={idx}>
                          <li className={this.state.clickKey===item.key/*&&!this.state.bool*/?'none':linkClassName} onClick={this.leftMenuActive}>{e.title}</li>
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

            <div className='fram_test'>
                <div className='fram-content'>
                  {this.renderChidrenMenu(menu.menulist())}
                </div>
            </div>
    </div>
    )
  }
}
  