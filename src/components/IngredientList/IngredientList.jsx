// src/components/IngredientList/IngredientList.jsx

import Ingredient from '../Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => addToBurger(ingredient)}
          actionLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;