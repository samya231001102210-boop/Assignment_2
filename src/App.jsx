import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

import students from "./data/students";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main>
        <StudentList students={students} />
      </main>

      <Footer />

    </div>
  );
}

export default App;