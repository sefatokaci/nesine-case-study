import { memo, useContext } from "react";
import Context from "../context";
import Thead from "./Thead";
import Tbody from "./Tbody";

function Table() {
  const { bets } = useContext(Context);

  return (
    <table>
      <Thead length={bets.length} />
      <Tbody />
    </table>
  )
}

export default memo(Table);