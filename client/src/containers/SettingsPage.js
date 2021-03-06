import React, { Component } from 'react';
import axios from 'axios-es6';
import Auth from '../modules/Auth';
import SettingsForm from '../components/SettingsForm';

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        let config = {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'bearer ' + Auth.getToken()
            }
        };

        axios.get('/api/categories', config)
            .then(function (response) {
                this.setState({
                    categories: response.data.items
                });
            }.bind(this));
    }

    render() {
        let deleteCategory = (name) => {
            console.log('delete: ' + name);
        };
        let editCategory = (name) => {
            console.log('edit: ' + name);
        };
        return (<SettingsForm categories={this.state.categories} deleteCategory={deleteCategory} editCategory={editCategory} />);
    }
}

export default SettingsPage;
