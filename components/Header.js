/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link"
import css from "./layout.scss"

const linkStyle = {
  // marginRight: 15
  // margin: 0
}

export default function Header() {
  return (
    <div className={css.header}>
      <div>
        <Link href="/" className={css.nav} activeClassName={css.activeNav}>
          <a style={linkStyle}> App </a>
        </Link>

        <Link href="/about" className={css.nav} activeClassName={css.activeNav}>
          <a style={linkStyle}>Code</a>
        </Link>
      </div>
    </div>
  )
}
