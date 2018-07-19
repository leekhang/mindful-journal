import React, { Component } from 'react';
import ModalScreen from './ModalScreen';

class BlogPost extends Component {

  render() {
    console.log('in blogpost');
    let date = new Date(this.props.entry.date);
    let title = this.props.entry.title;
    let emotion = this.props.entry.emotion;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let numDate = date.getMonth();

    return (
      <div className='container mt-3'>
        <ModalScreen
          buttonLabel="Edit Journal"
          entry={this.props.entry}
          userId={this.props.userId}
          type="edit"
        />
        <div className='row sticky-top bg-light pt-3'>
          <div className='col-sm-2 offset-1'>
            <span className='date blog-post-meta text-muted'>{months[numDate]} {date.getDate()}</span>
          </div>
          <div className='col-sm-9'>
            <h2 className='post-title blog-post-title'>{title}</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 offset-3'>
            <span className='emation-tags d-inline-block badge badge-secondary mr-2 hover'>{emotion}</span>
            <div dangerouslySetInnerHTML={{__html: this.props.entry.body + ''}} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;