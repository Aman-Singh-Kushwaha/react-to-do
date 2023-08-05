
function Header(props) {
  return (
    <h2>{props.title}</h2>
  )
}

Header.defaultProps={
  title: "Default Head"
}

export default Header