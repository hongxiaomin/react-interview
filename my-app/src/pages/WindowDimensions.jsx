import React,{Component} from 'react';

export default class WindowDimensions extends Component{
    constructor(props){
        super(props)
        this.state={
            width:1920,
            height:1080
        }
    }

    componentWillMount() {
        this.updateDimensions()
    }

    componentDidMount() {
        window.addEventListener('resize',this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize',this.updateDimensions,false);
    }

    updateDimensions=()=>{
        this.setState({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    }

    render(){
        return (
            <span>
                {this.state.width}*
                {this.state.height}
            </span>
        )
    }
}
