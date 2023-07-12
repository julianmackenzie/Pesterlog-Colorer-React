import { Link } from 'react-router-dom';
import './App.css';







function StartButton() {
  return (
    <Link to="/pages/Process">
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Start Processing</button>
    </Link>
  );
}


function TutorialButton() {
  return (
    <Link to="/pages/Tutorial">
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Tutorial</button>
    </Link>
  );
}






export default function App() {
  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">




        <div className="my-5">
          <StartButton />
        </div>

        <div className="my-20">
          <TutorialButton />
        </div>
        


      </div>
    </div>
  );
}

