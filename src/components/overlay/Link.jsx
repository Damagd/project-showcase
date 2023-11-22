function navigate(href) {
  window.history.pushState({}, '', href)//cambiar url pero no refrescar página
  //evento personalizado para avisar que se cambió pagina
  const navigationEvent = new Event('pushstate');
  window.dispatchEvent(navigationEvent);
}

export function Link({target, to, ...props}) {
  const handleClick = (e) => {
    
    const isMainEvent = e.button === 0 //boton primario
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'
    
    if(isMainEvent && isManageableEvent && !isModifiedEvent){
      e.preventDefault();
      navigate(to);
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}