import React from 'react'
import { Link, Route } from "react-router-dom";

import './pages.css';
import { Template } from "./template";
import { AboutMenu } from "./menus";
// 首页内容
export const Home = () => (
  <section className="home">
    <h1>企业网站</h1>
    <nav>
      {/* 添加了四个导航组件Link */}
      <Link to='/about'>关于我们</Link>
      <Link to='/events'>企业事件</Link>
      <Link to='/products'>公司产品</Link>
      <Link to='/contact'>联系我们</Link>
    </nav>
  </section>
)

// 企业事件内容
export const Events = () => (
  <Template>
    <section className="events">
      <h1>企业大事件</h1>
    </section>
  </Template>

)

// 公司产品 
export const Products = () => (
  <Template>
    <section className="products">
        <Link to='/details/telphone'>手机</Link>
        &nbsp;
        <Link to='/details/computer'>电脑</Link> 
    </section>
  </Template>
)

// 产品详情组件
export const Details = (props) => {
  console.log(props.match.params);
  return <p>这是 {props.match.params.type}详情内容</p>
}

// 联系我们
export const Contact = () => (
  <Template>
    <section className="contact">
      <h1>联系我们</h1>
      <p>公司电话：0755 - 12345678</p>
    </section>
  </Template>
)

// 关于我们
export const About = () => (
  <Template>
    <section className="about">
      <AboutMenu></AboutMenu>
      <Route path='/about' exact component={Company}/>
      <Route path='/about/history' component={History}/>
      <Route path='/about/services' component={Services}/>
      <Route path='/about/location' component={Location}/>
    </section>
  </Template>
)
// 没有匹配成功的404组件
export const NotFound404 = (props) => (
  <div className="whoops-404">
    <h1>没有页面可以匹配</h1>
  </div>
)

// 4个子路由对应的显示组件
const Services = () => (
  <section>
    <p>公司服务</p>
  </section>
)

const Location  = () => (
  <section>
    <p>公司位置</p>
  </section>
)

const Company = () => (
  <section>
    <p>公司简介</p>
  </section>
)

const History = () => (
  <section>
    <p>公司历史</p>
  </section>
)