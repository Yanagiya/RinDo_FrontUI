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

  register( userName, password, email, userIcon, country1, country2, country3 ) {
    this.account.register(
      userName, 
      password, 
      email,
      userIcon,
      country1,
      country2,
      country3
    );
  }

  login( email, password) {
    this.account.login( email, password );
  }

  logout() {
    this.account.logout();
  }

  fetchPosts() {
    this.post.fetchPosts();
  }

  fetchRegionPostCount( regionKey ) {
    this.post.fetchRegionPostCount( regionKey );
  }

  sendDraft( postId, title, poster, body, userId, country, goodPoint ) {
    this.post.sendDraft( postId, title, poster, body, userId, country, goodPoint );
  }
}

const server = new Server();
export default server;
