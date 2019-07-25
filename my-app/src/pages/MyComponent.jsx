import React,{Component} from 'react';
import 'whatwg-fetch';
import 'es6-promise';

class MyComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            employees:[],
            error:null
        }
    }

    componentDidMount(){
        fetch('https://api.example.com/items')
            .then(res=>res.json())
            .then(result=>{
              this.setState({
                  employees:result.employees
              })
            },
                error=>{
                this.setState({
                    error
                })
                }
            )
    }

    render(){
        const {error,employees} = this.state;
        if(error){
            return <div>Error:{error.message}</div>
        }else{
            return (
                <ul>
                    {
                        employees.map(item=>{
                            return (
                                <li key={item.name}>{item.name}-{item.experience}</li>
                            )
                        })
                    }
                </ul>
            )
        }
    }
}