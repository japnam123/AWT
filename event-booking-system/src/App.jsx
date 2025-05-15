import { Provider } from "react-redux";
import { store } from "./redux/store";
import EventList from "./components/EventList";

function App() {
  return (
    <Provider store={store}>
      <EventList />
    </Provider>
  );
}

export default App;
