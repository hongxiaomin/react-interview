import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.txtSearch = null;
        this.state={term:''};
        this.setInputSearchRef = e=>{
            this.txtSearch = e;
        }
    }

    onInputChange=(event)=>{
        this.setState({term:this.txtSearch.value});
    }

    render(){
        return (
            <input type="text" value={this.state.term} onChange={this.onInputChange} ref={this.setInputSearchRef}/>
        )
    }
}

export default  SearchBar;