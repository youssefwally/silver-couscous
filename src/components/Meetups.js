import MeetupCard from "./MeetupCard";
import classes from './Meetups.module.css';

function Meetups(props) {
    return (
            <ul className={classes.list}>
                {props.items.map((item) => (
                     <MeetupCard 
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     address={item.address}
                     description={item.description}
                     image={item.image}/>
                ) )}
            </ul>
    );
}

export default Meetups; 