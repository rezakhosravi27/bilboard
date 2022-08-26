import React  from 'react' ;

const Slider = () => {


    
    const arr = [
        {
            src:'/images/car.jpg'
        },
        {
            src:'/images/car4.jpg'
        },
        {
            src:'/images/car2.jpg'
        },
        {
            src:'/images/car.jpg'
        },
        {
            src:'/images/car4.jpg'
        },
        {
            src:'/images/car2.jpg'
        },
        {
            src:'/images/car.jpg'
        },
        {
            src:'/images/car4.jpg'
        },
        {
            src:'/images/car2.jpg'
        } ,
        {
            src:'/images/animation1.jpg'
        }
    ]
    
    
    
    
        const lists = arr.map((list , index) => {
            return(
                <div className="item-slider item1" key={index}>
                                    <div className="item-slider-image">
                                        <img src={list.src} />
                                    </div>
                                    <div className="item-slider-title">
                                        <h4>راهنماي خريد مچ بندها</h4>
                                    </div>
                                    <div className="item-slider-footer">
                                        
                                            <div className="footer-inner-image">
                                                <small>رضا خسروي</small>
                                                <img src="/images/mobile1.jpg" />
                                                
                                            </div>
                                            <div className="footer-inner-time">
                                                <i className="fa fa-clock"></i>
                                                <small>01/02/1400</small>
                                            </div>
                                        
                                    </div>
                            </div>
            )
        })
        
       
    

    return(
        // <div className="container-slider">
        //    <div className="hr"><a href="#">منتخب سردبير</a> <hr style={{width:'60%'}}/><a href="#">مشاهده همه</a> </div>
        //     <div className="slider-box1">
        //         <div className="container-slider-box" style={{marginLeft:`${state}rem`}}>
                   
        //                        {lists}
                  
        //         </div>
        //     </div>
        // </div>
        <div className="containerrr">
            {lists}
        </div>
    )
}

export default Slider ;