let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility; // flip logic
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ toggleVisibility }>
      { visibility ? 'Hide Details' : 'Show Details' }
      </button>
      { /* visibility && (<div> <p>Hey!</p> </div>) */ }
      { visibility ? <p>Hey!</p> : '' }
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
}

render();