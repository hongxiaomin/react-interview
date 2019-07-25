import React,{Component} from 'react';
import queryString from 'query-string'
import MyButton from '../components/MyButton';
// export default function Greeting({message}){
//     return <h1>{`Hello,${message}`}</h1>
// }

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'world'
        }
    }
    componentDidMount() {
        console.log(this.props);
        const parsed = queryString.parse(this.props.location.search)
        const state = this.props.location.state;
        console.log(parsed)
        console.log(state)
    }

    render(){
        return(
            <div>
                <MyButton />
                <h1>{`Hello,${this.state.message}`}</h1>
            </div>
        )
    }
}

export default Greeting;