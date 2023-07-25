
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



let version = "Release 1.0";



export default function Header() {
    return (
      <div className="App">
        <footer className="App-version">
          <Popup trigger={<button className="versionbutton fixed text-2xl left-5 bottom-5 text-gentle-300 hover:text-gentle-100">{version}</button>} modal>

            {close => (
              <div className="modal bg-gentle-600 border-4 p-2 rounded-2xl border-gentle-400">
                <button className="popupclose bg-gentle-500 border-4 rounded-full border-gentle-400" onClick={close}>
                  &times;
                </button>

                <div className="popupheader">Changelog</div>
                <div className="popupcontent">
                  <h1>Version 1.0</h1>
                  <p>Released 7/25/2023</p>
                </div>
              </div>
              
            )}

          </Popup>
        </footer>
      </div>
    );
}