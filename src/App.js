import React from 'react';
import Header from './components/header'
import CampaignView from './containers/CampaignView'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function App() {
  return (
    <React.Fragment>
      <Header/>
      <AlertProvider template={AlertTemplate} {...options}>
        <CampaignView/>
      </AlertProvider>
    </React.Fragment>
  );
}

export default App;
