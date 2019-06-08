/* eslint-disable react/react-in-jsx-scope */
import css from "./layout.scss"

const textStyle = {
  fontSize: 10,
  color: "#eeeeee33"
}

export default function Footer() {
  return (
    <div className={css.footer}>
      <div style={textStyle}> © jamal, 2019</div>
    </div>
  )
}
