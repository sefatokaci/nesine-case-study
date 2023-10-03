import { memo, useContext } from "react"
import Context from "../context";

function Basket() {
  const { basket } = useContext(Context);

  return (
    <div className="basket">
      <div className="basket-list">
        {basket.length > 0 && basket.map((item, index) => (
          <div className="basket-list-item" key={index}>
            {index + 1} Kod: {item.bet.C} Maç: {item.bet.N} <strong>Oran: {item.rate}</strong>
          </div>
        ))}
      </div>
      <div className="total">
        Toplam Tutar: <span>{basket?.length > 0 ? basket.map(({ rate }) => parseFloat(rate)).reduce((a, b) => a * b).toFixed(2) : 0}</span> TL
      </div>
    </div>
  )
}

export default memo(Basket);