import heroes from "../data/heroes";
import { getHeroesById, getHeroesByOwner } from "../utilities";

describe("Heroes", () => {
  test("Should be return one heroe to call getHeroeById", () => {
    const id = 1;
    const heroe = getHeroesById(id);
    const expected = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    expect(heroe).toEqual(expected);
  });

  test("Should be return undefined getHeroeById", () => {
    const id = 100;
    const heroe = getHeroesById(id);
    expect(heroe).toBeFalsy();
  });

  test("Should be return Dc heroes to call getHeroesByOwner", () => {
    const owner = "DC";
    const heroesByOwner = getHeroesByOwner(owner);
    const expected = heroes.filter((hero) => hero.owner === owner);
    expect(heroesByOwner).toEqual(expected);
  });
});
