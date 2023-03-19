import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Profile } from './components/profile/Profile.jsx';
import { Statistics } from './components/statistics/statistics.jsx';
import { FriendList } from './components/friendList/friendList.jsx';
import { TransactionHistory } from './components/transactionHistory/transactionHistory.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      key={user.tag}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
