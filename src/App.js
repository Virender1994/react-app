import React from 'react';
import {MyGreeting} from './greeting';
class App extends React.Component {

  render() {
    var greeting; 
    var img = '';
    var time = new Date().getHours();  

console.log('time', time);

    if (time >= 4 && time < 12) {
      greeting = "Good Morning";
      img= 'https://www.happybirthdaymsg.com/wp-content/uploads/2015/11/good-morning-image-36.jpg';
    } else if (time >= 12 && time <= 16 ) { 
      greeting = "Good Afternoon";
      img= 'https://bit.ly/3eLewI2';
    } else if(time > 16 && time <= 20) {
      greeting = "Good Evening";
      img= 'https://bit.ly/3peditL';
    } else if(time >= 21) {
      greeting = "Good Night";
      img= 'https://bit.ly/3krOlra';
    } else if(time <4){
      greeting = "Good Night";
      img= 'https://bit.ly/3krOlra'
    }

    return (
      <div>
     <MyGreeting greeting={greeting} img={img}></MyGreeting>
    </div>
    );
  }

} 
export default App;