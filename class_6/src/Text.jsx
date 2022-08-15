import { useEffect } from "react";

export const Text = () => {
  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUNTED");
    };
  }, []);

  return (
    <>
      <p>Texto</p>
    </>
  );
};
