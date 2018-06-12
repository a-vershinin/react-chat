import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

class InputMessage extends Component {
  state = {
    value: '',
  }

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {

      this.setState({ value: '' });
    }
  }

  render() {
    const { classes, onJoinButtonClick, showJoinButton  } = this.props;
    return (
      <div className={classes.messageInputWrapper}>
        <Button
           fullWidth
           variant="raised"
           color="primary"
           onClick={onJoinButtonClick}
         >
           Join
         </Button>
        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message…"/>
        </Paper>
      </div>
    );
  }

}

export default withStyles(styles)(InputMessage);
