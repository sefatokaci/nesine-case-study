import { memo, useContext } from "react";
import Context from "../context";
import TableItem from "./TableItem";

function Tbody() {
  const { bets } = useContext(Context);

  return bets.map((bet, index) => <TableItem bet={bet} index={index} />)
}

export default memo(Tbody);