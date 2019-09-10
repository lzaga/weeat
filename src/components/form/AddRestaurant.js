import React from 'react';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../paths';
import Modal from '../Modal';
import AddRestaurantForm from './AddRestaurantForm';

class AddRestaurant extends React.Component {
  state = { isAddSucceeded: false };

  onClose = () => {
    this.setState({
      isAddSucceeded: true,
    });
  };

  Child = () => {
    return (
      <div className="ui dimmer modals visible active">
        <div
          onClick={e => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">Add Restaurant</div>
          <div className="content">
            {<AddRestaurantForm onClose={this.onClose} />}
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.isAddSucceeded) {
      return <Redirect to={HOME} />;
    }

    return <Modal title="Add Restaurant">{this.Child()}</Modal>;
  }
}

export default AddRestaurant;
