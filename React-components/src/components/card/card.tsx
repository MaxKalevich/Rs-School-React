import React from 'react';
import './style.scss';

type TProps = {
  name: string,
  img: string,
  description: string,
};

const Card:React.FC<TProps> = ({ img, description, name }): JSX.Element => (
  <div>
    <div className="card">
      <div className="image-container">
        <img className="card-image" src={img} alt="picture"/>
        <h2>{description}</h2>
      </div>
      <span>Added by <i className="author">{name}</i></span>
    </div>
  </div>
);

export default Card;
