import { CounterApp } from "./CounterApp";
import { Profile } from "./Profile";

export const App = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <CounterApp value={5} />
      <Profile name="Reynaldo" last="Duarte" />
    </>
  );
};
