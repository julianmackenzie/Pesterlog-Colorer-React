
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



let version = "1.0.0"
let date = "7/25/23"



export default function Header() {
    return (
      <div className="App">
        <footer className="App-version">
          <Popup nested trigger={<button className="versionbutton fixed text-2xl left-3 bottom-3 text-gentle-300 hover:text-gentle-100">Version {version}</button>} lockScroll modal>

            {close => (
              <div className="modal bg-gentle-600 border-4 p-2 rounded-2xl border-gentle-400">



                <button className="popupclose bg-gentle-500 border-4 rounded-full border-gentle-400" onClick={close}>
                  &times;
                </button>

                <div className="popupheader">

                  <Popup trigger={<button className="versionmenubutton">Version {version} <p>⌵</p></button>}
                  position="bottom center" on="hover" closeOnDocumentClick mouseLeaveDelay={1500}
                  mouseEnterDelay={0} arrow={false} nested>
                  

                  
                    <div className="versionmenu">
                      <Popup trigger={<div className="menu-item">1.0.x</div>} position="right top" on="hover" 
                      closeOnDocumentClick mouseLeaveDelay={500} mouseEnterDelay={0} arrow={false}>
                        
                        <div className="versionsubmenu">
                          <div><button className="menu-item">1.0.0</button></div>
                          <div><button className="menu-item">1.0.1</button></div>
                        </div>
                        


                      </Popup>

                    </div>
                  
                  </Popup>

                </div>
                


                
                
                

                <div className="popupcontent">
                  <div>
                    <h1>Release Date: {date}</h1>
                  </div>
                  <div>
                    <h2>Changes:</h2>
                    <ul className="list-disc">
                      <li>Published gentleTranscendent's Pesterlog Colorer!</li>
                    </ul>
                    
                    <h2>Notes:</h2>
                    <p>This project was created across two and a half weeks as part of a summer CS internship between other tasks. I hope it is of good use to lots of people!</p>
                    <p>As this gets updated, this window will hold previous version information as well as the latest updates that I make, and potentially some sort of blog area since I've always enjoyed documenting the fun and miserable parts of my projects.</p>
                  </div>
                </div>
              </div>
              
            )}

          </Popup>
        </footer>
      </div>
    );
}