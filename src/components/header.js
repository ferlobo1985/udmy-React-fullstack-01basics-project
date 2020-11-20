import React,{ Component } from 'react';

class Header extends Component {

    state = {
        name:'Francis',
        title:'The keywords are:',
        keywords:'',
        count:0
    }
    
    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState((state, props )=>({
            count: state.count + 1
        }))
    }

    render(){
        return(
            <header>
               <div className="logo">Logo</div>
               <input
                    onChange={ this.inputChangeHandler }
               />
                <div>{ this.state.title }</div>
                <div>{ this.state.keywords }</div>

                <br/>
                <div>{this.state.count}</div>
                <button onClick={ ()=> this.addOne() }>Add one</button>
            </header>
        )
    }
}

export default Header;
