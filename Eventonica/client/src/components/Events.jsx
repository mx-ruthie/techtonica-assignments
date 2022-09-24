import React from "react";
import { useEffect, useState } from "react";
import { useReducer } from "react";


//I half-wrote this code, but was running out of time and asked Sophia for assistance learning useReducer. 
//Sophia gave me an incredible tutoring session which left me understanding how the useReducer fully worked,
//and she allowed me to have her code to use in my project to move past this section

// some sample events
// moved the sample events to the back end
// const event1 = {
//   id: "1",
//   name: "Birthday",
//   date: "2021-09-01",
//   description: "A birthday party for my best friend",
//   category: "Celebration",
// };

// const event2 = {
//   id: "2",
//   name: "Graduation",
//   date: "2021-08-01",
//   description: "The class of 2021 graduates from East High",
//   category: "Education",
// };

// const event3 = {
//   id: "3",
//   name: "JS Study Session",
//   date: "2021-10-01",
//   description: "A chance to practice Javascript interview questions",
//   category: "Education",
// };

const Events = () => {
  //stores users in an array, initialized from hardcode
  const [events, setEvents] = useState([]);
  //defining the intial state for the event
  const initialState = {
    id: "",
    name: "",
    date: "",
    description: "",
    category: "",
  };

  const [eventList, setEventList] = useState([]);

  console.log("events", eventList);

  const getEvents = () => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((res) => {
        //setEventList(res) this was leaving a blank screen so we setEvents instead and here we are
        setEvents(res);
        console.log("this is res", res);
      });

  };

  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getEvents();
    console.log("hey I'm running");
  }, []);

  //must create the function because it's not pre-defined as useState is
  const reducer = (state, action) => {
    console.log(action, "this is the action");
    switch (action.type) {
      case "editName":
        console.log("Logged if the editName action is being dispatched");
        return { ...state, name: action.payload };

      case "editDescription":
        return { ...state, description: action.payload };

      case "editCategory":
        return { ...state, category: action.payload };

      case "editDate":
        return { ...state, date: action.payload };

      case "editId":
        console.log("TESTTTT", action.payload)
        return { ...state, id: action.payload };
    case "clear":
        return initialState
        
      default:
        return state;
    }
  };
  //creating the state object in the variable state (everything contstructed in reducer needs to be referenced using state.name, ect. )
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [events, setEvents] = useState([]);
  //stores the user input into new user
  //   const [newEvent, setNewEvent] = useState({
  //     name: "",
  //     id: "",
  //     date: "",
  //     description: "",
  //     category: "",
  //   });

  const [deleteId, setDeleteId] = useState("")

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, state]);
    dispatch({type: "clear" });
    //call dispatch insted > setNewEvent({ name: newEvent.name });
    //add newUser to users list, by unwrapping user array and adding a new user to it
  };
  const handleDelete = () => {
    console.log("handleDeleteId", deleteId) // <-- with reducer, `id` is part of `state`
    const filteredEvents = events.filter((event) => {
      return event.id != deleteId;
    });
    console.log("events", events)
    // set changes data and tells React to re-render the screen
    // console.log(events);
    // console.log(filteredEvents)
    setEvents( filteredEvents ); // <-- already an array
    setDeleteId('')
    //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  };

//   const handleDelete = (deletedId) => {
//     console.log("test")
//     console.log("test2", deletedId)
//     const filteredEvents = events.filter((event) => {
//       return event.id != deletedId;
//     });
//     // set changes data and tells React to re-render the screen
//     setEvents(filteredEvents);
//     //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
//   };
  // const handleDelete = (deletedId) => {
  //   const filteredUsers = users.filter((user) => {
  //     return user.id != deletedId;
  //   });
  // set changes data and tells React to re-render the screen
  // setUsers(filteredUsers);
  //setNewUser({...newUser, name: "sam", email: 'sam.com', id: 123})
  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          <ul>
            {events.map((event, index) => {
              return (
                <li key={index}>
                  {/* each thing inside map is an object */}
                  Name: {event.name}, Description: {event.description}
                </li>
              );
            })}
          </ul>
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#"  onSubmit={handleSubmit}>
          <fieldset>
            <label>Name: </label>
            <input
              type="text"
              value={state.name}
              id="add-event-name"
              placeholder="Name your event here"
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
              //taking object out and assigning the key name to e.target.value
              // onChange={(e) => setNewEvent(i => i.name = e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>ID: </label>
            <input
              type="number"
              id="add-user-id"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editId",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Date: </label>
            <input
              type="date"
              id="add-user-email"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Description: </label>
            <input
              type="text"
              id="add-event-description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>Category: </label>
            <input
              type="text"
              id="add-event-category"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form >
      </div>
      {/* why is delete event not in user and events */}
      <div>
        <h3>Delete Event</h3>
        <form id="delete-event" action="#" onSubmit={handleDelete}>
          <fieldset>
            <label>Event ID: </label>
            <input type="number" value={deleteId} min="1" id="delete-event-id" onChange={(e) => setDeleteId(e.target.value)}/>
          </fieldset>
          <input type="submit"/>
        </form>
      </div>
    </section>
  );
};

export default Events;