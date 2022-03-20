import MainNavagation from "./MainNavigation";
import classes from './Layout.module.css';



function Layout(props) {
  return (
    <div>
      <MainNavagation />
      <main className={classes.main}> {props.children} </main>
    </div>
  );
}

export default Layout;
