import { Link } from 'react-router-dom';
import '../App.css';






function QuitButton() {
  return (
    <Link to='../'>
      <button className="bg-gentle-600 text-white py-4 px-10 text-xl rounded-full border-4 border-gentle-500">Exit Tutorial</button>
    </Link>
  );
}



/*
cout << endl << endl << endl << endl << endl << endl << "--- PESTERLOG FORMATTING HELP ---" << endl << endl << "The .txt file that you provide should follow Homestuck's pesterlog format." << endl << endl
    << "Here is a template of how this should look." << endl << endl << endl
    << "-- firstHandle [XX] began pestering secondHandle [YY] --" << endl << endl
    << "XX: this is the first line of dialog" << endl
    << "XX: this is the second line of dialog" << endl
    << "YY: this is the third line of dialog" << endl
    << "XX: this is the fourth line of dialog" << endl << endl
    << "-- firstHandle [XX] ceased pestering secondHandle [YY] --" << endl << endl << endl
    << "The header and footer are optional (and shouldn't be used when logs involve more than 2 characters) but must be in the proper format if included." << endl << endl
    << "\"firstHandle\" and \"secondHandle\" are the chumhandles of your characters." << endl
    << "They are generally a lowercase word followed by a word with an uppercase first letter, with no space between, like \"gardenGnostic\" or \"tentacleTherapist\"." << endl << endl
    << "More importantly, XX and YY are the shortened chumhandles, the first letter of each word in the chumhandle capitalized." << endl
    << "For example, if your chumhandle was turntechGodhead, you would put TG in place of XX." << endl << endl
    << "The actual header and footer can technically contain anything as long as [XX] and [YY] are present (the [] is what is checked for)\nand as long as they begin and end with a \"--\"." << endl
    << "Each line of dialog needs to begin with XX or YY, and XX and YY must be different." << endl
    << "If two characters have the same abbreviation, choose one and replace all instances of theirs with a unique placeholder, then change it back after processing." << endl << endl << endl;

*/

export default function Tutorial() {
  return (
    <div className="App">
      <div className="bg-gentle-700 min-h-screen py-10">

        <h1>Pesterlog Processing Tutorial</h1>

        <h1>Input log requirements:</h1>

        <h2>
          <p>The .txt file that you provide should follow Homestuck's pesterlog format.</p>
          <p>Here is a template of how this should look:</p>
        </h2>

        <h3>
          <p>-- firstHandle [XX] began pestering secondHandle [YY] --</p>
          <p>XX: this is the first line of dialog</p>
          <p>XX: this is the second line of dialog</p>
          <p>YY: this is the third line of dialog</p>
          <p>XX: this is the fourth line of dialog</p>
          <p>-- firstHandle [XX] ceased pestering secondHandle [YY] --</p>
        </h3>

        <h2>
          <p>"firstHandle" and "secondHandle" are the Chumhandles of your characters. These can be anything but the Tag will generally be its abbreviation.</p>
          <p>Each line of dialog needs to begin with a Tag, and all characters in a log must have a unique Tag.</p>
          <p>If two characters have the same abbreviation, before processing, choose a character and replace all instances of their Tag in the .txt with a unique placeholder Tag, then change it back after processing.</p>
          <p>The header and footer can contain anything as long as they begin with "--" and any Tags are in format "[XX]".</p>
        </h2>


        <a href="/example_log.txt" download>Download Example Input Log</a>
        <a href="/example_chardata.txt" download>Download Example Input Character Data</a>
        

        

        <QuitButton />

      </div>
    </div>
  );
}

