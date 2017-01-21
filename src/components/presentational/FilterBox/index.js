import React, { Component } from 'react';
import { Sticky } from 'react-sticky';

import './index.css';

export default class FilterBox extends Component {

  render() {
    return (
      <div className="filter-box filter-box--left">
      	<Sticky 
      		className="filter-box__sticky">
      		<div className="filter-box__container">
        		<div className="filter-box__group-name">
        			Departments
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Developer</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Audio Editor</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">3DCG</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Accountant</div>
        		</div>
        		<div className="filter-box__input-container">
        			<input 
        				className="filter-box__checkbox" 
        				type="checkbox"/>
        			<div className="filter-box__input-name">Illustrator</div>
        		</div>
                <div className="filter-box__input-container">
                    <input 
                        className="filter-box__checkbox" 
                        type="checkbox"/>
                    <div className="filter-box__input-name">Animator</div>
                </div>                
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