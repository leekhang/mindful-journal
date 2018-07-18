import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPost from './BlogPost';
import BlogPostListContainer from './BlogPostListContainer';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';


const BLOG_POSTS = { //model for demoing
  '2018-07-11': {
    title: 'Lorem Ipsum',
    emotions: ['happy', 'sad', 'gg'],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis purus sit amet volutpat consequat mauris nunc. Convallis a cras semper auctor neque. Quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Non tellus orci ac auctor augue mauris augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quisque id diam vel quam elementum pulvinar etiam non. Dignissim diam quis enim lobortis scelerisque fermentum. Egestas pretium aenean pharetra magna ac. Quis lectus nulla at volutpat diam ut venenatis. Aliquam vestibulum morbi blandit cursus risus. Fringilla ut morbi tincidunt augue. Laoreet non curabitur gravida arcu. Orci sagittis eu volutpat odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Urna duis convallis convallis tellus id interdum. Nulla porttitor massa id neque aliquam vestibulum morbi. In iaculis nunc sed augue lacus viverra vitae congue. In est ante in nibh mauris cursus mattis molestie. Adipiscing at in tellus integer feugiat. Duis ut diam quam nulla porttitor. Elementum integer enim neque volutpat ac. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacus luctus accumsan tortor posuere ac ut. Volutpat odio facilisis mauris sit. Blandit massa enim nec dui nunc mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Feugiat pretium nibh ipsum consequat Consectetur adipiscing elit duis tristique sollicitudin nibh. Auctor eu augue ut lectus arcu bibendum at varius. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Velit aliquet sagittis id consectetur. Aliquet nec ullamcorper sit amet risus nullam eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est ultricies integer quis. Laoreet sit amet cursus sit amet dictum sit amet justo. Convallis a cras semper auctor neque vitae. Lacus luctus accumsan tortor posuere ac. Et malesuada fames ac turpis egestas. Vitae congue eu consequat ac felis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque habitant morbi tristique senectus. Eget mi proin sed libero enim. Sit amet consectetur adipiscing elit duis. Vestibulum sed arcu non odio euismod lacia. Volutpat consequat mauris nunc congue nisi vitae suscipit.Amet nisl purus in mollis nunc sed id semper risus. Mattis pellentesque id nibh tortor id aliquet lectus. Maecenas pharetra convallis posuere morbi. Non quam lacus suspendisse faucibus. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus. Lorem sed risus ultricies tristique nulla. Nisi porta lorem mollis aliquam ut porttitor. Sit amet aliquam id diam maecenas. Sed adipiscing diam donec adipiscing. Ac auctor augue mauris augue neque gravida in fermentum et. Massa eget egestas purus viverra accumsan in. Ultrices mi tempus imperdiet nulla. Nunc congue nisi vitae suscipit tellus mauris a. Est ultricies integer quis auctor elit sed vulputate. Molestie nunc non blandit massa enim nec dui. Aenean et tortor at risus viverra adipiscing at in. Purus sit amet volutpat consequat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.A scelerisque purus semper eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et netus et malesuada fames ac. Commodo sed egestas egestas fringilla. Dis parturient montes nascetur ridiculus mus. Ut sem viverra aliquet eget sit amet tellus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictum sit amet justo donec enim diam. Cras pulvinar mattis nunc sed blandit libero. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Commodo nulla facilisi nullam vehicula. Aliquet nec ullamcorper sit amet risus nullam. Placerat in egestas erat imperdiet sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quisque id diam vel quam elementum."
  },
  '2018-07-09': {
    title: 'Ipsum Lorem',
    emotions: ['emotion1', 'emotion2', 'emotion3'],
    content: "Today I did not get any sleep. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  '2018-07-08': {
    title: 'Duis aute irure',
    emotions: ['emotion1', 'ragret', 'emotion4', 'emotion5'],
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim '
    },
};

class Blog extends Component {
  render() {
    let postLinks = Object.keys(BLOG_POSTS).map((date) => {
      return (
      <li key={date}>
        <Link to={'/blog/posts/'+date} className="nav-link">{date}</Link>
      </li>
      )
    });

    return (
      <BrowserRouter>
        <div className="container">
          <h1>Mindful</h1>
          <nav>
            <ul className="nav">
            </ul>
          </nav>
          <Switch>
            <Route exact path='/blog' render={() => <BlogPostListContainer posts={BLOG_POSTS}/>} />
            <Route path='/blog/posts/:postDate' component={BlogPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Blog;