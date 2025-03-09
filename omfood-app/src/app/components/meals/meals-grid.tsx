import MealItem from './meal-item';
import classes from './meals-grid.module.css';

interface MealsGridProps {
  meals: { id: string; title: any; slug: any; image: any; summary: any; creator: any }[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}