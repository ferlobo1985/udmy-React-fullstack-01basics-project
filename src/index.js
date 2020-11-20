import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';


class App extends Component {

    state = { 
        news: JSON
    }

    
    render(){
        return(
            <>
                <Header/>
                <NewsList 
                    news={this.state.news}
                />
            </>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))


