import React from 'react'
import { Link, Route } from "react-router-dom";

export const NavbarMenu = () => (
    <div className='navbar-menu navbar-bg'>
      <nav className='nav'>
        {/* 添加了四个导航组件Link */}
        <Link to='/main/about'>关于我们</Link>
        <Link to='/main/events'>企业事件</Link>
        <Link to='/main/products'>公司产品</Link>
        <Link to='/main/contact'>联系我们</Link>
      </nav>
    </div>
  )
  