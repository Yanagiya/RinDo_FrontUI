import io from 'socket.io-client';
import * as urls from '../../../../config/urls';

import { Account } from './account';
import { Article } from './article';

export class Server {

  constructor({ dispatch }) {
    this.socketInit( dispatch );
  }

  socketInit( dispatch ) {
    this.socket = io.connect(urls.account);

    this.account = new Account({ socket: this.socket, dispatch: dispatch });
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

