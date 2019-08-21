import React from 'react'
import {Header,NavbarMenu,Footer} from '@/components'

export default class Frame extends React.Component {

    render() {
      
      return (
        <div>
            <Header></Header>
            <NavbarMenu></NavbarMenu>
            <div className='fram'>
                <div className='fram-content'>
                    <div className='fram-navleft fram-navleft-bg'>
                        <p>s</p>
                    </div>
                    <div className='page-content'>
                        2
                        <p>s</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
      );
    }
  }


  