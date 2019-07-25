import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import MyRef from '../components/MyRef';
import UserProfile from '../components/UserProfile';

class User extends Component{
    // static propTypes ={
    //     name:PropTypes.string.isRequired,
    //     age:PropTypes.number.isRequired
    // }
    constructor(props){
        super(props)
        this.state={
            message:'welcome to react world'
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.nameInput.focus();
    }

    changeMessage=()=>{
        this.setState({message:'我是新的标题'},()=>{
            console.log('message以改变并渲染');
        })
    }

    resetMessage=()=>{
        this.setState({message:'welcome to react world'})
    }
    render(){
        const data={name:'John',age:42,sex:'man'};
        const {history} = this.props;
        const REACT_VERSION = React.version;
        return (
            <div>
                <SearchBar />
                <MyRef/>
                <UserProfile/>
                <h1 ref = {this.myRef}>{this.state.message}</h1>
                <button onClick={this.changeMessage}>更改标题</button>
                <button onClick={this.resetMessage}>恢复原标题</button>
                <button onClick={()=>{
                    history.push({
                        pathname:'/greeting',
                        search:'?name=hxm',
                        state:{data:[1,2,3,4]}
                    })
                }}>go greeting</button>
                {/*<h3>{`Welcome, ${this.props.name}`}</h3>*/}
                {/*<h3>{`Age, ${this.props.age}`}</h3>*/}
                <pre>
                    {JSON.stringify(data,null,2)}
                </pre>
                <input type="text" defaultValue={'Won\'t focus'}/>

                <input type="text" ref={(input)=>{this.nameInput = input}} defaultValue={'Will focus'}/>
                <p>{REACT_VERSION}</p>
            </div>
        )
    }
}


export default withRouter(User)