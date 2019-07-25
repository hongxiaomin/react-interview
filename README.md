# react-interview

## 1.什么是React？
React是一个开源前端JavaScript库，用于构建用户界面，尤其是单页应用程序。它用于处理网页和移动应用程序的视图层。React是由Facebook的软件工程师Jordan Walker创建的。在2011年React应用首次被部署到Facebook的信息流中，之后于2012年被应用到Instagram上。

## 2.React的主要特点是什么？
React的主要特性有：
* 考虑到真实的DOM操作成本很高，它使用VirtualDOM而不是真实的DOM。
* 支持服务器端渲染。
* 遵循单向数据流或数据绑定。
* 使用可复用/可组合的UI组件开发视图。

## 3.什么是JSX？
JSX是ECMAScript一个类似XML的语法扩展。基本上，它只是为`React.createElement()`函数提供语法糖，从而让我们在JavaScript中，使用类似HTML模板的语法，进行页面描述。

在下面的示例中，`<h1>`内的文本标签会作为JavaScript函数返回给渲染函数。
``` 
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>{'Welcome to React world!'}</h1>
      </div>
    )
  }
}
```
以上示例render方法中的JSX将会被转化为以下内容：
``` 
React.createElement("div",null,React.createElement("h1",null,'Welcome to React world!'));
```

## 4.元素和组件有什么区别？
一个Element是一个简单的对象，他描述了你希望在屏幕上以DOM节点或其他 组件的形式呈现的内容。Elements在他们的属性中可以包含其他的Elements。创建一个React元素是很轻量的。一旦元素被创建后，它将不会被修改。

React Element的对象表示如下：
``` 
const element = React.createElement(
  'div',
  {id:'login-btn'},
  'Login'
)
```
上面的`React.createElement()`函数会返回一个对象。
``` 
{
  type:'div',
  props:{
    children:'Login',
    id:'login-btn'
  }
}
```
最后使用`ReactDOM.render()`方法渲染到DOM：
``` 
<div id="login-btn">Login</div>
```
而一个组件可以用多种不同方式声明。它可以是一个含有`render()`方法的类。或者，在简单的情况中，它可以定义为函数。无论哪种情况，它都将props作为输入，并返回一个JSX树作为输出：
``` 
const Button = ({onLogin})=>
<div id='login-btn' onClick={onLogin}/>
```
然后JSX被转换成React.createElement()函数：
``` 
const Button = ({onLogin})=>React.createElement('div',{id:'login-btn',onClick:onLogin},'Login')
```

## 5.如何在React中创建组件？
有两种可行的方法来创建一个组件：
1. Function Component：这是创建组件最简单的方式。这些是纯JavaScript函数，接受props对象作为第一个参数并返回React元素：
``` 
export default function Greeting({message}){
    return <h1>{`Hello,${message}`}</h1>
}
```
2. Class Components:你还可以使用ES6类定义组件。上面的函数组件若使用ES6的类可改写为：
``` 
class Greeting extends Component{
    constructor(){
        super('props');
    }
    render(){
        return <h1>{`Hello,${this.props.message}`}</h1>
    }
}

export default Greeting;
```
通过以上任意方式创建的组件，可以这样使用：
``` 
 <Greeting  message="semlinker"/>
```
在React内部对函数组件和类组件的处理方式是不一样的，如：
``` 
//如果Greeting是一个函数
const result = Greeting(props);//<p>Hello</p>

//如果Greeting是一个类
const instance = new Greeting(props);//Greeting{}
const result = instance.render();//<p>Hello</p>
```

## 6.何时使用类组件和函数组件？
如果组件需要使用状态或生命周期方法，那么使用类组件，否则使用函数组件。

## 7.什么是Pure Components?
`React.PureComponent`与`React.Component`完全相同，只是它为你处理了`shouldComponentUpdate()`方法。当属性或状态发生变化时，PureComponent将对属性和状态进行浅比较。另一方面，一般组件不会将当前的属性和状态与新的属性和状态进行比较。因此，在默认情况下，每当调用`shouldComponentUpdate`时，默认返回true，所以组件都将重新渲染。

## 8.React的状态是什么？
组件的状态是一个对象，它包含某些信息，这些信息可能在组件的生命周期中发生更改。我们应该尽量使状态尽可能简单，并尽量减少有状态组件的数量。让我们创建一个包含消息状态的User组件：
``` 
import React,{Component} from 'react';

class User extends Component{
    constructor(props){
        super(props)

        this.state={
            message:'welcome to react world'
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default User
```
状态（State）与属性（props）类似，但它是私有的，完全由组件控制。也就是说，除了它所属的组件外，任何组件都无法访问它。

## 9.React中的props是什么？
Props是组件的输入。它们是单个值或包含一组值的对象，这些值在创建时使用类似于HTML标记属性的命名约定传递给组件。它们是从父组件传递到子组件的数据。

Props的主要目的是提供以下组件功能：
1. 将自定义数据传递到组件。
2. 触发状态更改。
3. 在组件的`render()`方法中通过`this.props.reactProp`使用。

例如，让我们使用`reactProp`属性创建一个元素：
``` 
<Element reactProp = {1}/>
```
然后，reactProp将成为附加到React Props对象的属性，该对象最初已存在于使用React库创建的所有组件上。
``` 
props.reactProp
```

## 10.状态和属性有什么区别？
state和props都是普通的JavaScript对象。虽然它们都保存着影响渲染输出的信息，但是它们在组件方面的功能不同。Props以类似于函数参数的方式传递给组件，而状态则类似于在函数内部声明变量并对它进行管理。

States VS Props
``` 
Conditions        | States|  Props|
可从度组件接收初始值|  是   |  是   |
可从父组件中改变其值|  否   |  是   | 
在组件被设置默认值  |  是   |  是   |
在组件内可改变      |  是   |  否   |
可作为子组件的初始值|  是   |   是  |
```

## 11.我们为什么不能直接更新状态
如果你尝试直接改变状态，那么组件将不会重新渲染。
``` 
//Wrong
this.state.message = 'Hello World'
```
正确的方法应该是`setState()`方法。他调度组件状态对象的更新。当状态更改时，组件通常将会重新渲染。

``` 
this.setState({message:'Hello world')
```
注意：你可以在constructor中或使用最新的JavaScript类属性声明语法直接设置状态对象。

## 12.回调函数作为`setState（）`参数的目的是什么？
当setState完成和组件渲染后，回调函数将会被调用。由于`setState()`是异步的，回调函数用于任何后续的操作。

**注意：建议使用生命周期方法而不是此回调函数**
``` 
setState({name:'JoHn'},()=>{console.log('The name has updated and component re-rendered')})
```

## 13.HTML 和 React事件处理有什么区别？
*  在HTML中事件名必须小写：
``` 
<button onclick="activateLasers()">
```
而在React中遵循驼峰惯例：
``` 
<button onClick={activateLasers}>
```
* 在HTML中你可以返回false以阻止默认的行为：
``` 
<a href="#" onclick ='console.log("The link was clicked.");return false;' />
```
而在React中你必须得明确调用`preventDefault()`:
``` 
function handleClick(event){
  event.preventDefault()
  console.log('The link was clicked.')
}
```

## 14.如何在JSX回调中绑定方法或事件处理程序？
实现这一点有三种可能的方法：
* Binding in Constructor:在JavaScript类中，方法默认不被绑定。这也适用于定义为类方法的React事件处理程序。通常我们在构造函数中绑定他们。
```  
class Component extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // ...
  }
}
```
* Public class fields syntax:如果你不喜欢bind方案，则可以使用public class fields syntax 正确绑定回调。
```  
handleClick = ()=>{
  console.log(`this is:${this}`)
}
```
```  
<button onClick={this.handleClick}>
  {'Click me'}
</button>
```
**注意：如果回调函数作为属性传给子组件，那么这些组件可能触发一个额外的重新渲染。在这些情况下，考虑到性能，最好使用`.bind()`或 public fields syntax方案**

## 15.如何将参数传递给事件处理程序或回调函数？
你可以使用箭头函数来包装事件处理器并传递参数：
``` 
<button onClick={()=>{this.handleClick(id)}/>
```
这相当于调用`.bind`:
``` 
<button onClick={this.handleClick.bind(this,id)}>
```

## 16.React 中合成事件是什么？
`SyntheticEvent`是对浏览器原生事件的跨浏览器包装。它的API与浏览器的原生事件相同，包括`stopPropagation()`和`preventDefault()`，除了事件在所有浏览器中的工作方式相同。

## 17.什么是内联条件表达式？
在JS中你可以使用if语句或三元表达式，来实现条件判断。除了这些方法之外，你还可以在JSX中嵌入任何表达式，方法是将它们用大括号括起来，然后再加上JS逻辑运算符`&&`。
``` 
<h1>Hello!</h1>
{
  message.length>0&&!isLogin?
  <h2>
    You have {message.length} unread message.
  </h2>
  :
  <h2>
    You don't have unread message.
  </h2>
}
```
当然如果只是想判断if，可以如下直接判断
``` 
{
  isLogin&&<span>Your have been login!</span>
}
```
在上面的代码中，不需要使用`isLogin？<span>Your have been login!</span>:null`这样的形式。

## 18.什么是"key"属性，在元素数组中使用它们有什么好处？
`key`是一个特殊的字符串属性，你在创建元素数组时需要包含它。Keys帮助React识别哪些项已更改、添加或删除。

我们通常使用数据中的IDs作为keys:
``` 
const todoItems = todos.map(todo=>{
  return (
    <li key={todo.id}>{todo.text}</li>
  )
})
```
在渲染列表时，如果你没有稳定的IDS，你可能会使用index作为key:
``` 
const todoItems = todos.map((todo,index)=>{
  return (
    <li key={index}>{todo.text}</li>
  )
})
```
**注意：**
1. 由于列表项的顺序可能发生改变，因此并不推荐使用index作为keys。这可能会对性能产生负面影响，并可能导致组件状态出现问题。
2. 如果将列表项提取为单独的组件，则在组件上应用keys而不是li标签。
3. 如果在列表项中没有设置key属性，在控制台会显示警告消息。

## 19.refs有什么用？
ref用于返回对元素的引用，但在大多数情况下，应该避免使用它们。当你需要直接访问DOM元素或组件的实例时，它们可能非常有用。

## 20.如何创建refs?
这里有两种方案
* 这是最近增加的一种方案。Refs是使用`React.createRef()`方法创建的，并通过`ref`属性添加到React元素上。为了在组件中使用refs，只需要将ref分配给构造函数中的实例属性。
``` 
class MyComponent extends React.Component{
  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }
  render(){
    return <div ref = {this.myRef}/>
  }
}
```
* 你也可以使用ref回调函数的方案，而不用考虑React版本。例如，访问搜索栏组件中的`input`元素如下：
``` 
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
```
## 21.什么是forward refs?
Ref forwarding是一个特性，它允许一些组件获取接收到ref对象并将它进一步传递给子组件。
``` 
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>
```
## 22.callback refs和findDOMNode()哪一个是首选选项？
最好是使用callback refs而不是 `findDOMNode()`API。因为`findDOMNode()`阻碍了将来对React的某些改进。

推荐的方案是：
``` 
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
```

## 23.为什么String Refs被弃用？
如果你以前使用过React，你可能会熟悉旧的API，其中的ref属性是字符串，如`ref="textInput"`,并且DOM节点的访问方式为`this.refs.textInput`.我们建议不要这样做，因为字符串引用有以下问题，并且被认为是遗留问题。字符串refs在Reactv16版本中被移除。
* 它们强制react跟踪当前执行的组件。这是有问题的，因为它使React模板有状态，这会导致在bundle中复制 React模板时会导致奇怪的错误。
* 它们是不可组合的- 如果一个库把一个ref传给子元素，则用户无法对其设置另一个引用。
* 它们不能与静态分析工具一起使用，如Flow。Flow无法猜测出`this.refs`上的字符串引用的作用及其类型。Callback refs对静态分析更友好。
* 使用"render callback"模式（比如：），它无法像大多数人预期的那样工作。
``` 
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={'input-' + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={input => this['input-' + index] = input} />;
  }

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />
  }
}
```
## 24.什么是Virtual DOM？
Virtual DOM（VDOM）是Real DOM的内存表示形式。UI的展示形式被保存在内存中并与真实的DOM同步。这是在调用的渲染函数和在屏幕上显示元素之间发生的一个步骤。整个过程被称为reconciliation。

Real DOM  VS  Virtual DOM
``` 
          Real DOM         |     Virtual DOM
          更新较慢          |         更新较快
       可以直接更新HTML     |    无法直接更新HTML
 如果元素更新，则创建新的DOM | 如果元素更新，则更新JSX
       DOM操作非常昂贵      |    DOM操作非常简单
       较多的内存浪费       |     没有内存浪费
```
## 25.Virtual DOM如何工作
Virtual DOM分为三个简单的步骤
1. 每当任何底层数据发生更改时，整个UI都将以Virtual DOM的形式重新渲染。
2. 然后计算先前Virtual DOM对象和新的Virtual DOM对象之间的差异。
3. 一旦计算完成，真实的DOM将只更新实际更改的内容。

## 26.Shadow DOM和Virtual DOM之间有什么区别？
Shadow DOM是一种浏览器技术，它解决了构建网络应用的脆弱性问题。Shadow DOM修复了CSS和DOM。它在网络平台中引入作用域样式。无需工具或命名约定，你即可使用原生JavaScript捆绑CSS和标记、隐藏实现详情以及编写独立组件。Virtual DOM是一个由JavaScript库在浏览器API之上实现的概念。

## 27.什么是 React Fiber？
Fiber 是 React v16 中新的 reconciliation 引擎，或核心算法的重新实现。React Fiber 的目标是提高对动画，布局，手势，暂停，中止或者重用任务的能力及为不同类型的更新分配优先级，及新的并发原语等领域的适用性。

## 28.React Fiber的主要目标是什么？
React Fiber 的目标是提高其在动画、布局和手势等领域的适用性。它的主要特性是 incremental rendering: 将渲染任务拆分为小的任务块并将任务分配到多个帧上的能力。

## 29.什么是受控组件？
在随后的的用户输入中，能够控制表单中输入元素的组件被称为受控组件，即每个状态更改都有一个相关联的处理程序。

例如，我们使用下面的handleChange函数将输入框的值转换成大写：
``` 
handleChange(event){
  this.setState({value:event.target.value.toUpperCase())
}
```

## 30.什么是非受控组件
非受控组件是在内部存储其自身状态的组件，当需要时，可以使用ref查询DOM并查找其当前值。这有点像传统的HTML。

在下面的UserProfile组建中，我们通过ref引用`name`输入框。
``` 
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
    }
    handleSubmit(event){
        alert(`A name was submitted:${this.input.current.value}`);
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {'Name:'}
                    <input type="text" ref={this.input}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
```

## 31.createElement和cloneElement有什么区别？
JSX元素将被转换为`React.createElement()`函数来创建React元素，这些对象将用于表示UI对象。而`cloneElement`用于克隆元素并传递新的属性。
 
 
 ## 32.在React中的提升状态是什么？
 当多个组件需要共享相同的更改数据时，建议将共享状态提升到最接近的共同祖先。这意味着，如果两个子组件共享来自父组件的相同数据，则将状态移动到父组件，而不是在两个子组件中维护局部状态。
 
 ## 33.组件生命周期的不同阶段是什么？
 组件生命周期有三个不同的生命周期阶段：
 1. Mounting：组件已经准备好挂载到浏览器的DOM中。此阶段包含来自`constructor()`,`getDerivedStateFromProps()`,`render()`和`componentDidMount()`生命周期方法中的初始化过程。
 
 2. Updating：在此阶段，组件以两种方式更新，发送前的属性并使用`setState()`或`forceUpdate()`方法更新状态。此阶段包含`getDerivedStateFromProps()`,`shouldComponentUpdate()`,`render()`,`getSnapshotBeforeUpdate()`和`componentDidUpdate()`生命周期方法。
 3.Unmounting:在这个最后阶段，不需要组件，它将从浏览器DOM中卸载。这个阶段包含`componentWillUnmount()`生命周期方法。
 
 值得一提的是，在将更改应用到DOM时，React内部也有阶段概念。它们按如下方式分隔开：
 1. Render组件将会进行无副作用渲染。这适用于纯组件（Pure Component），在此阶段，React可以暂停，中止或重新渲染。
 2. Pre-commit在组件实际将更改应用于DOM之前，有一个时刻允许React`getSnapshotBeforeUpdate()`捕获一些DOM信息（例如滚动位置）。
 3. Commit React操作DOM并分别执行最后的生命周期：`domponentDidMount()`在DOM渲染完成后调用，`componentDidUpdate()`在组建更新时调用，`componentWillUnmount()`在组件卸载时调用。
 
 ## 34.React生命周期方法有哪些？
 React 16.3+
 * *getDerivedStateFromProps*:在调用`render()`之前调用，并在每次渲染时调用。需要使用派生状态的情况是很罕见的。
 * *componentDidMount*:首次渲染后调用，所有的Ajax请求、DOM或状态更新、设置事件监听器都应该在此处发生。
 * *shouldComponentUpdate*:确定组件是否应该更新。默认情况下，它会返回true。如果你确定在更新状态或属性后不需要渲染组件，则可以返回false值。它是一个提高性能的好地方，因为它允许你在组件接收新属性时阻止重新渲染。
 * *getSnapshotBeforeUpdate*:在最新的渲染输出提交给DON前将会立即调用，这对于从DOM捕获信息（比如：滚动位置）很有用。
 * *componentDidUpdate*:它主要用于更新DOM以响应prop或state更改。如果`shouldComponentUpdate()`返回false，则不会触发。
 * *componentWillUnmount*:当一个组件被从DOM中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。

 Before 16.3
 * *componentWillMount*:在组件render()前执行，用于根组件中的应用程序级别配置。应该避免在该方法中引入任何的副作用或订阅。
 * *componentDidMount*: 首次渲染后调用，所有得 Ajax 请求、DOM 或状态更新、设置事件监听器都应该在此处发生。
 * *componentWillReceiveProps*:在组件接收到新属性前调用，若你需要更新状态响应属性改变（例如，重置它），你可能需对比this.props和nextProps并在该方法中使用this.setState()处理状态改变。
 * *shouldComponentUpdate()*:确定组件是否应该更新。 默认情况下，它返回true。 如果你确定在更新状态或属性后不需要渲染组件，则可以返回false值。 它是一个提高性能的好地方，因为它允许你在组件接收新属性时阻止重新渲染。
 * *componentWillUpdate*: 当`shouldComponentUpdate`返回`true`后重新渲染组件之前执行，注意你不能在这调用 `this.setState()`
 * *componentDidUpdate*: 它主要用于更新 DOM 以响应 prop 或 state 更改。 如果shouldComponentUpdate()返回false，则不会触发。
 * *componentWillUnmount*:当一个组件被从 DOM 中移除时，该方法被调用，取消网络请求或者移除与该组件相关的事件监听程序等应该在这里进行。
 
 ## 35.什么是高阶组件（HOC）
 高阶组件（HOC）就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件，它只是一种模式，这种模式是由`react`自身的组合性质必然产生的。
 
 我们将它们称为纯组件，因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件中的任何行为。
 ``` 
 const EnhancedComponent = higherOrderComponent(wrappedComponent)
 ```
 HOC有很多用例：
 1. 代码复用，逻辑抽象化
 2. 渲染劫持
 3. 抽象化和操作状态（state）
 4. 操作属性（props）
 
 ## 36.如何为高阶组件创建属性代理？
 你可以使用属性代理模式向输入组件增加或编辑属性（props）：
 ``` 
 export const HOC = (WrappedComponent)=>{
     return class Test extends Component{
         render(){
             const newProps = {
                 title:'New Header',
                 footer:false,
                 showFeatureX:false,
                 showFeatureY:true
             };
             return <WrappedComponent {...this.props} {...newProps}/>
         }
     }
 }
 ```
 
 ## 37.什么是上下文（Context）？
 Context通过组件数提供了一个传递数据的方法，从而避免了在每一个层级手动的传递props。比如，需要在应用中许多组件需要访问登录用户信息、地区偏好、UI主题等。
 ``` 
 //创建一个theme context，默认theme的值为light
 
 const ThemeContext = React.createContext('light');
 function ThemedButton(props){
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme = {theme} />}
    </ThemeContext.Consumer>
  )
 }
 
// 中间组件
function Toolbar(props){
    return (
      <div>
        <ThemedBNutton/>
      </div>
    )
}

class App extends Component{
  render(){
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar>
      </ThemeContext.Provider>
    )
  }
}
 ```
 
 ## 38.children 属性是什么？
 Children 是一个属性（`this.props.children`）,它允许你将组件作为数据传递给其他组件，就像你使用的任何其他组件一样。在组建的开始和结束标记之间放置的组件树将作为children属性传递给该组件。
 
 React API 中有许多方法中提供了这个不透明数据结构的方法，包括：`React,children.map`、`React.children.forEach`、`React.children.count`、`React.children.only`、`React.children.toArray`.
 ``` 
 const MyDiv = React.createClass({
  render:function(){
    return <div>{this.props.children}</div>
 })
 
 ReactDOM.render(
 <MyDiv>
  <span>{'Hello'}</span>
  <span>{`World'}</span>
  </MyDiv>,
  node
 )
 ```
 
 ## 39.怎样在React中写注释？
 React/JSX中的注释类似于JavaScript的多行注释，但是是用大括号括起来。
 
 单行注释：
 ``` 
 <div>
 {/* 单行注释（在原生JavaScript中，单行注释用双斜杠（//）表示 ）*/}
 {`Welcome ${user},let's play React`}
 </div>
 ```
 多行注释:
 ``` 
 <div>
 {/* 多行注释超过
 一行*/}
 {`Welcome ${user},let;s play React`}
 </div>
 ```
 
 ## 40.构造函数使用带props参数的目的是什么？
 在调用`super()`方法之前，子类构造函数不能使用`this`引用。这同样适用于ES6子类。将props参数传递给`super()`的主要原因是为了在构造函数中访问`this.props`.
 
 带props参数：
 ``` 
 class MyComponent extends Component{
  constructor(props){
    super(props)
    console.log(this.props)//print {name:'John',age:42}
  }
 }
 ```
 不带props参数:
 ``` 
 class MyComponent extends Component{
    constructor(props){
      super()
      console.log(this.props)//prints undefined
      console.log(props) // print {name:'John',age:42}
    }
    render(){
      console.log(this.props) //prints {name:'John',age:42}
    }
 }
 ```
 上面的代码片段显示`this.props`仅在构造函数中有所不同。它在构造函数之外是相同的。
 
 ## 41.什么是调节？
 当组件props或state发生更改时，React通过将新返回的元素与先前呈现的元素进行比较来确定是否需要实际的DOM更新。当它们不相等时，React将更新DOM，此过程称为reconciliation。
 
 ## 42.如何使用动态属性名设置state？
 如果你使用ES6或Babel转换器来转换你的JSX代码，那么你可以使用计算属性名称来完成此操作。
 ```  
 handleInputChange(event){
  this.setState({[event.target.id]:event.target.value})
 }
 ```
 
## 43.每次组件渲染时调用函数的常见错误是什么？
你需要确保在将函数作为参数传递时未调用该函数。
``` 
render(){
  //wrong:handleClick is called insert of passed as a reference
  return <button onClick={this.handleClick()}>{'Click Me'}</button>
}
```
传递函数本身应该没有括号。

## 44.为什么有组件名称要首字母大写？
这是必要的，因为组件不是DOM元素，他们是构造函数。此外，JSX中，小写标记名称是指HTML元素，而不是组件。

## 45.为什么React使用className而不是class属性？
`class`是JavaScript中的关键字，而JSX是JavaScript的扩展。这就是为什么React使用`className`而不是`class`的主要原因。传递一个字符串作为className的属性。
``` 
render(){
  return <span className={'menu navigation-menu`}>{'Menu'}</span>
}
```
在实际项目中，我们经常使用classnames来方便我们操作className

## 46.什么是Fragments?
它是React中常见模式，用于组件返回多个元素。Fragments可以让你聚合一个子元素列表，而无需向DOM添加额外节点。
``` 
render(){
  return (
    <React.Fragment>
      <ChildA/>
      <ChildB/>
      <ChildC/>
    </React.Fragment>
  )
}
```
以下是简洁语法，但是在一些工具中还不支持
``` 
render(){
  return (
    <>
      <ChildA/>
      <ChildB/>
      <ChildC/>
    </>
  )
}
```
> 译注：React 16 以前，render 函数的返回必须有一个根节点，否则报错。
 
 ## 47. 为什么使用Fragments比使用容器div更好？
 1. 通过不创建额外的DOM节点，Fragments更快并且使用更少的内存。这在非常大而深的节点树时很有好处。
 2. 一些CSS机制如Flexbox和CSS Grid具有特殊的父子关系，如果在中间添加div将使得很难保持所需的结构。
 3. 在DOM审查器中不会那么的杂乱。
 
 ## 48.在React中什么是Portal？
 Portal提供了一种很好的将子节点渲染到父组件以外的DOM节点的方式。
 ``` 
 ReactDOM.createPortal(child,container)
 ```
 第一个参数是任何可渲染的React子节点，例如元素，字符串或片段。第二个参数是DOM元素。
 
 ## 49.什么是无状态组件？
 如果行为独立于其状态，则它可以是无状态组件。你可以使用函数或类来创建无状态组件。但除非你需要在组件中使用生命周期钩子，否则你应该选择函数组件。无状态组件有很多好处：它们易于编写，理解和测试，速度更快，而且你可以完全避免使用this关键字。
 
 ## 50.什么是有状态组件？
 如果组件的行为依赖与组件的state，那么它可以被称为有状态组件。这些有状态组件总是类组件，并且具有在`constructor`中初始化的状态。
 ``` 
 class App extendsComponent{
  constructor(props){
    super(props)
    this.state={count:0}
  }
  render(){
    //...
  }
 }
 ```
 
 ## 51.在React中如何校验props属性？
 当应用程序以开发模式运行的时候，React将会自动检查我们在组件上设置的所有属性，以确保它们具有正确的类型。如果类型不正确，React将在控制台中生成警告信息。由于性能影响，它在生产模式下被禁用。使用isRequired定义为必填属性。
 
 预定义的prop类型：
 1. PropTypes.number
 2. PropTypes.string
 3. PropTypes.array
 4. PropTypes.object
 5. PropTypes.func
 6. PropTypes.node
 7. PropTypes.element
 8. PropTypes.bool
 9. PropTypes.symbol
 10. PropTypes.any
 
 我们可以为User组件定义propTypes，如下所示：
 ``` 
 import React from 'react'
 import PropTypes from 'prop-types'
 
 class User extends React.Component {
   static propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number.isRequired
   }
 
   render() {
     return (
       <>
         <h1>{`Welcome, ${this.props.name}`}</h1>
         <h2>{`Age, ${this.props.age}`}</h2>
       </>
     )
   }
 }
 ```
 **注意: 在 React v15.5 中，PropTypes 从 React.PropTypes 被移动到 prop-types 库中。**
 
 ## 52.React 的优点是什么？
 1. 使用Virtual DOM提高应用程序的性能。
 2. JSX使代码易于读写。
 3. 它支持在客户端和服务端渲染。
 4. 易于与框架（Angular，Backbone）集成，因为它只是一个视图库。
 5. 使用Jest等工具轻松编写单元与集成测试。
 
 ## 53.React的局限性是什么？
 1. React只是一个视图库，而不是一个完整的框架。
 2. 对于web开发初学者来说，有一个学习曲线。
 3. 将React集成到传统的MVC框架中需要一些额外的配置。
 4. 代码复杂性随着内联模板和JSX的增加而增加。
 5. 如果有太多的小组件可能增加项目的庞大和复杂。
 
 ## 54.在React v16中的错误边界是什么？
 错误边界是在其自组件树中的任何位置捕获JavaScript错误、记录这些错误并显示回退UI而不是崩溃的组件树的组件。
 如果一个类组件定义了一个名为`componentDidCatch(error,info)`或`static getDerivedStateFromError()`新的生命周期方法，则该类组件将成为错误的边界：
 ``` 
 class ErrorBoundary extends Component{
  constructor(props){
    super(props)
    this.state={hasError:false}
  }
  componentDidCatch(error,info){
    logErrorToMyService(error,info)
  }
  static getDerivedStateFromError(error){
    return {hasError:true}
  }
  render(){
    if(this.state.hasError){
      return <h1>{'Something went wrong'}</h1>
    }
    return this.props.children
  }
 }
```
之后，将其作为常规组件使用
``` 
<ErrorBoundary>
  <MyWidget/>
</ErrorBoundary>
```

## 55.在React v15中如何处理错误边界？
React v15 使用 `unstable_handleError `方法为错误边界提供了非常基础的支持。已在 React v16 中，将其重命名为`componentDidCatch`。

## 56.静态类型检查推荐的方法是什么？
通常，我们使用 PropTypes 库（在 React v15.5 之后 React.PropTypes 被移动到了 prop-types 包中），在 React 应用程序中执行类型检查。对于大型项目，建议使用静态类型检查器，比如 Flow 或 TypeScript，它们在编译时执行类型检查并提供 auto-completion 功能。

## 57.react-dom包的用途是什么？
`react-dom`包提供了特定的DOM方法，可以在应用程序的顶层使用。大多数的组件不需要使用此模块。该模块中提供的一些方法如下：
1. render()
2. hydrate()
3. unmountComponentAtNode()
4. findDOMNode()
5. createPortal()

 ## 58.`react-dom`中render方法的目的是什么？
 此方法用于将React元素渲染到所提供容器中的DOM结构中，并返回对组件的引用。如果React元素之前已被渲染到容器中，它将对其执行更新，并且只在需要改变DOM以反映最新的更改。
 ``` 
 ReactDOM.render(element,container[,callback])
 ```
 如果提供了可选的回调函数，该函数将在组件被渲染或更新后执行。
 
 ## 59.ReactDOMServer是什么？
 `ReactDOMServer`对象使你能够将组件渲染为静态标记（通常用于Node服务器中）,此对象主要用于服务端渲染（SSR）。以下方法可用于服务器和浏览器环境：
 1. renderToString()
 2. renderToStaticMarkup()
 
 例如，你通常运行基于Node的web服务器，如Express，Hapi或Koa，然后你调用`renderToString`将根组件渲染为字符串，然后作为响应进行发送。
 ``` 
 //using Express
 import {renderToString} from 'react-dom/server'
 import MyPage from './MyPage'
 
 app.get('/',(req,res)=>{
  res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
  res.write('<div id="content">')
  res.write(renderToString(<MyPage/>))
  res.write('</div></body></html>')
  res.end()
 })
 ```
 ## 60.在React中如何使用innerHTML？
 `dangerouslySetInnerHTML`属性是React用来替代在浏览器DOM中使用innerHTML。与innerHTML一样，考虑到跨脚本攻击（XSS），使用此属性也是有风险的。使用时，你只需传递以__html作为键，而HTML文本作为对应值的对象。
 
 在本示例中MyComponent组件使用`dangerouslySetInnerHTML`属性来设置HTML标记：
 ``` 
 function createMarkup(){
  return {__html:'First &middot; Second'}
}

function MyComponent(){
  return <div dangerouslySetInnerHTML = {createMarkup()} />
}
 ```
 
 ## 61.如何在React中使用样式？
 `style`属性接受含有camelCased(驼峰)属性的javaScript对象，而不是CSS字符串。这与DOM样式中的JavaScript属性一致，效率更高，并且可以防止XSS安全漏洞。
 ``` 
 const divStyle = {
  color:'blue',
  backgroundImage:'url('+imgUrl+')'
 };
 
 function HelloWorldComponent(){
  return <div style={divStyle}>Hello World</div>
 }
 ```
 为了与在 JavaScript 中访问 DOM 节点上的属性保持一致，样式键采用了 camelcased（例如node.style.backgroundImage）。
 
 ## 62.在React中事件有何不同？
 处理React元素中的事件有一些语法差异：
 1. React事件处理程序是采用驼峰而不是小写来命名的。
 2. 使用JSX，你将传递一个函数作为事件处理程序，而不是字符串。
 
 ## 63.如果在构造函数中使用`setState`会发生什么？
 当你使用`setState()`时，除了设置状态对象之外，React还会重新渲染组件及其所有的子组件。你会得到这样的错误：Can only update a mounted or mounting component。因此我们需要在构造函数中使用this.state初始化状态。
 
 ## 64.索引作为键的影响是什么？
 Keys 应该是稳定的，可预测的和唯一的，这样React就能够跟踪元素。
 
 在下面的代码片段中，每个元素的键将基于列表项的顺序，而不是绑定到即将展示的数据上，这将限制React能够实现的优化。
 ```  
 {
  todos.map((todo,index)=>{
    return <Todo {...todo} key={index} />
  })
 }
 ```
 假设 `todo.id`对此列表是唯一且稳定的，如果将此数据作为唯一键，那么React将能够对元素进行重新排序，而无需重新创建他们。
 ``` 
 {
   todos.map((todo,index)=>{
     return <Todo {...todo} key={todo.id} />
   })
  }
 ```
 ## 65.在`ComponentWillMount（）`方法中使用`setState()`好吗？
 建议避免在`componentWillMount()`生命周期方法中执行异步初始化。在mounting发生之前会立即调用`componentWillMount()`，且它在`render()`之前被调用，因此在此方法中更新状态将不会触发重新渲染。应避免在此方法中引入任何副作用或订阅操作。我们需要确保对组件初始化的异步调用发生在`componentDidMount()`中，而不是在`componentWillMount()`中。
 ``` 
 componentDidMount(){
  axious.get('api/todos').then(result=>{
    this.setState({message:[...result.data]})
  })
 }
 ```
 ## 66.如果在初始状态中使用props属性会发生什么？
 如果在不刷新组件的情况下更改组件上的属性，则不会显示新的属性值，因为构造函数永远不会更新组件的当前状态。只有在首次创建组件时才会用props属性初始化状态。
 
 以下组件将不显示更新的输入值：
 ``` 
 class MyComponent extends Component{
 
  constructor(props){
    super(props)
    this.state={
      records:[],
      inputValue:this.props.inputValue
     }
  }
  render(){
    return (
      <div>{this.state.inputValue}</div>
    )
  }
 }
 ```
 在render方法使用props将会显示更新的值：
 ``` 
 class MyComponent extends Component{
  constructor(props){
    super(props)
    this.state={
      records:[]
    }
  }
  render(){
    return <div>{this.props.inputValue}</div>
  }
 }
 ```
 
 ## 67.如何有条件地渲染组件？
 在某些情况下，你希望根据某些状态渲染不同的组件。JSX不会渲染`false`或`undefined`，因此你可以使用`&&`运算符，在某个条件为`true`时，渲染组件中指定的内容。
 ``` 
 const MyComponent = ({name,address})=>{
  return (
    <div>
      <h2>{name}</h2>
      {address&&<p>{address}</p>}
    </div>
  )
 }
 ```
 如果你需要一个`if-else`条件，那么使用三元运算符：
 ``` 
 const MyComponent = ({name,address})=>{
  return (
    <div>
      <h2>{name}</h2>
      {address?<p>{address}</p>:<p>{'Address is not avaliable'}</p>}
    </div>
  )
 }
 ```
 ## 68.为什么在DOM元素上展开props需要小心？
 当我们展开属性时，我们会遇到添加未知HTML属性的风险，这是一种不好的做法。相反，我们可以使用属性解构和`...rest`运算符，因此它只添加所需要的props属性。例如：
 ``` 
 const ComponentA = ()=>{
  return <ComponentB isDisplay={true} className={'componentStyle'}/>
 }
 
 const ComponentB = ({isDisplay,...domProps})=>{
  return (
    <div {...domProps}>{'ComponentB'}</div>
  )
 }
 ```
 ## 69.在React中如何使用装饰器？
 你可以装饰你的类组件，这与将组件传递到函数中是一样的。装饰器是修改组件功能灵活且易读的方式。
 ``` 
 @setTitle('Profile')
 
 class Profile extends Component{
  //...
 }
 /*
  title is a string that will be set as a document title WrappedComponent is what our decorator will receive when put directly above a component class as seen in the example above
 */
 const setTitle = (title)=>(WrappedComponent)=>{
  return class extends Component{
    componentDidMount(){
      document.title = title
    }
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
 }
 ```
 
 ## 70.如何memoize(记忆)组件？
 有可用于函数组件的memoize库。例如`moize`库可以将组件存储在另一个组件中。
 ``` 
 import moize from 'moize';
 import Component from './components/Component'
 const MemoizedFoo = moize.react(Component)
 
 const Consumer = ()=>{
  <div>
    {'I will memoize the following entry:'}
    <MemoizedFoo/>
  </div>
 }
 ```
 
 ## 71.如何实现 Server Side Rendering 或 SSR？
 React已经配备了用于处理Node服务器上页面渲染的功能。你可以使用特殊版本的DOM渲染器，它遵循与客户端相同的模式。
 ``` 
 import ReactDOMServer from 'react-dom/server'
 import App from './App'
 
 ReactDOMServer.renderToString(<App/>)
 ```
 此方法将以字符串形式输出常规HTML，然后将其作为服务器响应的一部分放在页面正文中。在客户端，React检测预渲染的内容并无缝地衔接。
 
 ## 72.如何在React中启用生产模式？
 你应该使用`webpack`的`DefinePlugin`方法将`NODE_ENV`设置为`production`，通过它你可以去除propType验证和额外警告等内容。除此之外，如果你压缩代码，如使用Uglify的死代码消除，以去掉用于开发的代码和注释，它将大大减小包的大小。
 
 ## 73.什么是CRA及其好处？
 `create-react-app` CLI工具允许你无需配置步骤，快速创建和运行React应用。
 
 让我们使用CRA来创建Todo应用：
 ``` 
 # Installation
 $ npm install -g create-react-app
 
 # Create new project
 $ create-react-app todo-app
 $ cd todo-app
 
 # Build,test and run
 $ npm run build
 $ npm run test
 $ npm start
 ```
 它包含了构建React应用程序所需的一切：
 1. React，JSX，ES6,和Flow语法支持。
 2. ES6之外的语言附加功能，比如对象扩展运算符。
 3. Autoprefixed CSS,因此你不再需要 -webkit-或其他前缀
 4. 一个快速的交互式单元测试运行程序，内置了对覆盖率报告的支持。
 5. 一个实施开发服务器，用于警告常见错误。
 6. 一个构建脚本，用于打包用于生产中包含hashes和sourcemaps的JS、CSS和Images文件。
 
 ## 74.在mounting阶段生命周期方法的执行顺序是什么？
 在创建组件的实例并将其插入到DOM中时，将按以下顺序调用生命周期方法。
 1. constructor()
 2. static getDerivedStateFromProps()
 3. render()
 4. componentDidMount()
 
 ## 75.在React v16中，哪些生命周期方法将被弃用？
 以下生命周期方法将成为不安全的编码实践，并且在异步渲染方面会更有问题。
 1. componentWillMount()
 2. componentWillReceiveProps()
 3. componentWillUpdate()

从React v16.3开始，这些方法使用UNSAFE_前缀作为别名，未加前缀的版本将在React v17中被移除。
## 76.生命周期方法`getDerivedStateFromProps()`的目的是什么？
新的静态`getDerivedStateFromProps()`生命周期方法在实例化组件之后以及重新渲染组件之前调用。它可以返回一个对象用于更新状态，或者返回null指示新的属性不需要任何状态更新。
``` 
class MyComponent extends Component{
  static getDerivedStateFromProps(props,state){
    //...
  }
}
```
此生命周期方法与`componentDidUpdate()`一起涵盖了`componentWillReceivedProps()`所有用例。

## 77.生命周期方法`getSnapshotBeforeUpdate()`的目的是什么？
新的`getSnapshotBeforeUpdate()`生命周期方法在DOM更新之前被调用。此方法的返回值将作为第三个参数传递给`componentDidUpdate()`.
``` 
class MyComponent extends Component{
  getSnapshotBeforeUpdate(prevProps,prevState){
    //...
  }
}
```
此生命周期方法与`componentDidUpdate()`一起涵盖了`componentWillUpdate()`的所有用例。

## 78.推荐的组件命名方法是什么？
建议通过引用命名组件，而不是使用displayName。

使用`displayName`命名组件：
``` 
export default React.createClass({
  displayName:'TodoApp',
  //...
})
```
推荐的方法：
``` 
export default class TodoApp extends Component{
  //...
}
```
## 79.在组件类中方法的推荐顺序是什么？
从mounting到 render stage阶段推荐的方法顺序：
1. static方法
2. constructor()
3. getChildContext()
4. componentWillMount()
5. componentDidMount()
6. componentWillReceiveProps()
7. shouldComponentUpdate()
8. componentWillUpdate()
9. componentDidUpdate()
10. componentWillUnmout()
11. 点击处理程序或事件处理程序，如`onClickSubmit()`或`onChangeDescription`
12. 用于渲染的getter方法，如`getSelectReason()`或`getFooterContent()`
13. 可选的渲染方法，如`renderNavigation()`或`renderProfilePicture`
14. render()
  
## 80.什么是switching组件？
switching组件是渲染多个组件之一的组件。我们需要使用对象将prop映射到组件中。

例如，以下的switching组件将基于page属性显示不同的页面：
``` 
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicesPage from './servicesPage'
import ContactPage from './ContactPage'

const PAGES = {
  home:HomePage,
  about:AboutPage,
  services:ServicesPage,
  contact:ContactPage
}

const Page = (props)=>{
  const Handler = PAGES[props.page]||ContactPage
  return <Handler {...props} />
}

Page.protoTypes = {
  page:ProtoTypes.oneOf(Object.keys(PAGES)).isRequired
}

```
## 81.为什么我们需要将函数传递给setState()方法？
这背后的原因是`setState()`是一个异步操作。出于性能原因，react会对状态更改进行处理，因此在调用`setState()`方法之后，状态可能不会立即更改。这意味着当你调用`setState()`方法时，你不应该依赖当前状态，因为你不能确定当前状态应该是什么。这个问题的决绝方案是将一个函数传递给`setState()`，该函数会以上一个状态作为参数。通过这样做，你可以避免由于`setState()`的异步性质而导致用户在访问时获取旧状态值的问题。

假设初始计数值为零。在连续三次增加操作之后，该值将只增加一个。
``` 
//assuming this.state.count === 0
this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})
this.setState({count:this.state.count+1})
//this.state.count === 1,not 3
```

如果将函数传递给`setState()`，则count将正确递增
``` 
this.setState((prevState,props)=>({
  count:prevState.count+props.increment
}))
//this.state.count===3 as expected
```

## 82.在React中什么是严格模式？
`React.strictMode`是一个有用的组件，用于突出显示应用程序中的潜在问题。就像`<Fragment>`,`<StrictMode>`一样，它们不会渲染任何额外的DOM元素。它为其后代激活额外的检查和警告。这些检查仅适用于开发模式。
``` 
import React from 'react'
function ExampleApplication(){
  return (
    <div>
      <Header/>
      <React.StrictMode>
        <div>
          <ComponentOne/>
          <ComponentTwo/>
        </div>
      </React.strictMode>
      <Footer/>
    </div>
  )
}
```
在上面的示例中，strict mode检查仅应用于`<ComponentOne>`和`<ComponentTwo>`组件

## 83.React Mixins是什么？
Mixins是一种完全分离组件通用功能的方法。Mixins不应该被继续使用，可以用高阶组件或装饰器来替换。

最常用的mixins是`PureRenderMixin`。当props和状态与之前的props和状态相等时，你可能在某些组件中使用它来防止不必要的重新渲染：
``` 
const PureRenderMixin = require('react-addons-pure-render-mixin')

const Button = React.createClass({
  mixins:[PureRenderMixin],
  //...
})
```

## 84.为什么`isMounted()`是一个反模式，而正确的解决方案是什么？
`isMounted()`的主要场景是避免在组件卸载后调用`setState()`,因为它会发出警告。
``` 
if(this.isMounted){
  this.setState({...})
}
```
在调用`setState()`之前检查`isMounted()`会消除警告，但也会破坏警告的目的。使用`isMounted()`有一种代码味道，因为你要检查的唯一原因是你认为在卸载组建后可能持有引用。

最佳解决方案是找到在组件卸载后调用`setState()`的位置，并修复它们。这种情况最常发生在回调中，即组件正在等待某些数据并在数据到达之前卸载。理想情况下，在卸载之前，应在`componentWillUnmount()`中取消任何回调。

## 85.React中支持哪些指针事件？
Pointer Events提供了处理所有输入事件的统一方法。在过去，我们有一个鼠标和相应的事件监听器来处理它们，但现在我们有许多与鼠标无关的设备，比如带触屏的手机或笔记本。我们需要记住，这些事件只能在支持Pointer Event规范的浏览器中工作。

目前以下事件类型在React DOM中是可用的：
1. onPointerDown
2. onPointerMove
3. onPointerUp
4. onPointerCancel
5. onGotPointerCapture
6. onLostPointerCapture
7. onPointerEnter
8. onPointerLeave
9. onPointerOver
10. onPointerOut

## 86.为什么组件名称应该以大写字母开头？
如果使用JSX渲染组件，则该组件的名称必须以大写字母开头，否则React将会抛出无法识别标签的错误。这种约定是因为只有HTML元素和SVG标签可以以小写字母开头。

定义组件类的时候，你可以以小写字母开头，但在导入时应该使用大写字母。
``` 
class myComponent extends Component{
  render(){
    return (
      <div>hello world</div>
    )
  }
}

export default myComponent
```
当在另一个文件导入时，应该以大写字母开头：
``` 
import MyComponent from './MyComponent'
```

## 87.在React v16中是否支持自定义DOM属性？
是的，在过去React或忽略未知的DOM属性。如果你编写JSX属性React无法识别，那么React将跳过它。例如：
``` 
<div mycustomattribute={'something'}/>
```
在React 15中将在DOM中渲染一个空的div:
``` 
<div/>
```

在React 16中，任何未知的属性都将会在DOM显示：
``` 
<div mycustomattribute = 'something'/>
```
这对于应用特定浏览器的非标准属性，尝试新的DOM APIs与集成第三方库来说非常有用。

## 88.constructor 和 getInitialState有什么区别？
当使用ES6类时，你应该在构造函数中初始化状态，而当你使用`React.createClass()`时，就需要使用`getInitialState()`方法。

使用ES6类
``` 
class MyComponent extends Component{
  constructor(props){
    super(props)
    this.state={} //initial state
  }
}
```
使用React.createClass():
``` 
const MyComponent = React.createClass({
  getInitialState(){
    return {} //initial state
  }
})
```
**注意**： 在 React v16 中 React.createClass() 已被弃用和删除，请改用普通的 JavaScript 类。

## 89.是否可以在不调用setState方法的情况下，强制组件重新渲染？
默认情况下，当组件的状态或属性改变时，组件将重新渲染。如果你的`render()`方法依赖于其他数据，你可以通过调用`forceUpdate()`来告诉React，当前组件需要重新渲染。
``` 
component.forceUpdate(callback)
```
建议避免使用`forceUpdate()`，并且只在`render()`方法中读取`this.state`和`this.props`

## 90.在使用ES6类的React中`super()`和`super(props)`有什么区别？
当你想要在`constructor()`函数中访问`this.props`,你需要将props传递给`super()`方法。

使用`super(props)`:
``` 
class MyComponent extends Component{
  constructor(props){
    super(props)
    console.log(this.props) // {name:'John',...}
  }
}
```
使用`super()`
``` 
class MyComponent extends Component{
  constructor(props){
    super()
    console.log(this.props) // undefined
  }
}
```
在`constructor()`函数之外，访问`this.props`属性会显示相同的值。

## 91.在JSX中如何进行循环？
你只需使用ES6箭头函数语法的`Array.prototype.map`即可。例如，`items`对象数组将会被映射成一个组件数组：
``` 
<tbody>
  {items.map(item => <SomeComponent key={item.id} name={item.name} />)}
</tbody>
```
你不能使用`for`循环进行迭代
``` 
<tbody>
  for (let i = 0; i < items.length; i++) {
    <SomeComponent key={items[i].id} name={items[i].name} />
  }
</tbody>
```
这是因为JSX标签会被转换成函数调用，并且你不能在表达式中使用语句。但这可能会由于`do`表达式而改变，它们是第一阶段提案。

## 92.如何在attribute引号中访问props属性？
React（或JSX）不支持属性值内的变量插值。下面的形式将不起作用：
``` 
<img className="image" src = 'image/{this.props.image}'
```
但你可以将JS表达式作为属性值放在大括号内。所以下面的表达式是有效的：
``` 
<img className = 'image' src = {'image/'+this.props.image} />
```
使用模板字符串也是可以的：
``` 
<img className='image' src={`image/${this.props.image}`}
```
## 93.如何有条件地应用样式类？
你不应该在引号内使用大括号，因为它将被计算为字符串
``` 
<div className="btn-pannel {this.props.visible? 'show':'hidden'}"
```
相反，你需要将大括号移到外部（不要忘记在类名之间添加空格）：
``` 
<div className={'btn-pannel '+(this.props.visible?'show':'hidden') }>
```
模板字符串也可以工作：
``` 
<div className={`btn-pannel ${this.props.visible?'show':'hidden'}`}>
```
## 94. React和ReactDOM之间有什么区别？
`react`包中包含`React.createElement()`,`React.Component`,`React.Children`，以及与元素和组件类相关的其他帮助程序。你可以将这些视为构建组件所需的同构或通用帮助程序。`react-dom`包中包含了`ReactDOM.render()`,在`react-dom/server`包中有支持服务端渲染的`ReactDOMServer.renderToString()`和`ReactDOMServer.renderToStaticMarkup()`方法。

## 95.为什么ReactDOM从React分离出来？
React团队致力将所有的与DOM相关的特性抽取到一个名为ReactDOM的独立库中。React v0.14是第一个拆分后的版本。通过查看一些软件包，`react-native`,`react-art`,`react-canvas`,和`react-three`,很明显，React的优雅和本质与浏览器或DOM无关。为了构建更多React能应用的环境，React团队将主要的React包拆分成两个`react`和`react-dom`。这为编写可以在React和ReactNative的web版本之间共享的组件铺平了道路。

## 96. 如何使用React label元素？
如果你尝试使用标准的`for`属性将`<label>`元素绑定到文本输入框，那么在控制台将会打印缺少HTML属性的警告消息。
``` 
<label for={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
```
因为`for`是JavaScript的保留字，请使用HTMLFor来替代
``` 
<label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />
```

## 97.如何合并多个内联的样式对象？
在React中，你可以使用扩展运算符：
``` 
<button style={{...styles.panel.button,...styles.panel.submitButton}}>{'Submit'}</button>
```
如果你使用的是React Native，则可以使用数组表示法：
``` 
<button style={[styles.panel.button,styles.panel.submitButton]}>{'User'}</button>
```

## 98.如何在调整浏览器大小时重新渲染视图？
你可以在`componentDidMount()`中监听`resize`事件，然后更新新尺寸（`width`和`height`）.你应该在`componentWillUnmount()`方法中移除监听。
``` 
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
        window.removeEventListener('resize');
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
```

## 99.`setState()`和`replaceState()`方法之间有什么区别？
当你使用`setState()`时，当前和先前的状态将被合并。`replaceState()`会抛出当前状态。并仅用你提供的内容替换它。通常使用`setState()`,除非你处于某种原因确实需要删除所有以前的键。你还可以在`setState()`中将状态设置为`false/null`,而不是使用`replaceState()`.

## 100.在React状态中删除数组元素的推荐方法是什么？
更好的方法是使用`Array.prototype.filter`方法。

例如，让我们创建用于更新状态的`removeItem()`方法
``` 
removeItem(index){
  this.setState({
    data:this.state.data.filter((item,i)=> i!==index)
  })
}
```
## 101.在React中是否可以不在页面上渲染HTML内容
可以使用最新的版本（>=16.2），以下是可能的选项：
``` 
render(){
  return false
}
```

``` 
render(){
  return null
}
```

``` 
render(){
  return []
}
```

``` 
render(){
  return <React.Fragment></React.Fragment>
}
```

``` 
render(){
  return <></>
}
```
返回`undefined`是无效的。

## 102.如何用React漂亮地显示JSON？
我们可以使用`<pre>`标签，以便保留`JSON.stringify()`的格式：
``` 
const data = { name: 'John', age: 42 }

class User extends React.Component {
  render() {
    return (
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    )
  }
}

React.render(<User />, document.getElementById('container'))
```
## 103.为什么你不能更新React中的props？
React 的哲学是props应该是immutable和top-down。这意味着父级可以向子级发送任何属性值，但子级不能修改接收到的属性。

## 104.如何在页面加载时聚焦一个输入元素？
你可以为`input`元素创建一个`ref`，然后在`componentDidMount()`方法中使用它。
``` 
class App extends React.Component{
  componentDidMount() {
    this.nameInput.focus()
  }

  render() {
    return (
      <div>
        <input
          defaultValue={'Won\'t focus'}
        />
        <input
          ref={(input) => this.nameInput = input}
          defaultValue={'Will focus'}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

## 105.更新状态中的对象有哪些可能的方法？
* 用一个对象调用`setState()`来与状态合并：
    * 使用`Object.assign()`创建对象的副本：
    ``` 
    const user = Object.assign({},this.state.user,{age:42})
    this.setState(user)
    ```
    * 使用扩展运算符：
    ``` 
    const user = {...this.state.user,age:42}
    this.setState(user)
    ```
* 使用一个函数调用`setState()`
``` 
this.setState(prevState=>({
  user:{
    ...prevState.user,
    age:42
  }
}))
```

## 106.我们如何在浏览器中找到当前正在运行的React版本？
你可以使用`React.version`来获取版本：
``` 
const REACT_VERSION = React.version

ReactDOM.render(<div>{`React version:${REACT_VERSION}`}</div>,document.getElementById('app'))
```

## 107.在`create-react-app`项目中导入polyfills的方法有哪些？
* 从`core-js`中手动导入
    * 创建一个名为`polyfills.js`文件，并在根目录下的`index.js`文件中导入它。运行`npm install core-js`或`yarn add core-js` 并导入你所需要的功能特性：
    ``` 
      import 'core-js/fn/array/find'
      import 'core-js/fn/array/includes'
      import 'core-js/fn/number/is-nan'
    ```
* 使用Polyfill服务
通过将以下内容添加到 index.html 中来获取自定义的特定于浏览器的 polyfill：
``` 
<script src='https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes'></script>
```
在上面的脚本中，我们必须显式地请求 Array.prototype.includes 特性，因为它没有被包含在默认的特性集中。

## 108.如何在create-react-app中使用https而不是http？
你只需要使用`HTTPS=true`配置。你可以编辑`package.json`中的scripts部分：
``` 
"scripts":{
  "start":"set HTTPS = true && react-scripts start"
}
```
或直接运行`set HTTPS = true && npm start`

## 109.如何避免在create-react-app中使用相对路径导入？
在项目的根目录中创建一个名为`.env`的文件，并写入导入路径：
``` 
NODE_PATH = src/app
```
然后重新启动开发服务器。现在，你应该能够在没有相对路径的情况下导入`src/app`内的任何内容。

## 110.如何为React Router添加Google Analytics？
在history对象上添加一个监听器以记录每个页面的访问：
``` 
history.listen(function(location){
  window.ga('set','page',location.pathname+location.search)
  window.ga('send','pageview',location.pathname+location.search)
})
```
## 111.如何每秒更新一个组件？
你需要使用`setInterval()`来触发更改，但也需要在组件卸载时清除计时器，以防止错误和内存泄漏。
``` 
componentDidMount(){
  this.interval = setInterval(()=>this.setState({time:Date.now()}),1000)
}

componentWillUnmount(){
  clearInterval(this.interval)
}
```
## 112.如何将vendor prefixes应用于React中的内联样式？
React不会自动应用vendor prefixes，你需要手动添加vendor prefixes.
``` 
<div style={{transform:'rotate(90deg)',WebkitTransform:'rotate(90deg)',msTransform:'rotate(90deg)'}} />
```

## 113.如何使用React和ES6导入和导出组件？
导出组件时，你应该使用默认导出：
``` 
import React from 'react'
import User from 'user'

export default class MyProfile extends React.Component{
  render(){
    return (
      <User type="customer">
      //...
      </User>
    )
  }
}
```
使用export说明符，MyProfile将成为成员并导出到此模块，此外在其他组件中你无需指定名称就可以导入相同的内容。

## 114.为什么组件的构造函数只被调用一次？
React协调算法假设如果自定义组件出现在后续渲染的相同位置，则它与之前的组件相同，因此重用前一个实例而不是创建新实例。

## 115.在React中如何定义常量？
你可以使用ES7的static来定义常量。
``` 
class MyComponent extends React.Component{
  static DEFAULT_PAGINATION = 10
}
```

## 116.在React中如何以编程方式触发点击事件？
你可以使用ref属性通过回调函数获取对底层的`HTMLInputElement`对象的引用，并将该引用存储为类属性，之后你就可以利用该引用在事件回调函数中，使用`HTMLElement.click`方法触发一个点击事件。这可以分为两个步骤：
1. 在render方法创建一个ref:
    ``` 
    <input ref={input=>this.inputElement = input}/>
    ```
2. 在事件处理器中触发点击事件
    ``` 
    this.inputElement.click();
    ```

## 117.在React中是否可以使用async/await？
如果要在React中使用`async/await`，则需要Babel和transform-async-to-generator插件。

## 118.React项目常见的文件结构是什么？
React项目文件结构有两种常见的实践。
1. 按功能或路由分组：构建项目的一种常见方法是将CSS，JS和测试用例放在一起，按功能或路由分组。

2. 按文件类型分组：另一种流行的项目结构组织方法是将类似的文件组合在一起。

## 119.最流行的动画软件包是什么？
React Transition Group和React Motion是React生态系统中流行的动画包。

## 120.模块化样式文件有什么好处？
建议避免在组件中对样式值进行硬编码。任何可能在不同的UI组件之间使用的值都应该提取到它们自己的模块中。

例如，可以将这些样式提取到单独的组件中：
``` 
export const colors = {
  white,
  black,
  blue
}

export const space = [0,8,16,32,64]
```
然后在其他组件中单独导入：
``` 
import {space,color} from './styles`
```

## 121.什么是React流行的特定linters?
ESLint是一个流行的JavaScript linter。有一些插件可以分析特定的代码样式。在React中最常见的一个是名为`eslint-plugin-react`npm 包。默认情况下，它将使用规则检查许多最佳实践，检查内容从迭代器中的键到一组完整的prop类型。另一个流行的插件是`eslint-plugin-jsx-ally`,它将帮助修复可访问性的常见问题。由于JSX提供的语法与常规HTML略有不同，因此常规插件无法获取alt文本和tabindex的问题。

## 122.如何发起AJAX调用以及应该在哪些组件生命周期方法中进行AJAX调用？
你可以使用AJAX库，如Axios，jQuery AJAX和浏览器内置的fetch API。你应该在`componentDidMount()`生命周期方法中获取数据。这样当获取到数据的时候，你就可以使用`setState()`方法来更新你的组件。

例如，从API中获取员工列表并设置本地状态：
``` 
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
```

## 123.什么是渲染属性？
Render props是一种简单的技术，用于使用值为函数的prop属性在组件之间共享代码。下面的组件使用返回React元素的render属性：
``` 
<DataProvider render={data=>(<h1>{`Hello ${data.target}`}</h1>)} />
```
像React Router和DownShift这样的库使用了这种模式。

# React Router
## 124.什么是React Router?
React Router是一个基于React之上的强大路由库，可以帮助您快速地向应用添加视图和数据流，同时保持UI与URL同步。

## 125.React Router与history库的区别？
React Router是history库的包装器，它处理浏览器的window.history与浏览器和哈希历史的交互。它还提供了内存历史记录，这对于没有全局历史记录的环境非常有用，例如移动应用程序开发（React Native）和使用Node进行单元测试。

## 126.在React Router v4中的`<Router>`组件是什么？
React Router v4提供了以下三种类型的`<Router>`组件：
1. `<BrowserRouter>`
2. `<HashRouter>`
3. `<MemoryRouter>`

以上组件将创建browser,hash和memory的history实例。React Router v4通过router对象中的上下文使您的路由器关联的history实例的属性和方法可用。

## 127.history 中的`push()`和`replace()`方法的目的是什么？
一个history实例有两种导航方法：
1. push()
2. replace()
如果您将history视为一个访问位置的数组，则`push()`将向数组添加一个新的位置，`replace()`将用新的位置替换数组中的当前位置。

## 128.如何使用React Router v4中以编程的方式进行导航？
在组件中实现操作路由/导航有三种不同的方法。

1. 使用`withRouter()`高阶函数将注入history对象作为组件的prop。该对象提供了`push()`和`replace()`方法，以避免使用上下文。
    ``` 
    import { withRouter } from 'react-router-dom' // this also works with 'react-router-native'
    
    const Button = withRouter(({ history }) => (
      <button
        type='button'
        onClick={() => { history.push('/new-location') }}
      >
        {'Click Me!'}
      </button>
    ))
    ```
2. 使用`<Route>`组件和渲染属性模式：
`<Route>`组件传递与`withRouter()`相同的属性，因此你将能够通过history属性访问到操作历史记录的方法。
    ``` 
    `import { Route } from 'react-router-dom'
     
     const Button = () => (
       <Route render={({ history }) => (
         <button
           type='button'
           onClick={() => { history.push('/new-location') }}
         >
           {'Click Me!'}
         </button>
       )} />
     )
    ```
3. 使用上下文：
    ``` 
    const Button = (props, context) => (
      <button
        type='button'
        onClick={() => {
          context.history.push('/new-location')
        }}
      >
        {'Click Me!'}
      </button>
    )
    
    Button.contextTypes = {
      history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
      })
    }
    ```
    
## 129. 如何在React Router v4中获取查询字符串参数？
在React Router v4中并没有内置解析查询字符串的能力，因为多年来一直有用户希望支持不同的实现。因此，使用者可以选择他们喜欢的实现方式。建议的方法是使用`query-string`库
``` 
const queryString = require('query-string');

const parsed = queryString.parse(props.location.search);
```
如果你想要使用原生API的话，你也可以使用`URLSearchParams`:
``` 
const params = new URLSearchParams(props.location.search)
const foo = params.get('name)
```

## 130.为什么你会得到“Router may have only one child element”警告？
此警告的意思是Router组件下仅能包含一个子节点。

你必须将你的Route包装在`<Switch>`块中，因为`<Switch>`是唯一的，它只提供一个路由。

首先，您需要导入中添加`Switch`
``` 
import {Switch,Router,Route} from 'react-router-dom'
```
然后在Switch块中定义路由：
``` 
 <HashRouter>
   <Switch>
        <Route exact path = "/" component={User}/>
        <Route exact path = "/greeting" component={Greeting}/>
        <Route exact path = "/window" component={WindowDimensions}/>
    </Switch>
 </HashRouter>
```
## 131.如何在React Router v4中将params传递给`history.push`方法？
在导航时，您可以将props传递给history 对象
``` 
this.props.history.push({
  pathname:'/template',
  search:'?name=sudheer',
  state:{detail:response.data}
})
```
`search`属性用于在`push()`方法中传递查询参数。

## 132.如何实现默认页面或404页面？
`<Switch>`呈现匹配的第一个孩子`<Route>`。 没有路径的`<Route>`总是匹配。所以你只需要简单地删除` path` 属性，如下所示：
``` 
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/user" component={User}/>
  <Route component={NotFound} />
</Switch>
```

## 133.如何在React Router v4上获取历史对象？
1. 创建一个导出`history`对象的模块，并在整个项目中导入该模块。

    例如，创建`history.js`文件：
    ``` 
    import {createBrowserHistory} from 'history'
    
    export default createBrowserHistory({
      //pass a configuration object here if needed
    })
    ```
2. 您应该使用`<Router>`组件而不是内置路由器。在`index.js`文件中导入上面的history.js:
    ``` 
    import { Router } from 'react-router-dom'
    import history from './history'
    import App from './App'
    
    ReactDOM.render((
      <Router history={history}>
        <App />
      </Router>
    ), holder)
    ```
3. 您还可以使用类似于内置历史对象的history对象的push方法：
    ``` 
    // some-other-file.js
    import history from './history'
    
    history.push('/go-here')
    ```
    
## 134.登录后如何执行自动重定向？
`react-router` 包在React Router 中提供了`<Redirect>`组件。渲染`<Redirect>`将导航到新位置。与服务器端重定向一样，新位置将覆盖历史堆栈中的当前位置。

``` 
import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'

export default class LoginComponent extends Component{
  render(){
    if(this.state.isLoggedIn === true){
      return <Redirect to="/your/redirect/page" />
    }else{
      return <div>{'Login Please'}</div>
    }
  }
}
```

#React Redux
## 135.什么是Flux？
Flux是应用程序设计规范，用于替代更传统的MVC模式。它不是一个框架或库，而是一种新的体系结构，它补充了React和单项数据流的概念。在使用React时，Facebook会在内部使用此模式。

## 136.什么是Redux？
Redux是基于Flux设计模式的JavaScript应用程序的可预测状态容器。Redux可以与React一起使用，也可以与任何其他视图库一起使用。它很小（约2KB）并且没有依赖性。

## 137.Redux的核心原则是什么？
Redux遵循三个基本原则：
1. 单一数据来源：整个应用程序的状态存储在单个对象树中。单状态数可以更容易地跟踪随时间的变化与调试或检查应用程序。
2. 状态是只读的：改变状态的唯一方法是发出一个动作，一个描述发生的事情的对象。这可以确保视图和网络请求都不会直接写入状态。
3. 使用纯函数进行更改：要指定状态树如何通过操作进行转换，您可以编写reducer。reducer只是纯函数，它将先前的状态和操作作为参数，并返回下一个状态。

## 138.与Flux相比，Redux的缺点是什么？
我们应该说使用 Redux 而不是 Flux 几乎没有任何缺点。这些如下
1. 您将需要学会避免突变： Flux 对变异数据毫不吝啬，但 Redux 不喜欢突变，许多与 Redux 互补的包假设您从不改变状态。您可以使用 dev-only 软件包强制执行此操作，例如redux-immutable-state-invariant，Immutable.js，或指示您的团队编写非变异代码。
2. 您将不得不仔细选择您的软件包： 虽然 Flux 明确没有尝试解决诸如撤消/重做，持久性或表单之类的问题，但 Redux 有扩展点，例如中间件和存储增强器，以及它催生了丰富的生态系统。
3. 还没有很好的 Flow 集成： Flux 目前可以让你做一些非常令人印象深刻的静态类型检查，Redux 还不支持。

## 139.`mapStateToProps()`和`mapDispatchToProps()`之间有什么区别？
 `mapStateToProps()`是一个实用方法，它可以帮助您的组件获得最新的状态（由其他一些组件更新）：
 ``` 
 const mapStateToProps = (state) => {
   return {
     todos: getVisibleTodos(state.todos, state.visibilityFilter)
   }
 }
 ```
`mapDispatchToProps()`是一个实用方法，它可以帮助你的组件触发一个动作事件（可能导致应用程序状态改变的调度动作）：
``` 
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
```

## 140.我可以在 reducer 中触发一个 Action 吗?
在 reducer 中触发 Action 是反模式。您的 reducer 应该没有副作用，只是接收 Action 并返回一个新的状态对象。在 reducer 中添加侦听器和调度操作可能会导致链接的 Action 和其他副作用。

## 141.如何在组件外部访问 Redux 存储的对象?
是的，您只需要使用`createStore()`从它创建的模块中导出存储。此外，它不应污染全局窗口对象。
``` 
store = createStore(myReducer)
export default store
```
## 142.MVW 模式的缺点是什么?
1. DOM 操作非常昂贵，导致应用程序行为缓慢且效率低下。
2. 由于循环依赖性，围绕模型和视图创建了复杂的模型。
3. 协作型应用程序（如Google Docs）会发生大量数据更改。
4. 无需添加太多额外代码就无法轻松撤消（及时回退）。