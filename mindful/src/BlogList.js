import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogList extends Component {

    render() {
      let posts = this.props.posts;
      let postItems = Object.keys(posts).map(function(key) {
        let postKey = key; 
        let postValue = posts[key];
        postValue.id = postKey;
        //console.log(postKey);
        //console.log(postValue.id);
        return <BlogPost key={postValue.id} userId={postValue.id} entry={postValue} />
      })
  
      return <div className='container'>{postItems}</div>
    }
  }
  
  export default BlogList;