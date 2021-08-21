import React, { useState } from 'react';
import Form from '../form/form';
import Card from '../card/card';
import Modal from '../modal/modal';

type TState = {
  firstName: string,
  birthDate: number,
  country: string,
  agree: boolean,
  value: string,
};

const App: React.FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<TState[]>([]);
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Form setFormValues={setFormValues} setModalActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive} />
      <main className="main">
        {formValues.map((item, index): JSX.Element => (
          <Card item={item} key={index} />
        ))}
      </main>
    </>
  );
};

export default App;
