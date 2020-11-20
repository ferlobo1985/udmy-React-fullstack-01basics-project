import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

class App extends Component {

    state = { 
        news: JSON,
        footerText:'I am a happy footer'
    }

    render(){
        const {news,footerText} = this.state;

        return(
            <>
                <Header/>
                <NewsList news={news}>
                    <br/>
                    <h1>I am a children</h1>
                </NewsList>


                <Footer footerText={footerText}/>
            </>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))


