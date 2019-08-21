import React from 'react'
import {HashRouter , Route , Switch , Redirect} from 'react-router-dom'
import {Frame} from '@/screens'

export default class IRouter extends React.Component {

    render() {
      
      return (
        <div>
          <HashRouter>
            <Switch>
                    <Route  path="/main"  component={Frame} />
              }/>
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }


  