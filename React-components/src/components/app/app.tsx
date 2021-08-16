import React from 'react';
import SearchBar from '../search-bar/search-bar';
import Card from '../card/card';

const App: React.FC = (): JSX.Element => (
  <div>
    <div className="main-content-search">
      <h1 className="heading">Google Powered</h1>
      <SearchBar />
    </div>
    <div className="main-card-container">
      <Card name="Max Brandt" img="./1.jpg" description="AUDI" />
      <Card name="Nick Mora" img="./2.jpg" description="LAMBORGHINI" />
      <Card name="Kanye West" img="./3.jpg" description="McLAREN" />
      <Card name="Conor McGregor" img="./4.jpg" description="R8" />
      <Card name="Max Brandt" img="./5.jpg" description="FORD" />
      <Card name="Nick Mora" img="./6.jpg" description="McLAREN" />
      <Card name="Kanye West" img="./7.jpg" description="URUS" />
      <Card name="Conor McGregor" img="./8.jpg" description="CHEVROLET" />
      <Card name="Kanye West" img="./9.jpg" description="HURACAN" />
      <Card name="Conor McGregor" img="./10.jpg" description="PORSCHE" />
    </div>
  </div>
);

export default App;
