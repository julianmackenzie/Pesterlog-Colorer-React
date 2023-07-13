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


// Used anytime the pesterlog display needs to be updated
function updateLogBox() {
  const logbox = document.getElementById("logbox");

  logbox.innerHTML = "";
  txtArray.forEach(e => {
    logbox.innerHTML += e;
    logbox.innerHTML += "<p>";
  });

  logbox.style.visibility = "visible";
  logbox.style.maxHeight = "20rem";
  logbox.style.marginTop = "2rem";
}





// Used to hold each line of the imported Pesterlog
let txtArray = [];
let charArray = [];
let logName = "empty";
let chardataName = "pesterlogcharacterdata";


export default function Process() {


  // INPUT FILE OPENING
  
  const [openLogSelector, { filesContent: logContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      txtArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog

      updateLogBox();
      

      // Filename prep for export
      let nameMinusTxt = filesContent[0].name.split(".");
      logName = nameMinusTxt[0];
      console.log(txtArray);
    },
  });


  function notEmpty(e) {
    return e !== "";
  }

  const [openCharacterSelector, { filesContent: charContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      let tempArray = filesContent[0].content.split("\r\n");  // Create array containing individual lines of the Pesterlog
      charArray = tempArray.filter(notEmpty).map(makeThruple);


      // Filename prep for export
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
    // unparse dialogue for export
    let toReturn = "";
    txtArray.forEach(e =>{
      toReturn += (e + '\n');
    });

    var link=document.createElement('a');
    link.href = makeTextFile(toReturn.trim());
    console.log(logName);
    link.download = logName + "_processed.txt";
    link.click();

  }

  function exportCharData(data) {
    // TODO: unparse character data for export
    let toReturn = "";
    charArray.forEach(e =>{
      toReturn += (e[0] + "|" + e[1] + "|" + e[2] + '\n');
    });

    var link=document.createElement('a');
    link.href = makeTextFile(toReturn);
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


        <div id="logbox" className="bg-gray-200 overflow-y-scroll invisible">
          
        </div>





        <div>
          <button className="bg-mountain-meadow-400 text-white py-1 px-5 my-10 mx-10 text-xl rounded-full border-4 border-mountain-meadow-500" onClick={() => openCharacterSelector()}>Import Character Data</button>
          <button onClick={() => exportCharData(charArray)} className="bg-red-500 text-white py-1 px-5 mx-10 text-xl rounded-full border-4 border-red-600">Export Character Data</button>
        </div>


        <div>
          <button onClick={() => exportLog(txtArray)} className="bg-gentle-600 text-white py-1 px-3 text-xl rounded-full border-4 border-gentle-500">Export Pesterlog</button>
        </div>


        <QuitButton />

      </div>
    </div>
  );
}

