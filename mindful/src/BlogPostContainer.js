import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogPostListContainer extends Component {
  render() {
    let postItems = Object.keys(this.props.posts).map((date) => {
      const title = this.props.posts[date].title;
      const emotions = this.props.posts[date].emotions;
      const content = this.props.posts[date].content;
      return <BlogPost key={date} date={date} title={title} emotions={emotions} content={content} />
    })

    return <div className='container'>{postItems}</div>
  }
}

export default BlogPostListContainer;