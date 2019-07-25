import React,{Component} from 'react'
import {Route} from 'react-router-dom'

const MyButton = ()=>(
    <Route render={({history})=>(
        <button type={'button'} onClick={()=>{history.push('/window')}}>{'Click Me'}</button>
    )}/>
)

export default MyButton;