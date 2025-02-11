const Ingredient = ({ ingredient, onClick, actionLabel }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={onClick}>{actionLabel}</button>
      </li>
    );
  };
  
  export default Ingredient;