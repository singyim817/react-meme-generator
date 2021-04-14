// import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import MemeItem from './components/MemeItem';
import MyMemes from './components/MyMemes';

class App extends Component {

  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: '',
    }
  }

  render() {
    return (
      <div>
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes />
        <h4>Write Some Text</h4>
        <Form inline>
          <FormGroup>
            <Form.Label>Top</Form.Label>
            {' '}
            <FormControl 
              type="text"
              onChange={event=>this.setState({text0:event.target.value})}
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Form.Label>Bottom</Form.Label>
            {' '}
            <FormControl 
              type="text"
              onChange={event=>this.setState({text1:event.target.value})} 
            />
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem 
                key={index} 
                meme={meme}
                text0={this.state.text0}
                text1={this.state.text1}
              />
            )
          })
        }
        <div className="meme-button" onClick={() => {
          this.setState({memeLimit: this.state.memeLimit + 10})
        }}>Load 10 more memes...</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
