import heroes from "../data/heroes";

const getHeroesById = (id: number) => heroes.find((hero) => hero.id === id);
const getHeroesByOwner = (owner: string) =>
  heroes.filter((hero) => hero.owner === owner);

const getHeroeByIdAsync = (id: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = heroes.find((hero) => hero.id === id);
      hero ? resolve(hero) : reject(`Hero ${id} not found`);
    }, 1000);
  });
};

export { getHeroesById, getHeroesByOwner, getHeroeByIdAsync };
