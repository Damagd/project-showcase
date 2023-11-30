import './ListPoint.css';

export function ListPoint({children}) {
  return(
    <li className="point-item">
      <div className="point-cointainer">
        <div className='point'>
        </div>
      </div>
      <div className="point-text">
        {children}
      </div>
    </li>
  )
}