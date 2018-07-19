import firebase from 'firebase/app';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ModalScreen from './ModalScreen';
import BlogList from './BlogList';
import BlogFilterList from './BlogFilterList'; 
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import _ from 'lodash';
import firebase from 'firebase/app';


const BLOG_POSTS = { //model for demoing
    'alskjdldskjflsakjdz': {
        date: '2018-07-11',
        title: 'Lorem Ipsum',
        emotions: 'happy',
        content:''
    },
    'alasdasdasfdsasakjdz': {
      date: '2018-06-01',
      title: 'Lorem Ipsum',
      emotions: 'sad',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis purus sit amet volutpat consequat mauris nunc. Convallis a cras semper auctor neque. Quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Non tellus orci ac auctor augue mauris augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quisque id diam vel quam elementum pulvinar etiam non. Dignissim diam quis enim lobortis scelerisque fermentum. Egestas pretium aenean pharetra magna ac. Quis lectus nulla at volutpat diam ut venenatis. Aliquam vestibulum morbi blandit cursus risus. Fringilla ut morbi tincidunt augue. Laoreet non curabitur gravida arcu. Orci sagittis eu volutpat odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Urna duis convallis convallis tellus id interdum. Nulla porttitor massa id neque aliquam vestibulum morbi. In iaculis nunc sed augue lacus viverra vitae congue. In est ante in nibh mauris cursus mattis molestie. Adipiscing at in tellus integer feugiat. Duis ut diam quam nulla porttitor. Elementum integer enim neque volutpat ac. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacus luctus accumsan tortor posuere ac ut. Volutpat odio facilisis mauris sit. Blandit massa enim nec dui nunc mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Feugiat pretium nibh ipsum consequat Consectetur adipiscing elit duis tristique sollicitudin nibh. Auctor eu augue ut lectus arcu bibendum at varius. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Velit aliquet sagittis id consectetur. Aliquet nec ullamcorper sit amet risus nullam eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est ultricies integer quis. Laoreet sit amet cursus sit amet dictum sit amet justo. Convallis a cras semper auctor neque vitae. Lacus luctus accumsan tortor posuere ac. Et malesuada fames ac turpis egestas. Vitae congue eu consequat ac felis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque habitant morbi tristique senectus. Eget mi proin sed libero enim. Sit amet consectetur adipiscing elit duis. Vestibulum sed arcu non odio euismod lacia. Volutpat consequat mauris nunc congue nisi vitae suscipit.Amet nisl purus in mollis nunc sed id semper risus. Mattis pellentesque id nibh tortor id aliquet lectus. Maecenas pharetra convallis posuere morbi. Non quam lacus suspendisse faucibus. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus. Lorem sed risus ultricies tristique nulla. Nisi porta lorem mollis aliquam ut porttitor. Sit amet aliquam id diam maecenas. Sed adipiscing diam donec adipiscing. Ac auctor augue mauris augue neque gravida in fermentum et. Massa eget egestas purus viverra accumsan in. Ultrices mi tempus imperdiet nulla. Nunc congue nisi vitae suscipit tellus mauris a. Est ultricies integer quis auctor elit sed vulputate. Molestie nunc non blandit massa enim nec dui. Aenean et tortor at risus viverra adipiscing at in. Purus sit amet volutpat consequat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.A scelerisque purus semper eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et netus et malesuada fames ac. Commodo sed egestas egestas fringilla. Dis parturient montes nascetur ridiculus mus. Ut sem viverra aliquet eget sit amet tellus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictum sit amet justo donec enim diam. Cras pulvinar mattis nunc sed blandit libero. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Commodo nulla facilisi nullam vehicula. Aliquet nec ullamcorper sit amet risus nullam. Placerat in egestas erat imperdiet sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quisque id diam vel quam elementum."
    },
    'alsfdgsfdgrghytlsakjdz': {
      date: '2018-08-11',
      title: 'Lorem Ipsum',
      emotions: 'upset',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis purus sit amet volutpat consequat mauris nunc. Convallis a cras semper auctor neque. Quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Non tellus orci ac auctor augue mauris augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quisque id diam vel quam elementum pulvinar etiam non. Dignissim diam quis enim lobortis scelerisque fermentum. Egestas pretium aenean pharetra magna ac. Quis lectus nulla at volutpat diam ut venenatis. Aliquam vestibulum morbi blandit cursus risus. Fringilla ut morbi tincidunt augue. Laoreet non curabitur gravida arcu. Orci sagittis eu volutpat odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Urna duis convallis convallis tellus id interdum. Nulla porttitor massa id neque aliquam vestibulum morbi. In iaculis nunc sed augue lacus viverra vitae congue. In est ante in nibh mauris cursus mattis molestie. Adipiscing at in tellus integer feugiat. Duis ut diam quam nulla porttitor. Elementum integer enim neque volutpat ac. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacus luctus accumsan tortor posuere ac ut. Volutpat odio facilisis mauris sit. Blandit massa enim nec dui nunc mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Feugiat pretium nibh ipsum consequat Consectetur adipiscing elit duis tristique sollicitudin nibh. Auctor eu augue ut lectus arcu bibendum at varius. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Velit aliquet sagittis id consectetur. Aliquet nec ullamcorper sit amet risus nullam eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est ultricies integer quis. Laoreet sit amet cursus sit amet dictum sit amet justo. Convallis a cras semper auctor neque vitae. Lacus luctus accumsan tortor posuere ac. Et malesuada fames ac turpis egestas. Vitae congue eu consequat ac felis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque habitant morbi tristique senectus. Eget mi proin sed libero enim. Sit amet consectetur adipiscing elit duis. Vestibulum sed arcu non odio euismod lacia. Volutpat consequat mauris nunc congue nisi vitae suscipit.Amet nisl purus in mollis nunc sed id semper risus. Mattis pellentesque id nibh tortor id aliquet lectus. Maecenas pharetra convallis posuere morbi. Non quam lacus suspendisse faucibus. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus. Lorem sed risus ultricies tristique nulla. Nisi porta lorem mollis aliquam ut porttitor. Sit amet aliquam id diam maecenas. Sed adipiscing diam donec adipiscing. Ac auctor augue mauris augue neque gravida in fermentum et. Massa eget egestas purus viverra accumsan in. Ultrices mi tempus imperdiet nulla. Nunc congue nisi vitae suscipit tellus mauris a. Est ultricies integer quis auctor elit sed vulputate. Molestie nunc non blandit massa enim nec dui. Aenean et tortor at risus viverra adipiscing at in. Purus sit amet volutpat consequat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.A scelerisque purus semper eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et netus et malesuada fames ac. Commodo sed egestas egestas fringilla. Dis parturient montes nascetur ridiculus mus. Ut sem viverra aliquet eget sit amet tellus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictum sit amet justo donec enim diam. Cras pulvinar mattis nunc sed blandit libero. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Commodo nulla facilisi nullam vehicula. Aliquet nec ullamcorper sit amet risus nullam. Placerat in egestas erat imperdiet sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quisque id diam vel quam elementum."
    }
  };

//This component renders the page shown to users after they log in.
export default class UserHome extends Component {
    constructor(props) {
      super(props);

      this.state = {
        years: [],
        months: [],
        emotions: ['Happy', 'Excited', 'Calm', 'Afraid', 'Sad', 'Disgusted', 'Angry'],
        allEntries: []
      }
    }

    handleSignOut() {
        this.props.signOutCallback(); 
    }
    componentWillUnmount() {
        this.unregFunc.off();
    }

    componentDidMount() {
        this.unregFunc = firebase.database().ref(`users/${this.props.userId}/`);
        this.unregFunc.on('value', (snapshot) => {
            this.setState({ allEntries: snapshot.val() });
        });

  componentWillUnmount() {
    this.unregFunc.off();
  }

  //Manages the date and emotions that are relative to the user.
  componentDidMount() {
    this.unregFunc = firebase.database().ref(`users/${this.props.userId}/`);
        this.unregFunc.on('value', (snapshot) => {
            this.setState({ allEntries: snapshot.val() });
        });
  }

  //Toggles sidebar for desktop
  menuToggle(e) {
    e.preventDefault();
    let wrapper = document.querySelector('.wrapper');
    if (wrapper.classList.contains('toggled')) {
      wrapper.classList.remove('toggled');
    } else {
      wrapper.classList.add('toggled');
    }

  // Renders the view of the home screen for the user
  render() {
    let posts = this.props.posts;
    let groupedPostsDate = _.groupBy(posts, 'date');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    var arrDate = Object.keys(groupedPostsDate).map(date => {
      return new Date(date);
    });
    let arrMonths = Object.keys(groupedPostsDate).map(date => {
      let dates = new Date(date).getMonth();
      return months[dates];
    });
    function removeDuplicates(array){
        let uniqueArray = [];
        for(let i = 0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1){
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    let arrUniqueMonths = removeDuplicates(arrMonths);

    let groupedPostsEmots = _.groupBy(posts, 'emotions');
    let arrEmot = Object.keys(groupedPostsEmots);

    return (
      <div className="App">
        <main>
          <div className="wrapper toggled">
            <div className="sidebar-wrapper">
              <SideBar 
                userId={this.props.userId} 
                logout={() => this.handleSignOut()} 
                years={this.state.years} 
                months={arrUniqueMonths} 
                emotes={arrEmot}
                posts={this.state.allEntries}
              />
            </div>

            <div className="page-content-wrapper">
              <MobileNav 
                logout={()=>this.handleSignOut()} 
                years={this.state.years} 
                months={arrUniqueMonths} 
                emotes={arrEmot}
                posts={this.state.allEntries}
              />         
              <div className="container-fluid">
                <div className="menu">
                  <button 
                  type="button" 
                  className="btn desktop-button"
                  onClick={this.menuToggle}>
                  Menu
                  </button>
                </div>
              </div>
              <Switch>
                  <Route exact path='/blog/posts/:attr' render={(routerProps) => <BlogFilterList {...routerProps} posts={this.state.allEntries}/> }/>
                  <Route path='/' render={(routerProps) => <BlogList {...routerProps} posts={this.state.allEntries}/> }/>
                  <Route path='/blog' render={(routerProps) => <BlogList {...routerProps} posts={this.state.allEntries}/> }/>
              </Switch>
            </div>
            </div>
            </main>
            </div>
        );
    }
}

//Renders the sidebar navigation for desktop
class SideBar extends Component {
  render() {

    return (
      <ul className="sidebar-nav" role="navigation">
        <li>
          <a className="user space" href="">Mindful</a>
        </li>
        <li>
          <p className="secondary">Personal Journal</p>
        </li>
        <div className="entry space">
          <ModalScreen type='add' buttonLabel='Add Journal' userId={this.props.userId} /> 
        </div>
        <li><Link to='/blog' className="year space">2018</Link></li>
          <DateList months={this.props.months} />
        <li><Link className='space' to='/blog'>Emotion Filters</Link></li>
          <EmoteList emotes={this.props.emotes} />
        <li><a href="" className="space" onClick={() => this.props.logout()}>Log Out</a></li>
      </ul>
    );
  }
}

//Renders the top navbar for mobile
class MobileNav extends Component {
  render() {
      return (
        <div className="mobile-nav">
          <nav className="navbar navbar-expand-lg navbar-dark" role="navigation">
              <span><a className="navbar-brand" href="#">Mindful</a></span>
                <ModalScreen type='add' buttonLabel='Add Journal' userId={this.props.userId} />
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Date
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <DateList months={this.props.months} />
                </div>
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Emotions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <EmoteList emotes={this.props.emotes} />
                </div>
                <a href="" className="home-logout" onClick={()=>this.props.logout()}>Log Out</a>
              </div>
            </nav>
          </div>
      );
  }
}

//This renders an html element for each month relative to the user
class Month extends Component {
  render() {
    let month = this.props.month;
    return (
      <li key={this.props.month}>
        <NavLink to={'/blog/posts/' + month} activeClassName='bg-secondary'>{month}</NavLink>
      </li>
    );
  }
}

//This renders an html element for all the months.
class DateList extends Component {
    render() {
        let monthArray = this.props.months.map((month) => {
        return <Month key={month} month={month}/>
        });
        
        return(
        <ul className="secondary">
            {monthArray}
        </ul>
        );
    }
}

//This renders an html element for each emotion relative to the user.
class Emotes extends Component {
  render() {
      let emote = this.props.emote;
      return(
          <li className={emote}>
              <NavLink to={'/blog/posts/' + emote} activeClassName='bg-secondary'>{emote}</NavLink>
          </li>
    );
  }
}

//This renders all the emotions for the user.
class EmoteList extends Component {
    render() {
        let emoteArray = this.props.emotes.map((emote) => {
          return <Emotes key={emote} emote={emote}/>
        })
      
      return(
        <ul className="secondary">
            {emoteArray}
        </ul>
      );
    }
}



// import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import ModalScreen from './ModalScreen';
// import BlogPost from './BlogPost';
// import BlogList from './BlogList';
// import BlogFilterList from './BlogFilterList';
// import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
// import _ from 'lodash';


// const BLOG_POSTS = { //model for demoing
//   'alskjdldskjflsakjdz': {
//     date: '2018-07-11',
//     title: 'Lorem Ipsum',
//     emotions: 'happy',
//     content: ''
//   },
//   'alasdasdasfdsasakjdz': {
//     date: '2018-06-01',
//     title: 'Lorem Ipsum',
//     emotions: 'sad',
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis purus sit amet volutpat consequat mauris nunc. Convallis a cras semper auctor neque. Quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Non tellus orci ac auctor augue mauris augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quisque id diam vel quam elementum pulvinar etiam non. Dignissim diam quis enim lobortis scelerisque fermentum. Egestas pretium aenean pharetra magna ac. Quis lectus nulla at volutpat diam ut venenatis. Aliquam vestibulum morbi blandit cursus risus. Fringilla ut morbi tincidunt augue. Laoreet non curabitur gravida arcu. Orci sagittis eu volutpat odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Urna duis convallis convallis tellus id interdum. Nulla porttitor massa id neque aliquam vestibulum morbi. In iaculis nunc sed augue lacus viverra vitae congue. In est ante in nibh mauris cursus mattis molestie. Adipiscing at in tellus integer feugiat. Duis ut diam quam nulla porttitor. Elementum integer enim neque volutpat ac. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacus luctus accumsan tortor posuere ac ut. Volutpat odio facilisis mauris sit. Blandit massa enim nec dui nunc mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Feugiat pretium nibh ipsum consequat Consectetur adipiscing elit duis tristique sollicitudin nibh. Auctor eu augue ut lectus arcu bibendum at varius. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Velit aliquet sagittis id consectetur. Aliquet nec ullamcorper sit amet risus nullam eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est ultricies integer quis. Laoreet sit amet cursus sit amet dictum sit amet justo. Convallis a cras semper auctor neque vitae. Lacus luctus accumsan tortor posuere ac. Et malesuada fames ac turpis egestas. Vitae congue eu consequat ac felis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque habitant morbi tristique senectus. Eget mi proin sed libero enim. Sit amet consectetur adipiscing elit duis. Vestibulum sed arcu non odio euismod lacia. Volutpat consequat mauris nunc congue nisi vitae suscipit.Amet nisl purus in mollis nunc sed id semper risus. Mattis pellentesque id nibh tortor id aliquet lectus. Maecenas pharetra convallis posuere morbi. Non quam lacus suspendisse faucibus. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus. Lorem sed risus ultricies tristique nulla. Nisi porta lorem mollis aliquam ut porttitor. Sit amet aliquam id diam maecenas. Sed adipiscing diam donec adipiscing. Ac auctor augue mauris augue neque gravida in fermentum et. Massa eget egestas purus viverra accumsan in. Ultrices mi tempus imperdiet nulla. Nunc congue nisi vitae suscipit tellus mauris a. Est ultricies integer quis auctor elit sed vulputate. Molestie nunc non blandit massa enim nec dui. Aenean et tortor at risus viverra adipiscing at in. Purus sit amet volutpat consequat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.A scelerisque purus semper eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et netus et malesuada fames ac. Commodo sed egestas egestas fringilla. Dis parturient montes nascetur ridiculus mus. Ut sem viverra aliquet eget sit amet tellus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictum sit amet justo donec enim diam. Cras pulvinar mattis nunc sed blandit libero. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Commodo nulla facilisi nullam vehicula. Aliquet nec ullamcorper sit amet risus nullam. Placerat in egestas erat imperdiet sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quisque id diam vel quam elementum."
//   },
//   'alsfdgsfdgrghytlsakjdz': {
//     date: '2018-08-11',
//     title: 'Lorem Ipsum',
//     emotions: 'upset',
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sagittis purus sit amet volutpat consequat mauris nunc. Convallis a cras semper auctor neque. Quis commodo odio aenean sed adipiscing diam donec. Fringilla ut morbi tincidunt augue. Non tellus orci ac auctor augue mauris augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Quisque id diam vel quam elementum pulvinar etiam non. Dignissim diam quis enim lobortis scelerisque fermentum. Egestas pretium aenean pharetra magna ac. Quis lectus nulla at volutpat diam ut venenatis. Aliquam vestibulum morbi blandit cursus risus. Fringilla ut morbi tincidunt augue. Laoreet non curabitur gravida arcu. Orci sagittis eu volutpat odio facilisis mauris sit amet. Id porta nibh venenatis cras sed felis eget velit aliquet. Urna duis convallis convallis tellus id interdum. Nulla porttitor massa id neque aliquam vestibulum morbi. In iaculis nunc sed augue lacus viverra vitae congue. In est ante in nibh mauris cursus mattis molestie. Adipiscing at in tellus integer feugiat. Duis ut diam quam nulla porttitor. Elementum integer enim neque volutpat ac. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacus luctus accumsan tortor posuere ac ut. Volutpat odio facilisis mauris sit. Blandit massa enim nec dui nunc mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Feugiat pretium nibh ipsum consequat Consectetur adipiscing elit duis tristique sollicitudin nibh. Auctor eu augue ut lectus arcu bibendum at varius. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Velit aliquet sagittis id consectetur. Aliquet nec ullamcorper sit amet risus nullam eget. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est ultricies integer quis. Laoreet sit amet cursus sit amet dictum sit amet justo. Convallis a cras semper auctor neque vitae. Lacus luctus accumsan tortor posuere ac. Et malesuada fames ac turpis egestas. Vitae congue eu consequat ac felis. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Pellentesque habitant morbi tristique senectus. Eget mi proin sed libero enim. Sit amet consectetur adipiscing elit duis. Vestibulum sed arcu non odio euismod lacia. Volutpat consequat mauris nunc congue nisi vitae suscipit.Amet nisl purus in mollis nunc sed id semper risus. Mattis pellentesque id nibh tortor id aliquet lectus. Maecenas pharetra convallis posuere morbi. Non quam lacus suspendisse faucibus. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit ut aliquam purus. Lorem sed risus ultricies tristique nulla. Nisi porta lorem mollis aliquam ut porttitor. Sit amet aliquam id diam maecenas. Sed adipiscing diam donec adipiscing. Ac auctor augue mauris augue neque gravida in fermentum et. Massa eget egestas purus viverra accumsan in. Ultrices mi tempus imperdiet nulla. Nunc congue nisi vitae suscipit tellus mauris a. Est ultricies integer quis auctor elit sed vulputate. Molestie nunc non blandit massa enim nec dui. Aenean et tortor at risus viverra adipiscing at in. Purus sit amet volutpat consequat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi.A scelerisque purus semper eget. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Et netus et malesuada fames ac. Commodo sed egestas egestas fringilla. Dis parturient montes nascetur ridiculus mus. Ut sem viverra aliquet eget sit amet tellus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Dictum sit amet justo donec enim diam. Cras pulvinar mattis nunc sed blandit libero. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Commodo nulla facilisi nullam vehicula. Aliquet nec ullamcorper sit amet risus nullam. Placerat in egestas erat imperdiet sed. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quisque id diam vel quam elementum."
//   }
// };

// export default class UserHome extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     this.state = {
//       years: [],
//       months: [],
//       emotions: [],
//     }
//   }

//   handleSignOut() {
//     this.props.signOutCallback();
//   }

//   componentDidMount() {
//     // need ot change this!!
//     let groupedPostsDate = _.groupBy(BLOG_POSTS, 'date');
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     var arrDate = Object.keys(groupedPostsDate).map(date => {
//       return new Date(date);
//     });
//     let arrMonths = Object.keys(groupedPostsDate).map(date => {
//       let dates = new Date(date).getMonth();
//       return months[dates];
//     });
//     this.setState({ months: arrMonths });

//     let groupedPostsEmots = _.groupBy(BLOG_POSTS, 'emotions');
//     let arrEmot = Object.keys(groupedPostsEmots);
//     this.setState({ emotions: arrEmot });
//     this.setState({ blogposts: BLOG_POSTS });
//   }

//   menuToggle(e) {
//     e.preventDefault();
//     let wrapper = document.querySelector('.wrapper');
//     if (wrapper.classList.contains('toggled')) {
//       wrapper.classList.remove('toggled');
//     } else {
//       wrapper.classList.add('toggled');
//     }
//   }

//   // Renders the view of the home screen for the user
//   render() {
//     //Blog Post Code
//     /*
//     let postLinks = Object.keys(BLOG_POSTS).map((month) => {
//         return (
//         <li key={month}>
//           <a to={'/blog/posts/month'+month} className="nav-link">{date}</a>
//         </li>
//         )
//       });
//     */
//     let sad = 'sad';

//     return (
//       <div className="App">
//         <main>
//           <div className="wrapper toggled">
//             <div className="sidebar-wrapper">
//               <SideBar userId={this.props.userId} logout={() => this.handleSignOut()} years={this.state.years} months={this.state.months} emotes={this.state.emotions} />
//             </div>

//             <div className="page-content-wrapper">
//               {/* <div>
//                 <h1>You are now logged in!</h1>
//                 <ModalScreen buttonLabel="Add Journal"/>
//                 <ModalScreen buttonLabel="Edit Journal"/>
//                 <Button onClick={() => { this.handleSignOut() }}>Log Out</Button>
//               </div> */}

//               <div className="container-fluid">
//                 <div className="menu">
//                   <button type="button" className="btn btn-dark" onClick={this.menuToggle}><i className="far fa-bars"></i>Menu</button>
//                 </div>
//               </div>
//               <Switch>
//                 <Route exact path='/blog/posts/:attr' render={(routerProps) => <BlogFilterList {...routerProps} posts={BLOG_POSTS} />} />
//                 <Route path='/' render={(routerProps) => <BlogList {...routerProps} posts={BLOG_POSTS} />} />
//                 <Route path='/blog' render={(routerProps) => <BlogList {...routerProps} posts={BLOG_POSTS} />} />
//               </Switch>
//               {/*<BlogList posts={BLOG_POSTS}/>*/}


//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// class SideBar extends Component {
//   render() {
//     return (
//       <ul className="sidebar-nav">
//         <li><a className="user bold" href="">John Appleseed</a></li>
//         <li><p className="secondary">Personal Journal</p></li>

//         <div className="entry">
//           <ModalScreen type='add' buttonLabel='Add Journal' userId={this.props.userId} /> 
//         </div>

//         <li><Link to='/blog' className="year bold">2018</Link></li>

//         <DateList years={this.props.years} months={this.props.months} />

//         <li><Link className='bold' to='/blog'>Emotion Filters</Link></li>

//         <EmoteList emotes={this.props.emotes} />

//         <li><a className="bold" onClick={() => this.props.logout()}>Log Out</a></li>
//       </ul>
//     );
//   }
// }

// class Month extends Component {
//   render() {
//     let month = this.props.month;
//     return (
//       <li key={month}>
//         <NavLink to={'/blog/posts/' + month} activeClassName='bg-secondary'>{month}</NavLink>
//       </li>
//     );
//   }
// }

// class DateList extends Component {
//   render() {
//     let monthArray = this.props.months.map((month) => {
//       return <Month key={month} month={month} />
//     });

//     return (
//       <ul className="secondary">
//         {monthArray}
//       </ul>
//     );
//   }
// }

// class Emotes extends Component {
//   render() {
//     let emote = this.props.emote;
//     return (
//       <li className={emote}>
//         <NavLink to={'/blog/posts/' + emote} activeClassName='bg-secondary'>{emote}</NavLink>
//       </li>
//     );
//   }
// }
// class EmoteList extends Component {
//   render() {
//     let emoteArray = this.props.emotes.map((emote) => {
//       return <Emotes key={emote} emote={emote} />
//     })

//     return (
//       <ul className="secondary">
//         {emoteArray}
//       </ul>
//     );
//   }
// }

