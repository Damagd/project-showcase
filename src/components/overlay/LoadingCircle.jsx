import './Loading.css';

export function LoadingCircle() {
  return (
    <svg className='loading' viewBox="25 25 50 50">
      <circle r="10px" cy="50" cx="50"></circle>
    </svg>
  );
}