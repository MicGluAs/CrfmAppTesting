import logo from './logo.svg';
import './App.css';
import CRFMOrdersList from './CRFMOrdersList';


function App() {
  return (
    <body>
      SWITCH: [Linia 1] [Linia 2]
      <div class="container">
        <div class="crfm-container">
          <div id="rework" class="square">REWORK</div>
          <div id="winda" class="square">WINDA</div>
          <div id="op20" class="square">CRFM_OP20</div>
          <div id="op30" class="square">CRFM_OP30</div>
          <div id="op40" class="square">CRFM_OP40</div>
          <div id="op50" class="square">CRFM_OP50</div>
          <div id="op60" class="square">CRFM_OP60</div>
          <div id="op70" class="square">CRFM_OP70</div>
          <div id="op80" class="square">CRFM_OP80</div>
          <div id="op90" class="square">CRFM_OP90</div>
        </div>
        <div class="bufor-container">
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div id="bufor" class="square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
        </div>
        <div class="mfs-container">
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div id="mfsop10" class="square">MFS_OP10</div>
          <div id="balancing" class="square">BALANCING</div>
          <div id="mfsop30" class="square">MFS_OP30</div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
          <div class="square fake-square"></div>
        </div>
      </div>
      <div class="active-orders">
        <CRFMOrdersList />
      </div>
    </body>
  );
}

export default App;
