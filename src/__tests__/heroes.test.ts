import heroes from "../data/heroes";
import {
  getHeroesById,
  getHeroesByOwner,
  getHeroeByIdAsync,
} from "../utilities";

describe("Heroes", () => {
  test.skip("Should be return one heroe to call getHeroeById", () => {
    const id = 1;
    const heroe = getHeroesById(id);
    const expected = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    expect(heroe).toEqual(expected);
  });

  test.skip("Should be return undefined getHeroeById", () => {
    const id = 100;
    const heroe = getHeroesById(id);
    expect(heroe).toBeFalsy();
  });

  test.skip("Should be return Dc heroes to call getHeroesByOwner", () => {
    const owner = "DC";
    const heroesByOwner = getHeroesByOwner(owner);
    const expected = heroes.filter((hero) => hero.owner === owner);
    expect(heroesByOwner).toEqual(expected);
  });

  test.skip("Should be return one heroe from getHeroeByIdAsync with DONE", (done) => {
    const id = 1;
    const expected = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(expected);
      done();
    });
  });

  test("Should be return an error if a Heroe does not exists", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe(`Hero ${id} not found`);
        done();
      });
  });
});
