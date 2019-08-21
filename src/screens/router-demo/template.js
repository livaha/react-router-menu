import React from 'react'
import { MainMenu } from "./menus";

export const Template = (props) => (
  <div className = 'page'>
    <MainMenu></MainMenu>
    {props.children}
  </div>
)