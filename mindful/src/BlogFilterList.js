import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogFilterList extends Component {
    render() {
        console.log(this.props.userId);
        let filterAttr = this.props.match.params.attr;
        //let filterAttr = this.props.attr;
        let blogPosts = this.props.posts;
        let arrBlogPosts = Object.keys(blogPosts).map(function(key) {
            let postKey = key; 
            let postValue = blogPosts[key];
            postValue.id = postKey;
            //console.log(postKey);
            //console.log(postValue.id);
            return postValue;
        })

        let filterPosts = arrBlogPosts.filter((post) => {
            let monthNum = new Date(post.date).getMonth();
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let monthName = months[monthNum];
            if (filterAttr === post.emotions || filterAttr === monthName) {
                return true;
            } else {
                return false;
            }
        });

      let postItems = filterPosts.map((entry) => {
        return <BlogPost key={entry.id} userId={this.props.userId} entry={entry} />
      })

      return (
        <div className='container'>{postItems}</div>
      );
  }
}
export default BlogFilterList;