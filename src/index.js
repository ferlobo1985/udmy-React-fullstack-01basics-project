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
        filtered:JSON,
        footerText:'I am a happy footer'
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filtered
        });
    }

    render(){
        const {news,footerText,filtered} = this.state;

        return(
            <>
                <Header
                    keywords={this.getKeywords}
                />
                <NewsList news={filtered}>
                    <br/>
                    <h1>I am a children</h1>
                </NewsList>


                <Footer footerText={footerText}/>
            </>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))


