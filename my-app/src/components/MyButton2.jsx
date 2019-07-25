import React,{Component} from 'react';

const MyButton2 = (props,context)=>(
    <button type={'button'} onClick={()=>{context.history.push('/user')}}>{'Click Me!'}</button>
)

MyButton2.contextTypes = {
    history:React.propTypes.shape({
        push:React.propTypes.func.isRequired
    })
}