import React from 'react'
import {Header,NavbarMenu,Footer} from '@/components'
import { NavLink,Link, Route } from "react-router-dom";

export default class Frame extends React.Component {

    render() {
      
      return (
        <div>
            <Header></Header>
            <NavbarMenu>
                <Route path='/home' component={Header}/>
                <Route path='/net/base' component={Header}/>
                <Route path='/net/advanced' component={Footer}/>
                <Route path='/net/macauth' exact component={Header}/>
                <Route path='/wlan/base' component={Header}/>
                <Route path='/wlan/advanced' component={Footer}/>
                <Route path='/wlan/macauth' component={Header}/>
            </NavbarMenu>
            {/** 
            <div className='navbar-menu navbar-bg'>
                <nav className='nav'>
                    <Link to='/about'>关于我们</Link>
                    <Link to='/events'>企业事件</Link>
                    <Link to='/products'>公司产品</Link>
                    <Link to='/contact'>联系我们</Link>
                </nav>
            </div>

            <div className='fram'>
                <div className='fram-content'>
                    <div className='fram-navleft fram-navleft-bg'>                        
                    <ul className="about-menu">
                        <li><NavLink to='/about' exact  > 公司简介</NavLink></li>
                        <li><NavLink to='/about/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/about/services'>公司服务</NavLink></li>
                        <li><NavLink to='/about/location'>企业位置</NavLink></li>
                        <li><NavLink to='/events/history'> 公司历史</NavLink></li>
                        <li><NavLink to='/events/services'>公司服务</NavLink></li>
                    </ul>
                    </div>

                    <div className='page-content'>
                        <Route path='/about' exact component={Header}/>
                        <Route path='/about/history' component={Footer}/>
                        <Route path='/about/services' component={Footer}/>
                        <Route path='/about/location' component={Footer}/>
                        <Route path='/events' exact component={Header}/>
                        <Route path='/events/history' component={Footer}/>
                        <Route path='/events/services' component={Footer}/>
                        <Route path='/events/location' component={Footer}/>
                    </div>
                </div>
            </div>*/}
            <Footer></Footer>
        </div>
      );
    }
  }


  