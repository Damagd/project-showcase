import './ActorDialog.css';
import actorImg from '../../assets/constructor.png';
import { useEffect, useState } from 'react';

export function ActorDialog() {
  const [opened, setOpened] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const onOpenDialog = e => {
      const dialog = e.detail;

      setDialog([...dialog]);
      setCurrentText(0);
      setOpened(true);
    }

    window.addEventListener('opendialog', onOpenDialog);

    return(() => {
      window.removeEventListener('opendialog', onOpenDialog);
    })
  }, []);

  const handleClick = () => {
    let currentIndex = currentText + 1;
    if(currentIndex === dialog.length)
      setOpened(false);
    
    setCurrentText(currentIndex); 
  }

  return (
    <>
      {
        opened &&
        <div onClickCapture={handleClick} className='dialog-block-container'>
          <aside className='dialog-block-img'>
            <img src={actorImg} width={'100%'} alt="representative image of a blocky constructor"/>
          </aside>
          <div className='dialog-block-text'>
            <p>{dialog[currentText]}</p>
          </div>
        </div>
      }
    </>
  );
}