import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import * as classnames from 'classnames';

class Codes extends Component {
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    let { classes, children } = this.props;
    return (
      <pre className={classes.root}><code className={classnames(classes.code, 'javascript')}>{children}</code></pre>
    );
  }
}

const styles = theme => ({
  root: {
    border: `1px solid ${theme.palette.grey[200]}`
  },
  code: {
    padding: theme.spacing.unit * 2,
  }
});

export default withStyles(styles)(Codes);
