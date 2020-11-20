import React,{ Component } from 'react';

class Header extends Component {

    state = {
        active: 'active',
        keywords:''
    }
    
    inputChangeHandler = (event) => {
        const value =  event.target.value === '' ? 'active' : 'not-active';

        this.setState({
            active:value,
            keywords: event.target.value
        })
    }

    
    render(){
        return(
            // <header style={{background: `${this.state.active ? 'red': 'blue'}`}}>
            <header className={this.state.active}>
               <div className="logo">Logo</div>
               <input
                    onChange={ this.inputChangeHandler }
               />
            </header>
        )
    }
}

export default Header;
