import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-box">
                {[0,1,2].map(() => {
                    return(
                        <div className="footer-inner">
                            <h3>راهنماي خريد از بيلبورد</h3>
                            <p><a href="#">نحوه ثبت آگهي</a></p>
                            <p><a href="#">رويه ارسال سفارش</a></p>
                            <p><a href="#">شيوه هاي پرداخت</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Footer;