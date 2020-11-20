import React,{ Component } from 'react';

class Footer extends Component {
  

    render(){

        return(
            <footer>
                { this.props.footerText }
            </footer>
        )
    }
}

export default Footer;