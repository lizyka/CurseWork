import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Form, Button } from 'react-bootstrap';
import { validateFields } from '../utils/common';

class AddAccountForm extends React.Component {
  state = {
    account_no: '',
    bank_name: '',
    ifsc: '',
    errorMsg: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.errors, this.props.errors)) {
      this.setState({ errorMsg: this.props.errors });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAddAccount = (event) => {
    event.preventDefault();
    const { account_no, bank_name, ifsc } = this.state;
    const fieldsToValidate = [{ account_no }, { bank_name }, { ifsc }];

    const allFieldsEntered = validateFields(fieldsToValidate);
    if (!allFieldsEntered) {
      this.setState({
        errorMsg: {
          add_error: 'Пожалуйста заполните все поля.'
        }
      });
    } else {
      this.props.handleAddAccount(this.state);
    }
  };

  render() {
    const { account_no, bank_name, ifsc, errorMsg } = this.state;
    return (
      <div className="edit-account-form  col-md-6 offset-md-3">
        <Form onSubmit={this.handleAddAccount} className="account-form">
          {errorMsg && errorMsg.add_error && (
            <p className="errorMsg centered-message">{errorMsg.add_error}</p>
          )}
          <Form.Group controlId="type">
            <Form.Label>Добавить счет</Form.Label>
          </Form.Group>
          <hr />
          <Form.Group controlId="accnt_no">
            <Form.Label>Номер счета: </Form.Label>
            <Form.Control
              type="text"
              name="account_no"
              placeholder="Введите номер счета"
              value={account_no}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="accnt_no">
            <Form.Label>Банк: </Form.Label>
            <Form.Control
              type="text"
              name="bank_name"
              placeholder="Введите название банка"
              value={bank_name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ifsc">
            <Form.Label>ПИН-код:</Form.Label>
            <Form.Control
              type="text"
              name="ifsc"
              placeholder="Введите новый ПИН-код"
              value={ifsc}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps)(AddAccountForm);