import React from 'react';
import './App.css';
import Maps from './components/Maps';
import Footer from './components/Footer';
import Button from './components/button';
import Docker from './components/Docker';
import API_KEY from './config.json';
import { withFlagProvider } from 'ld-react';

const App = () => (
  <div>
    <main>
      <div>
        <Button />
        <br />
      </div>
      <Maps />
      <Docker />
    </main>
    <Footer />
  </div>
);

export default withFlagProvider(App, {
  clientSideId: API_KEY.LAUNCH_DARKLY
});
