import React , {useState} from 'react';

const Timer = () => {
    const [state , setstate] = useState(0) 
    const [min , setmin] = useState(0)

   const clickHandler = () => {
      const time = setInterval(() => {
           setstate(prevstate => prevstate + 1) ;
       }, 1000);
    }
    if(state == 30){
        setmin(prevstate => prevstate + 1) ;
        return setstate(0) ;
    }

    return (
        <div style={{display:'grid' , justifyContent:'center' , marginTop:'5rem'}}>
             {min}:{state}
             <button onClick={clickHandler}>submit</button>
        </div>
    );
};

export default Timer;