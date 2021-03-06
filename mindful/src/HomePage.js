import firebase from 'firebase/app';
import React, { Component } from 'react';
import BlogList from './BlogList';
import BlogFilterList from './BlogFilterList'; 
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import {SideBar, MobileNav} from './Navigation';


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
        allEntries: []
      }
    }

    handleSignOut() {
        this.props.signOutCallback(); 
    }
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
  }

  // Renders the view of the home screen for the user
  render() {
    let posts = this.state.allEntries;
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

    let groupedPostsEmots = _.groupBy(posts, 'emotion');
    let arrEmot = Object.keys(groupedPostsEmots);
    
    return (
      <div className="App">
        <main>
          <div className="wrapper toggled">
            <div className="sidebar-wrapper">
              <SideBar userId={this.props.userId} logout={()=>this.handleSignOut()} months={arrUniqueMonths} emotes={arrEmot} />
            </div>

            <div className="page-content-wrapper">
              <MobileNav userId={this.props.userId} logout={()=>this.handleSignOut()} months={arrUniqueMonths} emotes={arrEmot} />         
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
                  <Route exact path='/blog/posts/:attr' render={(routerProps) => <BlogFilterList {...routerProps} userId={this.props.userId} posts={this.state.allEntries}/> }/>
                  <Route path='/' render={(routerProps) => <BlogList {...routerProps} userId={this.props.userId} posts={this.state.allEntries}/> }/>
                  <Route path='/blog' render={(routerProps) => <BlogList {...routerProps} userId={this.props.userId} posts={this.state.allEntries}/> }/>
              </Switch>
            </div>
            </div>
          </main>
        </div>
      );
    }
  }
