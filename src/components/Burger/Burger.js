import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = props => {
  //Object.keys convert object to array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      //tranform igkey to array / transform of object key value pairs into array of burger ingredients where the value for the ingredients u need
      // array of length
      // extract all the types
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })

    // transfer array to something else
    .reduce((arr, el) => {
      //take element and add to this array
      return arr.concat(el);
    }, []);

  // output the p tag whenever the burger is empty
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients !</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
