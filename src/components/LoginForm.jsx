import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username ..."
          type="text"
          name="username"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password ..."
          type="password"
          name="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button fullWidth variant="raised" type="submit" color="primary" className={classes.signUpButton}>
          Login
        </Button>
      </form>
    );
  }
}
export default withStyles(styles)(LoginForm);
