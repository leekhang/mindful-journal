import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogList extends Component {
  render() {
    let postItems = Object.keys(this.props.posts).map((id) => {
      const title = this.props.posts[id].title;
      const emotions = this.props.posts[id].emotions;
      const content = this.props.posts[id].content;
      const date = this.props.posts[id].date;
      return <BlogPost key={id} date={date} title={title} emotions={emotions} content={content} />
    })
    return <div className='container'>{postItems}</div>
  }
}

export default BlogList;