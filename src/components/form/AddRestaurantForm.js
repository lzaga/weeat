import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DropdownSelect from './DropdownSelect';
import Checkbox from './Checkbox';
import { addRestaurant } from '../../actions';

class AddRestaurantForm extends React.Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
                <div>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                </div>
            </div>
        )
    };

    renderActions = () => {
        return (
            <React.Fragment>
                <button className="ui button">Submit</button>
                <Link to="/" className="ui right floated button">Cancel</Link>
            </React.Fragment>
        )
    };

    onSubmit = values => {
        values.rating = 0;
        values.max_delivery_time = Number(values.max_delivery_time);
        if (!values.ten_bis) values.ten_bis = false

        this.props.addRestaurant(values);
        this.props.onClose();
    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form"
            >
                <Field name="name" component={this.renderInput} label="Restaurants name:" />
                <Field name="cuisine" component={DropdownSelect} label="Cuisine:" />
                <Field name="address" component={this.renderInput} label="Restaurants address:"  />
                <Field name="max_delivery_time" component={this.renderInput} label="Max delivary time:" />
                <Field name="ten_bis" component={Checkbox} label="Accept 10Bis" />
                {this.renderActions()}
            </form>
        )
    }   
};

const validate = formValues => {
    const errors = {};

    if(!formValues.name) {
        errors.name = "Restaurant's name is invalid"
    }

    if(!formValues.cuisine) {
        errors.cuisine = "Restaurant's cuisine is invalid"
    }

    if(!formValues.address) {
        errors.address = "Restaurant's address is invalid"
    }

    if(!formValues.max_delivery_time || !Number(formValues.max_delivery_time)) {
        errors.max_delivery_time = "Max delivery time is invalid"
    }

    return errors;
};

const WrappedForm = reduxForm({
    form: 'addRestaurantForm',
    validate
})(AddRestaurantForm);

export default connect(null, { addRestaurant })(WrappedForm);
