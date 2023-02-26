import React from 'react'
import home from '../Styles/home.css'
import { Footer } from '../Components/Footer'
import Slider from '../Components/Slider'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='parent'>
      <div className='banner'>
            <div>
            <h1>CHECK MODESENS BEFORE YOU BUY</h1>
            <h1>Get three months of silver membership for you and your friend.</h1>
            <NavLink  to="/login"><button>JOIN NOW FOR FREE</button></NavLink>
            </div>
        </div><br /><br /><br />
      <div className='sec1'>
        <div>
            <div>
            <h1>Compare 500+ Stores In <span>One</span> Place</h1>
            <h4>ModeSens allows you to compare prices and availability across hundreds of stores and thousands of brands.</h4>
            <NavLink style={{ textDecoration: 'none'}} to="products"><p> <u>TRY IT OUT</u></p></NavLink>
            </div>
        </div>
        <div>
            <img src="https://cdn.modesens.com/static/img/20221231bg1_en.png" alt="" />
        </div>
      </div>
      <div className='sec3'>
        <h1>500+ PREMIUM PARTNERS</h1>
        <div className='sec3para'>
            <h3>We only partner with the most reputable stores and brands to offer you the largest selections and most trustworthy shopping experience online.</h3>
        </div>
        <div className='sec3img'>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-PRADA-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-FENDI-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-VERSACE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-LOEWE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png" alt="" /></div></NavLink>
           <NavLink style={{ textDecoration: 'none'}} to="products"><div><img src="https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png" alt="" /></div></NavLink>
        </div>
      </div>
      <div className='sec1'>
        <div>
            <div>
            <h1>Locate Any Product In <span>One</span> Second</h1>
            <h4>Simply copy any product url and search it on ModeSens. Our patented technology helps you easily locate it on ModeSens and compare across 500+ partner stores.</h4>
            <NavLink style={{ textDecoration: 'none'}} to="products"><p> <u>TRY IT OUT</u></p></NavLink>
            </div>
        </div>
        <div>
            <img src="https://cdn.modesens.com/static/img/20221231bg2_en.png" alt="" />
        </div>
      </div>
      <div className='sec3'>
        <h1>COMPARE AND SHOP WHEREVER YOU GO</h1>
        <div className='sec3para'>
            <h3>To unlock all of ModeSens' features and functionality, simply download our App and Browser Extension.</h3>
            </div>
        </div>
        <div className='sec1'>
        <div>
            <div>
            <h1>Install the ModeSens Browser Extension</h1>
            <h4>Automatically compare products across 500+ stores while you browse at any of our partner stores’ websites.</h4>
            <button><div><img src="https://cdn.modesens.com/static/img/20190228chromelogo.png" alt="" /></div>
            <div>INSTALL NOW</div></button>
            </div>
        </div>
        <div>
            <img src="https://cdn.modesens.com/static/img/20221231bg3_en.png" alt="" />
        </div>
      </div>
    <div className='sec2'>
      <div>
        <img src="https://cdn.modesens.com/static/img/20221231bg4_en.png" alt="" />
      </div>
      <div><div>
        <h2>Download The ModeSens App</h2>
        <h4>Scan any bar code or tag on a product to compare across 500+ stores before you buy.</h4>
        <div className='sec2img'>
          <img src="https://cdn.modesens.com/static/img/20220926download_ios.svg" alt="" />
          <img src="https://cdn.modesens.com/static/img/20220926download_android.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='sec4'>
        <h1>WE HAVE HELPED MILLIONS OF MEMBERS SAVE:</h1>
        <h1>$359, 734, 000+</h1>
        <NavLink to="/login"><button>INVITE FRIEND</button></NavLink>
    </div><br /><br /><br /><br />
    <div className='sec3'>
        <h1>SHOP YOUR FAVORITE CATEGORY</h1>
    </div>
    <NavLink style={{ textDecoration: 'none'}} to="products"><div className='sec5'>
      <div>
      <div>WOMEN</div>
      </div>
      <div>
      <div>MEN</div>
      </div>
    </div></NavLink>
    <div className='sec6'>
    <div>
      <div>KIDS</div>
      </div>
      <div>
      <div>BEAUTY</div>
      </div>
      <div>
      <div>HOME</div>
      </div>
      
    </div>
<div className='sec7'>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-W-Sale.jpg" alt="" /></NavLink>
        </div><p>SALE</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-New.jpg" alt="" /></NavLink>
        </div><p>NEW ARRIVAL</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-Jackets.jpg" alt="" /></NavLink>
        
      </div><p>JACKETS</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-W-Knits.jpg" alt="" /></NavLink>
        
      </div><p>KNITWEAR</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-Tops.jpg" alt="" /></NavLink>
        
      </div><p>TOPS</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-Pants.jpg" alt="" /></NavLink>
        
      </div><p>PANTS</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-Shoes.jpg" alt="" /></NavLink>
        
      </div><p>SHOES</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20220919-M-Bags.jpg" alt="" /></NavLink>
        
      </div><p>BAGS</p>
    </div>
    <div>
      <div>
        <NavLink style={{ textDecoration: 'none'}} to="products"><img src="https://cdn.modesens.com/banner/20221207-M-PreOwned_1670402058.jpg" alt="" /></NavLink>
        
      </div><p>PRE-OWNED</p>
    </div>
</div>
<div className='sec2'>
      <div>
       <img src="https://cdn.modesens.com/static/img/20220922_fashion_pic.png" alt="" />
      </div>
      <div><div>
        <h1>Fashion-Forward Community</h1>
        <h4>You look amazing on us! Come on, join the ModeSens Fashion Community.</h4>
        <p><u>MODESENS COMMUNITY</u></p>
        <p> <u>FASHION BLOGS</u></p>
        </div>
      </div>
    </div>
    <div className='sec8'>
        <h1>Built By Shoppers For Shoppers</h1>
        <div><h2>Our mission is to develop the future of shopping. You only need to know what you like. We’ll handle the rest.</h2></div>
        <p><u>READ OUR STORY</u></p>
    </div>
    <div className='sec9'>
        <div><p>You have style worth sharing. Invite friends to join ModeSens,Your Fashion Shopping Assistant, today! Once they sign up, you’ll both receive silver premium membership for three months.</p></div>
        <NavLink to="/login"><button>INVITE FRIEND</button></NavLink>
    </div>
    <Footer/>
    </div>
)
}

export default Home
