import React, {useState} from 'react';

const FormMovie = ({movies, setMovies}) => {

    const [inputName, setInputName] = useState("");
    const [inputYear, setInputYear] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setMovies([...movies, {
          name: inputName,
          year: inputYear
      }]);
      setInputName('');
      setInputYear('');
    };

    return (
        <div>
            <h1>FormMovie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setInputName(e.target.value)}
                    value={inputName}
                    placeholder="Nom"
                />

                <input
                    type="text"
                    onChange={e => setInputYear(e.target.value)}
                    value={inputYear}
                    placeholder="Année"
                />
                <button>Ajouter un film</button>
            </form>
        </div>
    );
};

export default FormMovie;