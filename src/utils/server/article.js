
export class Article {

  constructor( props ) {
    this.socketInit( props.socket );
  }

  socketInit( socket ) {
    this.socket = socket;

    this.socket.on( "registerResult", function(data) {

    });

    this.socket.on( "loginResult", function(data) {

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
