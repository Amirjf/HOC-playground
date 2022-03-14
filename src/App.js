import "./App.css";
import Posts from "./components/posts-component/posts.component";
import ToDos from "./components/todos-component/todos.component";

function App() {
  return (
    <div className="app-container">
      <Posts dataSource="https://jsonplaceholder.typicode.com/posts" />
      <ToDos dataSource="https://jsonplaceholder.typicode.com/todos" />
      {/* <Users />
      <Photos /> */}
    </div>
  );
}

export default App;
