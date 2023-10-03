import { memo } from "react"
import RateItem from "./RateItem"

function TableItem({ bet, index }) {
  return (
    <tbody className="tbody" key={index}>
      <tr>
        <td>{bet.D} {bet.DAY} {bet.LN}</td>
        <td>Yorumlar</td>
        <td>4</td>
        <td>1</td>
        <td>x</td>
        <td>2</td>
        <td>Alt</td>
        <td>Üst</td>
        <td>H1</td>
        <td>1</td>
        <td>x</td>
        <td>2</td>
        <td>H2</td>
        <td>1-X</td>
        <td>1-2</td>
        <td>X-2</td>
        <td>Var</td>
        <td>Yok</td>
        <td>+99</td>
      </tr>
      <tr>
        <td>{bet.C} {bet.T} {bet.N}</td>
        <td>Yorumlar</td>
        <td>4</td>
        <td>6.71</td>
        {/*videoda gözüken diğer rate'lere rateItem konulabilirdi fakat parametre adreslerini case için gönderilen bilgi mailinde göremediğimden yalnızca bu alana yerleştirdim*/}
        <RateItem bet={bet} rate={bet.OCG['1'].OC['1'].O} />
        <td></td>
        <td>7.34</td>
        <td>{bet.OCG['5'].OC['26'].N}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{bet.OCG['2'].OC['3'].O}</td>
        <td>{bet.OCG['2'].OC['4'].O}</td>
        <td>{bet.OCG['2'].OC['5'].O}</td>
        <td></td>
        <td></td>
        <td>3</td>
      </tr>
    </tbody>
  )
}

export default memo(TableItem);