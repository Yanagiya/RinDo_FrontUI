import io from 'socket.io-client';
import * as urls from '../../config/urls';

import { Account } from './account';
import { Article } from './article';

class Server {

  constructor() {
    this.socketInit();
  }

  socketInit() {
    this.socket = io.connect(urls.account);

    this.account = new Account({ socket: this.socket });
    this.article = new Article({ socket: this.socket });
  }

  register( userName, password ) {
    this.account.register(userName, password);
  }

  login( userName, password ) {
    this.account.login(userName, password);
  }

  logout() {
    this.account.logout();
  }
}

const server = new Server();
export default server;
