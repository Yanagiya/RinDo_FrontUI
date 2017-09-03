import { SOCKET_EVENT } from '../../constants';

export default class Account {

  constructor( props ) {
    this.socketInit( props.socket );
  }

  socketInit( socket ) {
    this.socket = socket;
  }

  register( userName, password, email, country1, country2, country3 ) {
    this.socket.emit( SOCKET_EVENT.REGISTER, {
      userName: userName,
      password: password,
      email: email,
      country1: country1,
      country2: country2,
      country3: country3,
    });
  }

  login( email, password ) {
    this.socket.emit( SOCKET_EVENT.LOGIN, {
      email: email,
      password: password,
    });
  }

  logout() {
    const data = {
      userName: null,
      userId: null,
      password: null,
      email: null,
    };
  }
}
