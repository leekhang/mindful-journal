import React, { Component } from 'react';
import ModalScreen from './ModalScreen';


//This renders each individual blog post.
class BlogPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    //console.log(this.props.match.params);
    var posts = this.props.entry;
    let id = this.props.userId;
    //console.log(id);

    let date = new Date(posts.date);
    let title = posts.title;
    let content = posts.content;
    let emotion = posts.emotions;

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let numDate = date.getMonth();

    return (
      <div className='container mt-3' aria-label="a blog post">
      
        <div className='row sticky-top bg-light pt-3'>
        
          <div className='col-sm-2 offset-1'>
            <span className='date blog-post-meta text-muted'>{months[numDate]} {date.getDate()}</span>
          </div>
          
          <div className='col-sm-9'>

            <h2 className='post-title blog-post-title'>{title}</h2>
            <ModalScreen buttonLabel='Edit' type='edit' userId={id} entry={this.props.entry} />
          </div>
          
        </div>
        
        <div className='row'>
          <div className='col-sm-8 offset-3'>
            <h5><span className='emation-tags d-inline-block badge badge-secondary mr-2' key={emotion}>{emotion}</span></h5>
            <p className='post-content blog-post-meta'>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;