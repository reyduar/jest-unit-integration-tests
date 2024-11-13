import heroes from "../data/heroes";

const getHeroesById = (id: number) => heroes.find((hero) => hero.id === id);
const getHeroesByOwner = (owner: string) =>
  heroes.filter((hero) => hero.owner === owner);

export { getHeroesById, getHeroesByOwner };
