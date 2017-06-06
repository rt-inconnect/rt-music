import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { fetchSounds } from '../../components/Sound/action';
import { bindActionCreators } from 'redux';

import Sound from '../../components/Sound';

class Home extends Component {

  componentWillMount() {
    //this.props.fetchSounds()
  }

  renderSound = (sound) => {
    return (<Sound key={ sound.id } sound={ sound } {...this.props} /> )
  }

  render() {
    const { sounds } = this.props;
    return (
      <div className="home">
        { sounds.map(this.renderSound) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sounds: state.sounds
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSounds
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);