import { connect } from "react-redux";
import Card from "./Card";
import classes from "./MeetupCard.module.css";

function MeetupCard(props) {

  


  return (
    <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={props.favouriteHandler}>Add to Favorites</button>
          </div>
        </Card>
    </li>
  );
}


export default (MeetupCard);
