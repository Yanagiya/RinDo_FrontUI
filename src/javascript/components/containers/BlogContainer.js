import { connect }  from "react-redux";
import Blog from "../presentators/Blog";

@connect(state => ({
	blogposts: state.blogposts,
	users: state.users
})

export default class BlogContainer extend React.Component{
	constructor( props ){
		super( props );
	}

	render(){
		return(
			
		);
	}
}
