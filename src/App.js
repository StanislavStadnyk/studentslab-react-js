import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { StudentsContainer, MessageContainer } from './pages/index';
import { Header, Layout } from './components/index';

const App = () => {
  const [dataList, setDataList] = useState(null);

  const handleEditUser = (user) => {
    const index = dataList.findIndex((userItem) => userItem.id === user.id);

    setDataList([
      ...dataList.slice(0, index),
      user,
      ...dataList.slice(index + 1),
    ]);
  };

  const handleAddUser = (user) => {
    setDataList([...dataList, user]);
  };

  const handleDeleteUser = (userId) => {
    const index = dataList.findIndex((user) => user.id === userId);

    setDataList([
      ...dataList.slice(0, index),
      ...dataList.slice(index + 1, dataList.length),
    ]);
  };

  const handleSendMessage = (user, message) => {
    const updatedMessages = [...user.messages, message];
    const userWithNewMessage = { ...user, messages: updatedMessages };
    const index = dataList.findIndex((userItem) => userItem.id === user.id);

    setDataList([
      ...dataList.slice(0, index),
      userWithNewMessage,
      ...dataList.slice(index + 1),
    ]);
  };

  const getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData('/data.json');
  }, []);

  return (
    <Router>
      <Header />

      <Layout>
        <Switch>
          <Route path='/' exact>
            <StudentsContainer
              data={dataList}
              editUser={handleEditUser}
              addUser={handleAddUser}
              deleteUser={handleDeleteUser}
            />
          </Route>

          <Route path='/message'>
            <MessageContainer data={dataList} sendMessage={handleSendMessage} />
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
