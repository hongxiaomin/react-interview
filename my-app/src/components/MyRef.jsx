import React,{Component} from 'react';

class MyRef extends Component{
    constructor(props){
        super(props);
        this.refNode =  null;
        this.setRefNode = (e)=>{
            this.refNode = e;
        }
    }
    componentDidMount() {
        this.refNode.scrollIntoView();
    }

    render(){
        return (
            <div ref = {this.setRefNode}>我是ref</div>
        )
    }
}

export default MyRef;