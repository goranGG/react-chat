import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Routes, Route } from "react-router-dom";
import FaqPage from "./pages/FaqPage";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const initialState = {
  counter: 0,
  user: "ME"
};

function reducer(initialState, action) {
  console.log("REDUDER =>", initialState, action);
  if (action.type === "INCREMENT") {
    return { ...initialState, counter: initialState.counter + action.value };
  } else if (action.type === "DECREMENT") {
    return { ...initialState, counter: initialState.counter - action.value };
  }
  return initialState;
}

const state1 = reducer(initialState, { type: "INCREMENT", value: 1 });
const state2 = reducer(state1, { type: "DECREMENT", value: 1 });

console.log(state1);
console.log(state2);

// console.log("REDUCER DECREMENT ===>", reducer(initialState, "DECREMENT"));
// console.log("REDUCER INCREMENT ===>", reducer(initialState, "INCREMENT"));

function App() {
  const context = useContext(AppContext);

  if (context.error !== null) {
    return <div>{"doslo je do greske:" + context.error.toString()}</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
