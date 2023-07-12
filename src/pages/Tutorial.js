import { Link } from 'react-router-dom';
import '../App.css';






function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Quit Processing</button>
    </Link>
  );
}




export default function Tutorial() {
  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">

        <h1>Pesterlog Processing Tutorial</h1>
        

        <QuitButton />

      </div>
    </div>
  );
}

