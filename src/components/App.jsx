import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './profile/Profile.jsx';
import { Statistics } from './statistics/statistics.jsx';
import { FriendList } from './friendList/friendList.jsx';
import { TransactionHistory } from './transactionHistory/transactionHistory.jsx';
export const App = () => {
  return (
    <div
    >
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
    </div>
  );
};
