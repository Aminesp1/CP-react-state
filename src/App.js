import React, { Component } from 'react';
import './App.css';
import img from "./profilePicture.jpg";

class App extends Component {
  state = {
    person: {
      fullName: 'Amine Mazhoud',
      bio: 'Life is now !',
      // Put the following line with the correct image filename in the public folder
      imgSrc: img,
      profession: 'Software Developer',
    },
    show: false,
    mountTime: 0,
  };

  render() {
    const { show } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && this.renderPerson()}
        <p>Time since mount: {this.state.mountTime} seconds</p>
      </div>
    );
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  renderPerson() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    return (
      <div>
        <img src={imgSrc} alt={fullName} />
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <p>Profession: {profession}</p>
      </div>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateMountTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateMountTime = () => {
    this.setState((prevState) => ({ mountTime: prevState.mountTime + 1 }));
  };
}

export default App;
