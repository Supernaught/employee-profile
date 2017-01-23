import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { Link } from 'react-router';

import './index.css';

export default class FilterBox extends Component {

  componentWillReceiveProps() {
      this.props.handleQuery();
  }

  render() {
    return (
      <div className="filter-box filter-box--left">
      	<Sticky 
      		className="filter-box__sticky">
      		<div className="filter-box__container">
        		<div className="filter-box__group-name">
        			Departments
        		</div>
        		<Link 
                    className="filter-box__input-container"
                    to="/employees?developer=false">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Developer</div>
        		</Link>
        		<Link 
                    className="filter-box__input-container"
                    to="/employees?audio_editor=false">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Audio Editor</div>
        		</Link>
        		<Link 
                    className="filter-box__input-container"
                    to="/employees?3dcg=false">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">3DCG</div>
        		</Link>
        		<Link 
                    className="filter-box__input-container"
                    to="/employees?accountant=false">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Accountant</div>
        		</Link>
        		<Link 
                    className="filter-box__input-container"
                    to="/employees?illustrator=false">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Illustrator</div>
        		</Link>
                <Link 
                    className="filter-box__input-container"
                    to="/employees?animator=false">
                    <input 
                        className="filter-box__checkbox" 
                        type="checkbox"/>
                    <div className="filter-box__input-name">Animator</div>
                </Link>                
        		<div className="filter-box__group-name">
        			Employment Status
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">Active Employees</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">In-active Employees</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox"
                        type="radio"
                        name="employee-status"/>
        			<div className="filter-box__input-name">Both</div>
        		</div>
        	</div>
        </Sticky>
      </div>
    )
  }
}