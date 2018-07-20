import React, { Component } from 'react';
import ModalScreen from './ModalScreen';
import { Link, NavLink } from 'react-router-dom';

//This file contains the navigations for both the desktop and mobile navbars.

//Renders the sidebar navigation for desktop
export class SideBar extends Component {
    render() {
        let emotes = this.props.emotes;
        let dates = this.props.months;
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
            <DateList months={dates} />
            <li><Link className='space' to='/blog'>Emotion Filters</Link></li>
            <EmoteList emotes={emotes} />
            <li><a className='space' onClick={() => this.props.logout()}>Log Out</a></li>
        </ul>
        );
    }
}

//Renders the top navbar for mobile
export class MobileNav extends Component {
    render() {
        let emotes = this.props.emotes;
        let dates = this.props.months;
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
                    <DateList months={dates} />
                    </div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Emotions
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <EmoteList emotes={emotes} />
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