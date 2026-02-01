import Todo from "./components/Todo";
import UserForm from "./components/UserForm";
import ProgressBar from "./components/ProgressBar";
import CountdownTimer from "./components/CountdownTimer";
import SearchList from "./components/SearchList";

function App() {
  return (
    <div>
      <h1>React Internship Assignment</h1>
      <Todo />
      <UserForm />
      <ProgressBar />
      <CountdownTimer />
      <SearchList />
    </div>
  );
}

export default App;
