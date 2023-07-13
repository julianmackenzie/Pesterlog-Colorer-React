import { Link } from 'react-router-dom';
import { useFilePicker } from 'use-file-picker';
import '../App.css';








function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 my-20 text-xl rounded-full border-4 border-gentle-500">Quit Processing</button>
    </Link>
  );
}


// Used when importing character data
function makeThruple(data) {
  return data.split("|");
}





// Used to hold each line of the imported Pesterlog
let txtArray = [];
let charArray = [];
let logName = "empty";
let chardataName = "pesterlogcharacterdata";


export default function Process() {



  const [openLogSelector, { filesContent: logContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      txtArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog
      let nameMinusTxt = filesContent[0].name.split(".");
      logName = nameMinusTxt[0];
      console.log(txtArray);
    },
  });

  const [openCharacterSelector, { filesContent: charContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      let tempArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog
      charArray = tempArray.map(makeThruple);
      let nameMinusTxt = filesContent[0].name.split(".");
      chardataName = nameMinusTxt[0];
      console.log(charArray);
    },
  });



  // @USELESSCODE'S CODE
  // https://jsfiddle.net/UselessCode/qm5AG/
  // https://stackoverflow.com/a/21016088
  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };




  function exportLog(data) {
    // TODO: unparse dialogue for export

    var link=document.createElement('a');
    link.href = makeTextFile(data);
    console.log(logName);
    link.download = logName + "_processed.txt";
    link.click();

  }

  function exportCharData(data) {
    // TODO: unparse character data for export  

    var link=document.createElement('a');
    link.href = makeTextFile(data);
    console.log(logName);
    link.download = chardataName + ".txt";
    link.click();

  }

  // END @USELESSCODE'S CODE



  


  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">

        <div>
          <button className="bg-gentle-600 text-white py-1 px-3 mx-10 text-xl rounded-full border-4 border-gentle-500" onClick={() => openLogSelector()}>Import Pesterlog </button>
          
        </div>

        <div className="">
          <button className="bg-gentle-600 text-white py-1 px-3 my-10 mx-10 text-xl rounded-full border-4 border-gentle-500" onClick={() => openCharacterSelector()}>Import Character Data</button>
          <button onClick={() => exportCharData(charArray)} className="bg-gentle-600 text-white py-1 px-5 mx-10 text-xl rounded-full border-4 border-gentle-500">Export Character Data</button>
        </div>


        <div>
          <button onClick={() => exportLog(txtArray)} className="bg-gentle-600 text-white py-1 px-3 text-xl rounded-full border-4 border-gentle-500">Export Pesterlog</button>
        </div>


        <QuitButton />

      </div>
    </div>
  );
}

