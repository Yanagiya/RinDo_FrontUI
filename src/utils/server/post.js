import { SOCKET_EVENT } from '../../constants';

export default class Post {

  constructor( props ) {
    this.socketInit( props.socket );
  }

  socketInit( socket ) {
    this.socket = socket;
  }

  fetchPosts() {
    this.socket.emit( SOCKET_EVENT.FETCH_POSTS, {} );
  }

  fetchRegionPostCount( regionKey ) {
    this.socket.emit( SOCKET_EVENT.FETCH_REGION_POST_COUNT, {
      regionKey: regionKey
    } );
  }

  sendDraft( postId, title, poster, body, userId, country, goodPoint ) {
    this.socket.emit( SOCKET_EVENT.SEND_DRAFT, {
      postId: postId,
      title: title,
      poster: poster,
      body: body,
      userId: userId,
      country: country,
      goodPoint,
    });
  }
}
