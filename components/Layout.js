/* eslint-disable react/react-in-jsx-scope */
import Footer from "./Footer"
import Header from "./Header"
import css from "./layout.scss"

export default function Layout(props) {
  return (
    <div className={css.main}>
      <Header />
      <div className={css.container}>
        <div className={css.appContainer}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
