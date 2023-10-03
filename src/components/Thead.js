import { memo } from "react"

function Thead({ length }) {
  return (
    <thead className="thead">
      <tr>
        <td>Event Count: {length || 0}</td>
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
    </thead>
  )
}

export default memo(Thead);