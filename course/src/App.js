import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseSearch from './components/CourseSearch';
import CourseTotal from './components/CourseTotal';

function App() {
  return (
    <div className="App">
    <CourseForm/>
    <CourseSearch/>
    <CourseList/>
    <CourseTotal/>
    </div>
  );
}

export default App;
