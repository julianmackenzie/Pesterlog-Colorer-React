
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Changelog from '../Changelog/Changelog';



let version = "1.1.0";



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

                  <Popup trigger={<button className="versionmenubutton">Version<p>⌵</p></button>}
                  position="bottom center" on="hover" closeOnDocumentClick mouseLeaveDelay={700}
                  mouseEnterDelay={0} arrow={false} nested>
                  

                  
                    <div className="versionmenu">
                      <Popup trigger={<div className="menu-item">1.0.x</div>} position="right top" on="hover" 
                      closeOnDocumentClick mouseLeaveDelay={700} mouseEnterDelay={0} arrow={false}>
                        
                        <div className="versionsubmenu">
                          <div><button className="menu-item">1.0.0</button></div>
                          <div><button className="menu-item">1.0.1</button></div>
                        </div>
                        
                      </Popup>

                    </div>
                  
                  </Popup>

                </div>
                


                
                
                

                <div className="popupcontent">
                  <Changelog></Changelog>
                </div>
              </div>
              
            )}

          </Popup>
        </footer>
      </div>
    );
}