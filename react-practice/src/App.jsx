import React from "react";
import NetflixPage from "./components/netflixCard";
import MovieCard from "./components/mapMethod";
import EventHandling from "./components/eventHandling";
import UseStateHook from "./hooks/state";
import DerivedState from "./derivedState";
import LiftingStateUp from "./liftingstateup";
import ToogleBtnProject from "./toogleProject";
import ToDoListComponent from "./todoListProject/toDoListComponent";
import UseStateHooks from "./hooks/useStateChallange";
import RegistatioFormReact from "./registationForm";
import UseEffectHookComponent from "./useEffectHook";
import UseEffectClockComponent from "./useEffectHook/useEffectClock";
const App = () => {
  return (
    <>
      <UseEffectClockComponent/>
    </>
  )
}



export default App;