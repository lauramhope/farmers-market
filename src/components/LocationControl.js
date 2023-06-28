import React from 'react';
import LocationList from './LocationList';

class LocationControl extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }))
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <LocationList />
    } else {
      currentlyVisibleState = <LocationList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default LocationControl;
