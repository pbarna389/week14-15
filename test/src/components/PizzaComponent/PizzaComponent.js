import React from 'react';
import PropTypes from 'prop-types';
import './PizzaComponent.css';

const PizzaComponent = ({ name, price }) => {

  return (
    <div className="PizzaComponent">
      <p>Name of the pizza: {name}</p>
      <p>Price of the pizza: {price} $</p>
    </div>
  )
};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;
