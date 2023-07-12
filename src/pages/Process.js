import { Link } from 'react-router-dom';
import '../App.css';


function ImportLogButton() {
  return (
    <button className="bg-gentle-600 text-white py-1 px-3 mx-10 text-xl rounded-full border-4 border-gentle-500">Import Pesterlog</button>
  );
}


function ImportCharactersButton() {
  return (
    <button className="bg-gentle-600 text-white py-1 px-3 my-10 mx-10 text-xl rounded-full border-4 border-gentle-500">Import Character Data</button>
  );
}

function ExportCharactersButton() {
  return (
    <button className="bg-gentle-600 text-white py-1 px-5 mx-10 text-xl rounded-full border-4 border-gentle-500">Export Character Data</button>
  );
}



function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Quit Processing</button>
    </Link>
  );
}




export default function Process() {
  return (
    <div className="App">
      <body className="bg-gentle-700 min-h-screen py-10">

        <div>
          <ImportLogButton />
        </div>

        <div className="">
          <ImportCharactersButton />
          <ExportCharactersButton />
        </div>


        <QuitButton />

      </body>
    </div>
  );
}

