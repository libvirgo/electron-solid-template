import { HashRouter } from '@solidjs/router';
import { render } from 'solid-js/web';
import '~/App.css';
import Home from './routes/Home';

const routes = [
  {
    path: '/',
    component: () => <Home />,
  },
];
render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById('app')!,
);

// Use contextBridge
// window.ipcRenderer.on('main-process-message', (_event, message) => {
//   console.log(message);
// });
