import { memo, useContext } from "react"
import Context from "../context";

function RateItem({ bet, rate }) {
  const {basket, setBasket} = useContext(Context);

  const rateClick = (bet, rate) => {
    const inBasket = (bet) => basket.find((basketItem) => basketItem.bet.C === bet.C);

    if (inBasket(bet)) {
      setBasket([...basket.filter((basketItem) =>  basketItem.bet.C !== bet.C)]);
    } else {
      setBasket([...basket,{
        bet,
        rate,
      }]);
    }
  };

  return (
    <td
      onClick={() => rateClick(bet, rate)}
      className={basket.length > 0 && basket.find((basketItem) => basketItem.bet.C === bet.C) ? '-selected' : '-selectable'}
    >
      {rate}
    </td>
  )
}

export default memo(RateItem);