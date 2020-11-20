import React,{Component} from 'react';

class Life extends Component {
    constructor(props){
        super(props);

        this.state = { action: ''}
        console.log('1-Constructor');
    }

    static getDerivedStateFromProps(){ 
        console.log('2-getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('4-componentDidMount')
    }

    componentWillUnmount(){
        console.log('5-componentWillUnmount')
    }

    render(){
        console.log('3-render')
        return(
            <div>
                LIFE
            </div>
        )
    }

}


export default Life;