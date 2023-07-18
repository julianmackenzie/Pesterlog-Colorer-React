import { Link } from 'react-router-dom';
import { useFilePicker } from 'use-file-picker';
import '../App.css';
import "@melloware/coloris/dist/coloris.css";
import Coloris from "@melloware/coloris";
import { useEffect, useState } from 'react';









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







export default function Process() {

  // React-based variable declaration (since these will be updated with the UI)
  // data arrays  
  const [txtArray, setTxtArray] = useState([]);
  const [charArray, setCharArray] = useState([]);
  // filenames
  const [logName, setLogName] = useState("empty");
  const [chardataName, setChardataName] = useState("pesterlogcharacterdata");

  const [coloredTxtArray, setColoredTxtArray] = useState([]);  // constantly-changing copy of txtArray displayed to the user as a preview
  const [characterColor, setCharacterColor] = useState({});

  

  



  // Used to copy the contents of txtArray into coloredTxtArray
  useEffect(() => {

    setColoredTxtArray(txtArray.map((line) => (
      {"character": line.slice(0,2), "dialogue": line}
    )));

  }, [txtArray]);


  // Used to add color to the log from an imported character data file
  useEffect(() => {
    
    let newCharacterColor = {...characterColor};
    charArray.forEach((e) => {
      newCharacterColor[e[0]] = e[1];
    });
    setCharacterColor(newCharacterColor);

  }, [chardataName]);


  // INPUT FILE OPENING
  
  const [openLogSelector, { filesContent: logContent }] = useFilePicker({
    accept: '.txt',
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {  // When the file is successfully opened
      // this callback is called when there were no validation errors
      // Filename prep for export
      let nameMinusTxt = filesContent[0].name.split(".");
      setLogName(nameMinusTxt[0]);
      setTxtArray(filesContent[0].content.split("\r\n"));  // Create array containing individual lines of the Pesterlog
      
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
      setCharArray(tempArray.filter(notEmpty).map(makeThruple));


      
      
      // Filename prep for export
      let nameMinusTxt = filesContent[0].name.split(".");
      setChardataName(nameMinusTxt[0]);
    },
  });



  // OUTPUT FILE OPENING

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
      let prefix = "";
      let suffix = "";
      charArray.forEach(c =>{
        if (c[0] === e.slice(0,2)) {
          prefix = "[color=" + c[1] + "]";
          suffix = "[/color]"
        }
      });

      toReturn += (prefix + e + suffix + '\n');
    });

    var link=document.createElement('a');
    link.href = makeTextFile(toReturn.trim());
    link.download = logName + "_processed.txt";
    link.click();

  }





  function exportCharData(data) {
    // unparse character data for export
    let toReturn = "";
    charArray.forEach(e =>{
      toReturn += (e[0] + "|" + e[1] + "|" + e[2] + '\n');
    });

    if (toReturn.length < 1) return;

    var link=document.createElement('a');
    link.href = makeTextFile(toReturn);
    link.download = chardataName + ".txt";
    link.click();

  }

  // END @USELESSCODE'S CODE




    function addCharacter(taginput, colorinput, nameinput, charArray) {
      if (taginput.value.length !== 2 || colorinput.value.length !== 7 || nameinput.value.length < 1) {
        
        // TODO: MESSAGE THE USER
        
        console.log("Couldn't add character, not enough data.");

        return;
      }

      // add new data to character data array
      let tempArray = [taginput.value, colorinput.value, nameinput.value];
      setCharArray([...charArray, tempArray]);  // Make new array w contents of old array plus new item

      
      // assemble character key and color value for line color fetching
      let newCharacterColor = {...characterColor};
      newCharacterColor[taginput.value] = colorinput.value;
      setCharacterColor(newCharacterColor);



      // reset inputs
      taginput.value = "";
      colorinput.value = "";
      nameinput.value = "";

    }








  // useEffect initializes the color picker just once
  useEffect(() => {
    Coloris.init();
    Coloris({el: "#coloris", alpha: false, themeMode: 'dark'});
  }, [])
  


  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">



        



        <div>
          <button className="bg-gentle-600 text-white py-1 px-3 mx-10 text-xl rounded-full border-4 border-gentle-500" onClick={() => openLogSelector()}>Import Pesterlog </button>
        </div>



        {txtArray.length > 0 && (
          <div id="logbox" className="bg-gray-200 mt-8 max-h-80 overflow-y-scroll" >
            {coloredTxtArray.map((line, index) => (
            <p key={index} style={{color: characterColor[(line.character)] ?? "#000"}}>{line.dialogue}</p>
            ))}
          </div>
        )}

        


        <div>
          <button className="bg-mountain-meadow-400 text-white py-1 px-5 my-10 mx-10 text-xl rounded-full border-4 border-mountain-meadow-500" onClick={() => openCharacterSelector()}>Import Character Data</button>
          <button onClick={() => exportCharData(charArray)} className="bg-red-500 text-white py-1 px-5 mx-10 text-xl rounded-full border-4 border-red-600">Export Character Data</button>
        </div>

        <div>
          <input id="taginput" type="text" placeholder="Tag" className="mx-3 w-7 text-center rounded-md" maxLength={2} />
          <input id="colorinput" type="text" placeholder="Color Hex" className="mx-3 w-28 pl-1 rounded-md" maxLength={7} data-coloris />
          <input id="nameinput" placeholder="chumHandle" type="text" className="mx-3 px-1 rounded-md" />
        </div>

        <div>
          <button
            onClick={() => addCharacter(document.getElementById("taginput"), document.getElementById("colorinput"), document.getElementById("nameinput"), charArray)}
            className="bg-gentle-600 text-white py-1 px-3 mt-10 text-xl rounded-full border-4 border-gentle-500">Add Character
          </button>
        </div>



        {charArray.length > 0 && (
          <div id="charbox" className="bg-gray-200 mt-8 max-h-80 overflow-y-scroll" >
            {charArray.map((line, index) => (
              <p style={{color: line[1]}} key={index}>{"["+ line[0] + "] " + line[2]} <input type="checkbox" defaultChecked="true" /></p>
            ))}
          </div>
        )}



        <div>
          <button onClick={() => exportLog(txtArray)} className="bg-gentle-600 text-white py-1 px-3 my-10 text-xl rounded-full border-4 border-gentle-500">Export Pesterlog</button>
        </div>


        <QuitButton />

      </div>
    </div>
  );
}

