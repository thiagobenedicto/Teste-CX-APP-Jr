import Core from './Core.js';

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  /*   const App = document.getElementById('app');
  let appBody = `<div id="main-content"></div>`; */

  client.on('app.registered', (e) => {
    document
      .getElementById('btn-update')
      .addEventListener('click', Core.updateSubject);
    Core.showRequesterTickets();
  });

  // Write App
  /*   App.innerHTML = appBody; */
};

export default Main;
