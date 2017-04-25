import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import * as AuthActions from '../../redux/modules/auth';
import ImageResult from './Result';

class ImageSearch extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10
      },
      paper: {
        maxHeight: 400,
        maxWidth: 400,
        textAlign: 'center',
        padding: '20px 40px'
      },
      submit: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%'
      }
    };
  }

  render() {
    const styles = this.getStyles();

    let imageResults = [];

    for (let i=0; i<3; i++) {
      imageResults.push({imageName: "imageName" + i, index : i});
    }

    return (
        <div>
            <input type='text' />
            <button onClick={::this.doSearch} >Search Images</button>

          {imageResults.map((result, i) =>
            <ImageResult result={result} />
          )}
        </div>
    );
  }

  doSearch() {
    alert('yo!');
  }

  submit(event) {
    const { dispatch } = this.props;
    const actions = bindActionCreators(AuthActions, dispatch);

    const identity = this.refs.identity.state.hasValue;
    const password = this.refs.password.state.hasValue;

    if (event.type === 'keydown' && event.keyCode !== 13) return;

    actions.login(identity, password);
  }
}

export default connect(state => ({}))(ImageSearch);
