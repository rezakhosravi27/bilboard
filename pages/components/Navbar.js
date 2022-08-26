import React from 'react' ;
import Image from 'next/image' ;




const Navbar = () => {
    return(
        <nav id="navbar">
            <div className="navbar-container">
                <div className="navbar-container-img">
                    <Image src="/images/logo-bilboard.png" width={72} height={95} />
                </div>
                <div className="navbar-container-center">
                    <div className="navbar-container-center-row1">
                        <div className="container-input">
                            <div className="container-i-input">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="input-style">
                                <input type="search" name="" placeholder="جستجو در بيلبورد..." />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-container-center-row2">
                    <div className="container-ul">
                            <ul>
                                <li><img src="/images/vector.png" />آگهي</li>
                                <li className="sub-li"><img src="/images/vector2.png" />بانك اطلاعات</li>
                                <li className="sub-li"><img src="/images/vector3.png" />تخفيف</li>
                                <li className="sub-li"><img src="/images/vector4.png" />بلاگ</li>
                                <li className="sub-li-m"><span>مقايسه محصول</span><img src="/images/vector.png" /></li>
                                {/* <li className="sub-li"><img src="/images/vector10.png" /></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-container-left">
                    <div className="navbar-container-left-row1">
                        <div className="circle">
                            <i className="fa fa-bolt"></i>
                            <span>22:01</span>
                        </div>
                        <div className="navbar-container-left-row1-content">
                             <div className="child1">امتياز : </div>
                             <div className="child2">2000 امتياز بيلبورد</div>
                        </div>
                        <div className="navbar-container-left-row1-content2">
                             <a href="#">افزودن آگهي جديد</a>
                        </div>
                    </div>
                    <div className="navbar-container-left-row2">
                        <div className="container-vector10">
                            <img src="/images/vector10.png" />
                        </div>
                        <div className="navbar-container-left-row1-content">
                             <div className="child1">كيف پول:</div>
                             <div className="child2">2000 تومان</div>
                        </div>
                        <div className="navbar-container-left-row2-content2">
                               <a href="#">ورود  و  ثبت نام
                               <i className="fa fa-user"></i> </a>  
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar ;