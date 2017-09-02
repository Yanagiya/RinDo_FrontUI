import io from 'socket.io-client';
import * as urls from '../../config/urls';

import Account from './account';
import Post from './post';

class Server {

  constructor() {
    this.socketInit();
  }

  socketInit() {
    this.socket = io.connect(urls.account);

    this.account = new Account({ socket: this.socket });
    this.post = new Post({ socket: this.socket });
  }

  register( userName, password, mailaddress ) {
    this.account.register(userName, password, mailaddress );
  }

  login( mailaddress, password) {
    this.account.login(mailaddress, password);
  }

  logout() {
    this.account.logout();
  }

  fetchPosts() {
    this.post.fetchPosts();
  }

  sendDraft( postId, title, poster, body ) {
    this.post.sendDraft( postId, title, poster, body );
  }
}

const server = new Server();
export default server;
