import React from 'react'
import {HashRouter , Route , Switch , Redirect} from 'react-router-dom'


/**系统设置 */
import {MainMenu} from '@/screens/SysManagement/Administrator'
export default class IRouter extends React.Component {

    render() {
      
      return (
        <div>
          <HashRouter>
            <Switch>
                    <Route  path="/sysManagement/admin" component={MainMenu} />
                    <Redirect to="/sysManagement/admin" />
              }/>
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }


  