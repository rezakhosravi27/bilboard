import React , {useState} from 'react' ;




const UnderHeader = () => {
    const [state , setstate] = useState() ;

    const [showstate , setshowstate] = useState("none") ;

    const changeHandler = (e) => {
        setstate(() => e.target.value) ;
        if(e.target.value == '0'){
            setshowstate("none")
        }else{
            setshowstate("block") ;
        }
        
    }
    
    const ClickHandler = () => {
        setshowstate("none") ;
    }

    
    

    return(
        <div className="underheader-container">
            <div className="underheader-box">

                <img src="/images/sky3.jpg" />

                <div className="underheader-search">
                    <input type="search" name="" placeholder="بيلبورد/بلاگ"/>
                    
                    <div style={{display:`${showstate}`}} className="state-show">{state}
                    <i className="fa fa-times-circle" onClick={ClickHandler}></i>
                    </div>
                    <i className="fa fa-map" style={{color:'#F96D1E'}}></i>

                    <div className="container-selectbox">
                    <select onChange={changeHandler} className="select-box">
                        <option selected disabled value="0">نام شهر را وارد نماييد</option>
                        <option value="tehran">تهران</option>
                        <option value="karaj">كرج</option>
                    </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UnderHeader ;