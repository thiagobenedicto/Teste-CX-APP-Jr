// Start client and resize app
let client = ZAFClient.init();

client.on('app.registered', (e) => {
  client.invoke('resize', { width: '100%', height: '230px' });
});

const options = {
  url: 'https://api.example.com',
  type: 'GET',
};

client.request(options).then((response) => {
  console.log(response);
});

// Create screen context
import Main from './Main.js';
Main();
