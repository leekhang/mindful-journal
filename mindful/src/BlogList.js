import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogList extends Component {
  render() {
    let blogPosts;
    if (this.props.allEntries) {
      console.log(this.props.allEntries);
      blogPosts = Object.keys(this.props.allEntries).map((id) => {
        let entry = this.props.allEntries[id];
        entry.id = id;
        return <BlogPost key={id} userId={this.props.userId} entry={entry} />
      });
    }
      return <div className='container'>{blogPosts}</div>
    }
  }
  
  export default BlogList;