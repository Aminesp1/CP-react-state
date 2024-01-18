import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Put the following line with the correct image filename in the public folder
      imgSrc: process.env.PUBLIC_URL + '/profile_picture.jpg',
      profession: 'Software Developer',
    },
    show: false,
    mountTime: 0,
  };

  render() {
    const { show } = this.state;

    return (
      <div className="UserProfile">
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

export default UserProfile;
