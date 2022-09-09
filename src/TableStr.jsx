import cross from './cross.png'

function TableStr({ str, remove }) {
  
  return (
    <div className="block-content">
      <div className="content_walk date">{str.date}</div>
      <div className="content_walk">{str.dist}</div>
      <div>
        <img className="icon" src={cross} onClick={remove} alt="Удалить" />
      </div>
    </div>
  );
}
          
export default TableStr;