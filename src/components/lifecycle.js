import React,{Component} from 'react';

class Life extends Component {
    constructor(props){
        super(props);

        this.state = { name: 'Francis'}
        console.log('1-Constructor');
    }

    static getDerivedStateFromProps(props,state){ 
        console.log('2-getDerivedStateFromProps');
        if(state.name === 'Ron'){
            return {
                name: 'Milhouse'
            }
        }
        return null;
    }

    componentDidMount(){
        console.log('4-componentDidMount')
    }

    componentWillUnmount(){
        console.log('5-componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('x-shouldComponentUpdate')
        if(nextState.name === 'Steve'){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        let age = 20;
        return age;
    }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('x-componentDidUpdate');
       // console.log(prevState);
       // console.log(this.state)
      // console.log(snapshot)
    }



    render(){
        console.log('3-render')
        return(
            <div>
                <div>{this.state.name}</div>
                <div onClick={()=> this.setState({name:'Ron'})}>
                    change name
                </div>
            </div>
        )
    }

}


export default Life;