import React from "react";
import "../Styles/footer.css";

const sections = [  {    title: "CUSTOMER CARE",    items: [ 'Shopper Protection','Loyalty Program','Help Center','Size Guides','Contact Us / Feedback','Shipping / Returns'   ]
  },
  {
    title: "INFORMATION",
    items: [
        'About Us',
        'Influencer Program',
        'Partner Stores',
        'Sitemap'
    ]
  },
  {
    title: "LEGAL",
    items: [
        'Terms Of Use',
        'Disclosure',
        'Privacy Policy',
        'Community Guidelines'
    ]
  },
  
];

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-sections">
        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="icon">
           <div><h4>CONNECT WITH US</h4></div>
           <div className="iconimg">
            <div><img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt="" /></div>
            <div><img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt="" /></div>
            <div><img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt="" /></div>
            </div> 
        </div>
      </div>
      <hr />
      <div className="icongallery">
        <div>
            <div className="logo"><img src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" /></div>
            <div>© 2022, ModeSens Inc</div>
        </div>
        <div className="public">
           <img src="https://cdn.modesens.com/static/img/20220726Pinterest.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Twitter.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Ins.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Facebook.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Weibo.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Wechat.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Reddit.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220726Discord.svg" alt="" />
           <img src="https://cdn.modesens.com/static/img/20220811Xiaohongshu.svg" alt="" />     
        </div>
      </div>
    </footer>
    
  );
};