import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import * as urls from '../../../../config/urls';
import * as RegisterActions from '../../register';
import * as LoginActions from '../../login';

export class Account {

  constructor( props ) {
    this.socketInit( props.socket, props.dispatch );
  }

  socketInit( socket, dispatch ) {
    this.socket = socket;

    const registerActions = bindActionCreators(RegisterActions, dispatch);
    const loginActions = bindActionCreators(LoginActions, dispatch);

    this.socket.on( "registerResult", function(data) {
      registerActions.onRegisterResult( data );
    });

    this.socket.on( "loginResult", function(data) {
      loginActions.onLoginResult( data );
    });
  }

  register( userName, password ) {
    this.socket.emit( "register", {
      userName: userName,
      password: password,
    });
  }

  login( userName, password ) {
    this.socket.emit( "login", {
      userName: userName,
      password: password,
    });
  }
}
