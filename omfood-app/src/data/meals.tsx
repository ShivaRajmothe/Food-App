import sql from 'better-sqlite3';

const db = sql('meals.db');

interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
}

const getMeals: () => Promise<Meal[]> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}
export default getMeals;