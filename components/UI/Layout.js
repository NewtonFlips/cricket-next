import classes from "./Layout.module.css";

function Layout(props) {
  return <div className={classes.page}>{props.children}</div>;
}

export default Layout;
