import TableStr from './TableStr';

function Table({ date, onRemove }) {
  return (
    <div className="wrapper__table_walk">
      <div className="block__header_walk">
        <div className="header_walk">Дата (ДД.ММ.ГГГГ)</div>
        <div className="header_walk">Пройдено км</div>
        <div className="header_walk">Действия</div>
      </div>
      <div className="block-contents">
        {date.map((a,i) => <TableStr str={a} key={i} remove={onRemove}/>)}
      </div>
    </div>
  );
}
          
export default Table;