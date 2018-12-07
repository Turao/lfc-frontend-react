import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loadModelData from '../ModelLoader';

class User extends Component {
  constructor(props) {
    super(props);
    const { fullName, email } = props.data;
    this.state = {
      fullName,
      email,
    };
  }


  render() {
    const { fullName, email } = this.state;
    return (
      <div>
        <h1>
          { fullName }
        </h1>

        <h2>
          { email }
        </h2>
      </div>
    );
  }
}

User.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default loadModelData(User, 'user');
