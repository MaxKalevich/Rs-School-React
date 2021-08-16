import React, { useEffect, useState } from 'react';
import './form.scss';

type TError = {
  errors?: any,
  agree?: boolean,
  firstName?: string,
  birthDate?: string,
  gender?: boolean,
  value?: string,
};

type TForm = {
  setFormValues: any,
  setModalActive: any,
};

const Form: React.FC<TForm> = ({
  setFormValues,
  setModalActive,
}): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<TError>({});
  const [value, setValue] = useState('');

  const reset = (): void => {
    setFirstName('');
    setBirthDate('');
    setAgree(false);
    setCountry('Russia');
    setValue('');
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }));
    }
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (value === '') {
      setErrors((state) => ({ ...state, value }));
    }
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate, value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      reset();
      setModalActive(true);
      setTimeout(() => setModalActive(false), 2000);
      setFormValues((state: []) => [
        ...state,
        {
          firstName,
          birthDate,
          country,
          agree,
          value,
        },
      ]);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="item" htmlFor="first-name">
        <span>
          Name:
          {errors?.firstName === '' && (
            <span className="errors">* name should be fill</span>
          )}
        </span>
        <input
          className="input-name"
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(event.target.value);
          }}
        />
      </label>
      <label className="item" htmlFor="birth-date">
        <span>
          Birth date:
          {errors?.birthDate === '' && (
            <span className="errors">* check birth date</span>
          )}
        </span>
        <input
          className="input-name"
          type="date"
          id="birth-date"
          name="birth-date"
          value={birthDate}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setBirthDate(event.target.value);
          }}
        />
      </label>
      <label className="item" htmlFor="country">
        <span>Country:</span>
        <select
          className="select"
          id="country"
          name="country"
          value={country}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setCountry(event.target.value);
          }}
        >
          <option>Russia</option>
          <option>USA</option>
          <option>Ukraine</option>
          <option>Belarus</option>
          <option>United Kingdom</option>
        </select>
      </label>
      <label className="agree" htmlFor="agree">
        <span>
          <span className="agree-text">Agree:</span>
          {errors?.agree !== undefined && (
            <span className="errors">* agree should be check</span>
          )}
        </span>
        <input
          className="checkbox"
          type="checkbox"
          name="agree"
          id="agree"
          checked={agree}
          onChange={() => setAgree((prev: boolean) => !prev)}
        />
      </label>
      <ul className="radio-switch">
        {errors?.value === '' && (
          <span className="errors">* gender should be check</span>
        )}
        <li className="switch-item">
          <input
            className="radio-switch-input"
            type="radio"
            name="switch"
            id="radio1"
            value="Male"
            checked={value === 'Male' && true}
            onChange={changeValue}
          />
          <label className="radio-switch-label" htmlFor="radio1">
            Male
          </label>
        </li>
        <li className="switch-item">
          <input
            className="radio-switch-input"
            type="radio"
            name="switch"
            id="radio2"
            value="Female"
            checked={value === 'Female' && true}
            onChange={changeValue}
          />
          <label className="radio-switch-label" htmlFor="radio2">
            Female
          </label>
        </li>
      </ul>
      <div className="button-name-wrapper">
        <button type="submit" className="button">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
