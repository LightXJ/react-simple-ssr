import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: '2019-02-19-xx'};
  }

  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(()=>{
      this.setState({date: 'ssssss'});
    },3000);
  }

  render () {
    console.log(this.state);
    return <div onClick={()=>{console.log('hello world')}}>
      hello world
      { this.state.date }
    </div>
  }
}