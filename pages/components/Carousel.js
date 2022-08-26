import React , {useState , useRef} from 'react' ;
import Slider from './Slider'


const Carousel = () => {
    const ChevronRight =useRef()
    const ChevronLeft =useRef()

    const [state , setstate] = useState(0) ;
 
    const Goright = () => {
       
            setstate(prevstate => {
                prevstate = prevstate - 238
                prevstate = Math.max(prevstate , 0)
                return prevstate ;
            })
            ChevronLeft.current.style.color = "#333" ;
            if(state == 0){
                ChevronRight.current.style.color = "#e2e2e2" ;
            }
    }

    const GoLeft = () => {

        setstate(prevstate => {
                prevstate = prevstate + 243
                prevstate = Math.min(prevstate , 956)
                return prevstate ;
        })
            ChevronRight.current.style.color = "#333" ;
            if(state == 956){
                ChevronLeft.current.style.color = "#e2e2e2" ;
            }
        
        
    }

    return(
        <>
        <div className="carousel-container">
            <ul className="carousel-inner" style={{transform:`translateX(${state}px` , 
      transition: '2s'
        }}>
                <li>
                    <Slider />
                </li>
           
            
                
            </ul>
            <i onClick={GoLeft} ref={ChevronLeft} style={{color:'#333'}} className="fa fa-chevron-right"></i>
            <i onClick={Goright} ref={ChevronRight} style={{color:'#333'}} className="fa fa-chevron-left"></i>
        </div>
        </>
    )
}


export default Carousel ;