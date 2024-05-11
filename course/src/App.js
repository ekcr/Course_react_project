import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseSearch from './components/CourseSearch';

function App() {
  return (
    <div className="App">
    <CourseForm/>
    <CourseSearch/>
    <CourseList/>
    <CourseSearch/>
    </div>
  );
}

export default App;
