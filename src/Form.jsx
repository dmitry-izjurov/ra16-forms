import React, { useState } from 'react';
import Table from './Table';

function Form() {
  
  const remove = (e) =>  {
    setWalk((prev) => {
      const newState = prev.map(a => a);
      const id = e.target.closest('.block-content').querySelector('.date').textContent;
      const newArr = newState.filter(a => a.date !== id)
      return newArr;
    })
  };

  const [arrWalk, setWalk] = useState(
    [
      {date: '20.07.2019', dist: 5.7},
      {date: '20.07.2020', dist: 7.9},
      {date: '20.07.2021', dist: 9.7},
    ]
  );

  const [ dateWalk, setDateWalk ] = useState('');
  const [ distWalk, setDistWalk ] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') setDateWalk(() => value.split('-').reverse().join('.'))
    else if (name === 'dist') setDistWalk(() => value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    setWalk((prev) =>  {
      const newState = prev.map(a => a);
      const index = newState.findIndex(a => a.date === dateWalk);
      if (index !== -1) {
        const newArr = [];
        newState.forEach((a,i) => {
          if (index !== i) {
            newArr.push({ date: a.date, dist: a.dist })
          } else {
            newArr.push({ date: a.date, dist: (Number(a.dist) + Number(distWalk)).toFixed(1) })
          }
        });

        return newArr;
      }
      else {
        newState.push({date: dateWalk, dist: Number(distWalk)});
        let newArrRev = [];
        newState.forEach(a => newArrRev.push({date: a.date.split('.').reverse().join('.'), dist: a.dist}));

        newArrRev.sort((prev, next) => {
          if ( prev.date < next.date ) return -1;
          if ( prev.date < next.date ) return 1;
        });

        let newArr = [];
        newArrRev.forEach(a => newArr.push({date: a.date.split('.').reverse().join('.'), dist: a.dist}));
        return newArr;
      } 
    });

    e.target.reset();
  }

  return (
    <>
      <div className="wrapper__form_walk">
        <form className="form_walk" onSubmit={handleSubmit}>
          <label className="label_walk">
            <span className="text-input">Дата (ДД.ММ.ГГГГ)</span>
            <input className="input_walk" type="date" name="date" required onChange={handleChange} />
          </label>
          <label className="label_walk">
            <span className="text-input">Пройдено км</span>
            <input className="input_walk" type="number" min="0" step="0.1" name="dist" required onChange={handleChange} />
          </label>
          <button className="button_walk" type="submit">ОК</button>
        </form>
      </div>
      <Table date={arrWalk} onRemove={remove}/>
    </>
  );
}
        
export default Form;