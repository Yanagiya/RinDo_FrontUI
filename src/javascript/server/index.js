import ioClient from 'socket.io-client';

export class Server {
  constructor( url ) {
    this.connect( url );
    this.initEvent();
  }

  connect( url ) {
    this.socket = ioClient.connect( url );
  }

  initEvent() {
    this.socket.on('connect', function() {
      console.log("## connected!!!! ##");
    });
  }

  registerUser( userName, password ) {
    this.socket.emit("registerUser", {
      userName: userName,
      password: password
    });
  }
}

