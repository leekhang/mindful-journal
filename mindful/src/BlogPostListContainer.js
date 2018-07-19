import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogPostListContainer extends Component {
  render() {
    let blogPosts;
    if (this.props.allEntries) {
      blogPosts = Object.keys(this.props.allEntries).map((id) => {
        let entry = this.props.allEntries[id];
        entry.id = id;
        return <BlogPost userId={this.props.userId} entry={entry} />
      });
    }

    // let postItems = Object.keys(this.props.posts).map((date) => {
    //   const title = this.props.posts[date].title;
    //   const emotions = this.props.posts[date].emotions;
    //   const content = this.props.posts[date].content;
    //   return <BlogPost key={date} date={date} title={title} emotions={emotions} content={content} />
    // })

    return <div className='container'>{blogPosts}</div>
  }
}

export default BlogPostListContainer;