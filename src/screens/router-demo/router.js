import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// 引入展示组件
import { About, Contact, Home, Products, Events, NotFound404, Details } from './screens/router-demo/pages.js';

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/products' component={Products}/>
          <Route path='/events' component={Events}/>  
          <Redirect from='/history' to='about/history'></Redirect>
          <Route path='/details/:type' component={Details}></Route>     
          <Route component={NotFound404}/>     
        </Switch>     
      </div>
    </HashRouter>
  )
}

export default App