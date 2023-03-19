import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import user from './user.json';
// import data from './data.json';
// import friends from './friends.json';
// import transactions from './transactions.json';
// import { Profile } from './components/profile/Profile.jsx';
// import { Statistics } from './components/statistics/statistics.jsx';
// import { FriendList } from './components/friendList/friendList.jsx';
// import { TransactionHistory } from './components/transactionHistory/transactionHistory.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
