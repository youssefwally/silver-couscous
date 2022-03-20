import Card from "../components/Card";
import classes from "./NewMeetupform.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router";

function NewMeetUpsPage(props) {
  const navigate = useNavigate();
  const titleRef = useRef();
  const imgRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImg = imgRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImg,
      address: enteredAddress,
      description: enteredDescription,
    };

    fetch("https://project2-d1f42-default-rtdb.firebaseio.com/.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="title"> Title </label>
            <input type="text" id="title" required ref={titleRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="img"> Image </label>
            <input type="url" id="img" ref={imgRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address"> Address </label>
            <input type="text" id="address" required ref={addressRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description"> Description </label>
            <textarea
              type="text"
              id="description"
              required
              rows="5"
              ref={descriptionRef}
            />
          </div>
          <div className={classes.actions}>
            <button> Add Event </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetUpsPage;
