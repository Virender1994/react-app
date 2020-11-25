
export const MyGreeting = (props) =>{
    console.log(props);
    return (
        <div style={{textAlign: 'center'}}>
          <h1>Hello Virender Kumar</h1>
          <h2>{props.greeting}</h2>
          <img style={{height: '400px', width: '500px'}} src={props.img} alt='greeting' />
        </div>
      );
  }
