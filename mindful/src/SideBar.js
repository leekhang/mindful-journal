import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years:['2018'],
      months:['July', 'June', 'May'],
      emotes:['#E7E7E7', '#3C4140', '#FF5151', '#FECC35', '#83E33F', '#80A4ED', '#F392FF']
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <SideBar years={this.state.years} months={this.state.months} emotes={this.state.emotes}/>
        </main>
      </div>
    );
  }
}

//Bootstrap sidebar example
class SideBar extends Component {
    
  menuToggle(e) {
    e.preventDefault();
    let wrapper = document.querySelector('.wrapper');
    if(wrapper.classList.contains('toggled')) {
      wrapper.classList.remove('toggled');
    } else {
      wrapper.classList.add('toggled');
    }
  }

  render() {
    return(
      <div className="wrapper toggled">
        <div className="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li><a className="user bold" href="">John Appleseed</a></li>
            <li><p className="secondary">Personal Journal</p></li>
            
            <div className="entry">
            <button type="button" className="btn btn-light">New Entry</button>
            </div>

            <li><a href="" className="year bold">2018</a></li>

            <DateList years= {this.props.years} months={this.props.months}/>
            
            <li><a href="" className="bold">Emotion Filters</a></li>

            <EmoteList emotes={this.props.emotes}/>
            
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="privacy"/>
              <label className="form-check-label bold">Private?</label>
            </div>

            <li><a href="" className="secondary">Log Out</a></li>
          </ul>
        </div>  

        <div className="page-content-wrapper">
          <div className="container-fluid">
            <button type="button" className="btn btn-dark" onClick={this.menuToggle}><i className="far fa-bars"></i>Menu</button>
            {/* <i class="far fa-bars"></i> */}
            {/* Put page content in this div. */}
          </div>
        </div>
      </div>
    );
  }
}

class Month extends Component {
  render() {
    return(
        <li><a>{this.props.month}</a></li>
    );
  }
}

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

class Emotes extends Component {
  render() {
    return(
      <div className="colors" 
        style={{
          backgroundColor:this.props.emote, 
          width:'40px', 
          height:'40px', 
          'marginLeft':'20px', 
          'marginBottom':'5px'
          }}>
      </div>
    );
  }
}

class EmoteList extends Component {
  render() {
    let emoteArray = this.props.emotes.map((emote) => {
      return <Emotes key={emote} emote={emote}/>
    })
    return(
      <div className="secondary">
          {emoteArray}
      </div>
    );
  }
}

export default App;
