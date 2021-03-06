import React, { Component } from 'react';

import Body from '../Body';
import RadioButton from '../RadioButton';
import BigCircle from '../BigCircle';
import Container from './elements/Container';

class Gender extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold className="question-number">{questionNumber}</Body>
        <Body bold className="question-title">Do you have a preference for a certain gender?</Body>
        <img src="./images/wave.png" style={{ marginTop: '1rem' }} width="100px"/>
        <Container>
          <div className="image">
            <img className="graphic" src="./images/illustrations/1_illustration.png"/>
          </div>
          <div className="choices-2">
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/1_Male.png"
                selected="./images/icons/selected/1_Male.png"
              />
              <Body className="choice-subtitle">Male</Body>
            </div>
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/1_Female.png"
                selected="./images/icons/selected/1_Female.png"
              />
              <Body className="choice-subtitle">Female</Body>
            </div>
          </div>
          <div className="choices-2">
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/1_Others.png"
                selected="./images/icons/selected/1_Others.png"
              />
              <Body className="choice-subtitle">Other</Body>
            </div>
            <div className="choice-2">
              <BigCircle
                img="./images/icons/default/1_Doesn't matter.png"
                selected="./images/icons/selected/1_Doesn't matter.png"
              />
              <Body className="choice-subtitle">Don't mind</Body>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Gender;
