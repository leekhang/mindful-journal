import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogFilterList extends Component {
    render() {
        let filterAttr = this.props.match.params.attr;
        let blogPosts = this.props.posts;
        let arrBlogPosts = Object.values(blogPosts).map((post) => {
            return post;
        })

        let filterPosts = arrBlogPosts.filter((post) => {
            let monthNum = new Date(post.date).getMonth();
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let monthName = months[monthNum];
            if (filterAttr == post.emotions || filterAttr == monthName) {
                return true;
            } else {
                return false;
            }
        });

      let postItems = filterPosts.map((post) => {
        //const title = post.title;
        //const emotions = post.emotions;
        //const content = post.content;
        //const date = post.date;
        return <BlogPost key={post} userId={this.props.userId} entry={post} />
      })

      return (
        <div className='container'>{postItems}</div>
      );
  }
}
export default BlogFilterList;