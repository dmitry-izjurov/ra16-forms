import './App.css';
import Colors from './Colors';
import Walk from './Walk';

function App() {
  
  return (
    <>
      <div className='task'>Конвертер цветов</div>
      <Colors />
      <div className='task'>Учёт тренировок</div>
      <Walk />
    </>
  );
}

export default App;
