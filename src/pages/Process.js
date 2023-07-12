import { Link } from 'react-router-dom';
import { useFilePicker } from 'use-file-picker';
import '../App.css';




function ExportCharactersButton() {
  return (
    <button className="bg-gentle-600 text-white py-1 px-5 mx-10 text-xl rounded-full border-4 border-gentle-500">Export Character Data</button>
  );
}



function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 my-20 text-xl rounded-full border-4 border-gentle-500">Quit Processing</button>
    </Link>
  );
}



function makeThruple(data) {
  return data.split("|");
}



export default function Process() {

  // Used to hold each line of the imported Pesterlog
  let txtArray = [];
  let charArray = [];


  const [openLogSelector, { filesContent: logContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      txtArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog
      console.log(txtArray);
    },
  });

  const [openCharacterSelector, { filesContent: charContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      let tempArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog
      charArray = tempArray.map(makeThruple);
      console.log(charArray);
    },
  });

  


  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">

        <div>
          <button className="bg-gentle-600 text-white py-1 px-3 mx-10 text-xl rounded-full border-4 border-gentle-500" onClick={() => openLogSelector()}>Import Pesterlog </button>
          
        </div>

        <div className="">
          <button className="bg-gentle-600 text-white py-1 px-3 my-10 mx-10 text-xl rounded-full border-4 border-gentle-500" onClick={() => openCharacterSelector()}>Import Character Data</button>
          <ExportCharactersButton />
        </div>


        <div>
          <button className="bg-gentle-600 text-white py-1 px-3 text-xl rounded-full border-4 border-gentle-500">Export Pesterlog</button>
        </div>


        <QuitButton />

      </div>
    </div>
  );
}

