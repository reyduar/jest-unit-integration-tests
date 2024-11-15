import { getRandomGifUrl } from "../utilities";

describe("API", () => {
  test("Should be return an gif url from ", async () => {
    const url = await getRandomGifUrl();

    expect(typeof url).toBe("string");
  });

  // test("Should be return an gif url from ", async () => {
  //     await getRandomGifUrl()
  //     .then((heroe) => {
  //         expect(heroe).toBeFalsy();
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //         expect(error).toBe(`Hero ${id} not found`);
  //     });
  // });
});
