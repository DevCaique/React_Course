import { useState } from "react";
import { Text } from "./Text";

export const App = () => {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </>
  );
};
