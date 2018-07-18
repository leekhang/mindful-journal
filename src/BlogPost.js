import React, {Component} from 'react';

class BlogPost extends Component {
    constructor(props){
      super(props);
    }
  
    render() {
  
      //console.log(this.props.match.params);
  
      const date = new Date(this.props.date);
      const title = this.props.title;
      const content = this.props.content;
      const emotion = this.props.emotions;
  
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let numDate = date.getMonth();
  
      return (
        <div className='container mt-3'>
            <div className='row sticky-top bg-light pt-3'>
                <div className='col-sm-1 offset-2'>
                    <span className='date blog-post-meta text-muted'>{months[numDate]} {date.getDate()}</span>
                </div>
                <div className='col-sm-8'>
                    <h2 className='post-title blog-post-title'>{title}</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8 offset-3'>
                    <span className={'emotion-tags d-inline-block badge badge-' + 'secondary' + ' mr-2'} key={emotion}>{emotion}</span>
                    <p className='post-content blog-post-meta'>{content}</p>  
                </div>
            </div>
        </div>
      );
    }
  }

  export default BlogPost;