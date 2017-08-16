import { SOCKET_EVENT } from '../../constants';

export default class Account {

  constructor( props ) {
    this.socketInit( props.socket );
  }

  socketInit( socket ) {
    this.socket = socket;
  }

  register( userName, password ) {
    this.socket.emit( SOCKET_EVENT.REGISTER, {
      userName: userName,
      password: password,
    });
  }

  login( userName, password ) {
    this.socket.emit( SOCKET_EVENT.LOGIN, {
      userName: userName,
      password: password,
    });
  }

  logout() {
    const data = {
      userName: null,
      userId: null,
      password: null,
    };
  }
}
