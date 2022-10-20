import React from 'react';
import ReactDOM from 'react-dom';
import HockeyTeamList from './HockeyTeamList';
import Reviews from './Reviews';

import './index.scss';
import Menu from './Menu';

const endPoint = 'https://crudcrud.com/api/899475e5820b485183c81f81afa6424a/';

const App = () => (
  <>
    <Menu />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: Material UI Base</div>
      <HockeyTeamList
        teams={[
          {
            id: '1',
            logo: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Juan Jonas',
            city: 'Santiago',
          },
          {
            id: '2',
            logo: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Mas Morales',
            city: 'Cali',
          },

          {
            id: '3',
            logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            name: 'Neo Nuai',
            city: 'Tamaulipas',
          },
        ]}
      ></HockeyTeamList>
      <Reviews />
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));

const TodoList = () => {};
