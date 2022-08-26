import React from 'react' ;
import Image from 'next/image' ;



const SidebarRight = () => {
    
    
    return(
        <div className="sidebar-right">
                    <h3> محبوبترين عنوانها</h3>
                    <section className="section">
                        <div>
                           <Image src="/images/mobile1.jpg" width={60} height={60} />
                        </div>
                        <div>
                            <h5>محبوبترين عنوانها</h5>
                            <small>محبوبترين عنوانها</small>
                            <small>محبوبترين عنوانها</small>
                        </div>
                        
                    </section>
                    <section className="section">
                        <div>
                           <Image src="/images/mobile1.jpg" width={60} height={60} />
                        </div>
                        <div>
                            <h5>محبوبترين عنوانها</h5>
                            <small>محبوبترين عنوانها</small>
                            <small>محبوبترين عنوانها</small>
                        </div>
                        
                    </section>
                    <section className="section" style={{borderBottom:'0px solid'}}>
                        <div>
                           <Image src="/images/mobile1.jpg" width={60} height={60} />
                        </div>
                        <div>
                            <h5>محبوبترين عنوانها</h5>
                            <small>محبوبترين عنوانها</small>
                            <small>محبوبترين عنوانها</small>
                        </div>
                        
                    </section>
                </div>
    )
}

const SidebarCenter = () => {
    return(
        <div className="sidebar-center">
            <img src="/images/4337976.jpg" />
            <div className="sidebar-hover">
                <h4 className="sidebar-hover-h">اصفهان در قلب ما براي زاينده رود</h4>
                <p className="sidebar-hover-p">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر dvndbdividvh h 9v9dv wegergerg er gergereerh</p>
            </div>
        </div>
    )
}


const SidebarLeft = () => {
    return(
        <div className="sidebar-left">
            <div className="sidebar-left-container-box">
                <div className="sidebar-left-container-box1 boxx">
                    <img src="/images/esfahan.jpg" className="boxx-img"/>
                    <div className="boxx-content">
                        <h2 className="boxx-content-h">اصفهان</h2>
                        <p className="box-content-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
                    </div>
                </div>
                <div className="sidebar-left-container-box2 boxx">
                    <img src="/images/shoshtar.jpg" className="boxx-img"/>
                    <div className="boxx-content">
                        <h2 className="boxx-content-h">همايش در شوشتر</h2>
                        <p className="box-content-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
                    </div>
                </div>
            </div>
            <div className="sidebar-left-container-box">
                <div className="sidebar-left-container-box3 boxx">
                    <img src="/images/naqsh-jahan.jpg" className="boxx-img"/>
                    <div className="boxx-content">
                        <h2 className="boxx-content-h">نقش جهان در جهان</h2>
                        <p className="box-content-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
                    </div>
                </div>
                <div className="sidebar-left-container-box4 boxx">
                    <img src="/images/shiraz.jpg" className="boxx-img"/>
                    <div className="boxx-content">
                        <h2 className="boxx-content-h">روز شيراز مبارك</h2>
                        <p className="box-content-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}



const Sidebar = () => {
    return(
        <aside className="sidebar">
            <div className="sidebar-box">
                <SidebarRight />
                <SidebarCenter />
                <SidebarLeft />
            </div>
        </aside>
    )
}


export default Sidebar ;