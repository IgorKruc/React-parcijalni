import { useState } from 'react';

const FormComponent = ({ search }) => {
  const [id, setId] = useState('');

  const handleSearch = () => {
    if (id) {
      search(id);
    }
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <h4>Upišite korisničko ime</h4>
      <input
        type="text"
        value={id}
        onChange={handleChange}
        className="input"
        placeholder="o.g. facebook"
      ></input>
      <br></br>
      <button onClick={handleSearch} className="btn">
        Pretraga
      </button>
    </>
  );
};

export default FormComponent;
