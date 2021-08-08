import React from 'react';
import './card.scss';

type TProps = {
  item: any,
};

const Card: React.FC<TProps> = ({ item }): JSX.Element => (
  <div>
    <div className="card">
      <div className="image-container">
        <img className="card-image" src="./user.png" alt="picture" />
      </div>
      <p>
        Added by <i className="author">{item.firstName}</i>
      </p>
      <div className="info">{item.birthDate}</div>
      <div className="info country">{item.country}</div>
      <div className="info">{item.value}</div>
    </div>
  </div>
);

export default Card;
