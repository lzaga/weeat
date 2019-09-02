import React from 'react';
import Modal from '../Modal';
import AddRestaurantForm from './AddRestaurantForm';
import { Redirect } from 'react-router-dom';

class AddRestaurant extends React.Component {
    state = { isAddSucessed: false };

    onClose = () => {
        this.setState({
            isAddSucessed: true
        })
    };
    
    Child = () => {
        return (
            <div className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">Add Restaurant</div>
                    <div className="content">{<AddRestaurantForm onClose={this.onClose} />}</div>
                </div>
            </div>
        )
    }

    render() {
        if(this.state.isAddSucessed) {
            return <Redirect to='/' />;
        };

        return (
            <Modal title="Add Restaurant" >
                {this.Child()}
            </Modal>
        )
    }
}

export default AddRestaurant;
