import './Dashboardcont.css'
const tc = './images/tc logo.svg'
const world = './images/world logo.svg'
const fintech = './images/fintech.svg'
const bbc = './images/bbc logo.svg'
const cnbc = './images/cnbc logo.svg'
const euro = './images/euro logo.svg'
const valar = './images/valar logo.svg'
const entree = './images/entree logo.svg'
const sbi = './images/sbi logo.svg'
const target = './images/target logo.svg'
const visa = './images/visa logo.svg'
const logo = './images/kudalogo-removebg-preview.png'
const round = './images/round.PNG'
const play = './images/appstore.svg'
const google = './images/googleplay.svg'
const kuda = './images/kudaweb.svg'
export default function Dashboardcont() {
  return (
    <>
    {/* continuation of the dashboard */}
    <div className="container-fluid mt-5">
        <h1 className='text-center theColor'><b>Don’t just take our word for it</b></h1>
   <div className="contain mt-5 d-flex">
   <div className="marquee shadow p-4 col-4">
            <div className="content">
                <p className=''>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>Mu'azu Muhammad Kudu</b>
                </div>
            </div>
        </div>
   <div className="marquee shadow p-4 col-4 ms-3">
            <div className="content">
                <p className=''>This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>@RealSOK_</b>
                </div>
            </div>
        </div>
   <div className="marquee shadow p-4 col-4 ms-3">
            <div className="content">
                <p className=''>Never thought an app would stylish become my everyday way to bank and have access to physical cash. @kudabank is sleek</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>Mu'azu Muhammad Kudu</b>
                </div>
            </div>
        </div>
   <div className="marquee shadow p-4 col-4 ms-3">
            <div className="content">
                <p className=''>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>Mu'azu Muhammad Kudu</b>
                </div>
            </div>
        </div>
   <div className="marquee shadow p-4 col-4 ms-3">
            <div className="content">
                <p className=''>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>Mu'azu Muhammad Kudu</b>
                </div>
            </div>
        </div>
   <div className="marquee shadow p-4 col-4 ms-3">
            <div className="content">
                <p className=''>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <div className="d-flex">
                    <img src="" alt="" className='rounded-circle'/>
                    <b>Mu'azu Muhammad Kudu</b>
                </div>
            </div>
        </div>
   
   </div>
    </div>
    {/* Second Section on cont */}
    <div className="container-fluid p-5">
        <div className="d-lg-flex d-sm-block justify-content-around ">
            <img className='size' src={tc} alt="" />
            <img className='size' src={world} alt="" />
            <img className='size' src={fintech} alt="" />
            <img className='size' src={bbc} alt="" />
            <img className='size' src={cnbc} alt="" />
            <img className='size' src={euro} alt="" />
        </div>
    </div>
    <div className="container-fluid mt-5" style={{backgroundColor:"rgb(251,251,251)",padding:"60px"}}>
        <h1 className='theColor text-center'><b>Our Partners</b></h1>
        <div className="d-lg-flex d-sm-block justify-content-around down">
            <img className='size' src={valar} alt="" />
            <img className='size' src={entree} alt="" />
            <img className='size' src={sbi} alt="" />
            <img className='size' src={target} alt="" />
            <img className='size' src={visa} alt="" />
        </div>
    </div>
    {/* the fredom list section */}
    <div className="container  mt-5 ">
        <div className="row">
        <h1 className='theColor text-center'>Choose the freedom you need.</h1>

        <table className='table shadow mt-5 container' style={{padding:"20vh"}}>
        <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col" className='theColor'>Other Banks</th>
      <th><img className='w-25 mt-2' src={logo} alt="" /></th>
    </tr>
  
  <tr className=''>
    <th >Transfer Fee</th>
    <td>Up to ₦50 plus V.A.T.</td>
    <td>25 free transfers every month</td>
  </tr>
  <tr>
    <th>Debit Card</th>
    <td>₦1,000 plus V.A.T</td>
    <td>Free</td>
  </tr>
  <tr>
    <th>Card Delivery</th>
    <td>🤨</td>
    <td>Free</td>
  </tr>
  <tr>
    <th>Card Maintenance Fee</th>
    <td>Up to ₦50 per quarter</td>
    <td>Never</td>
  </tr>
  <tr>
    <th>Alerts</th>
    <td>Charge for SMS alerts</td>
    <td>Free instant notifications</td>
  </tr>
  <tr>
    <th>Annual Interest</th>
    <td>4%</td>
    <td>Up to 15%</td>
  </tr>
  <tr>
    <th>Bill Payment Fee</th>
    <td>Up to ₦100 per bill</td>
    <td>No</td>
  </tr>
  <tr>
    <th>Instant Reversals</th>
    <td>😟</td>
    <td>Yes</td>
  </tr>
  <tr>
    <th>Account Maintenance Fee</th>
    <td>Yes</td>
    <td>Never</td>
  </tr>
  </thead>
        </table>
        </div>
    </div>
    {/* get kuda section */}
    <div className="container p-5 get" >
        <div className="row">
           <div className="d-lg-flex">
           <div className="col-4 p-3 what">
           <h3 className='theColor '><b>Get the app now, dump <br /> bank fees for good.</b></h3>
            <p style={{fontSize:"15px"}}>It only takes a few minutes to start enjoying free benefits. Download Kuda on Google Play or the App Store.</p>
            <button className='btn butto text-white' >Get Kuda</button>
           </div>
           <img src={round} alt="" className='getImage' />
           </div>
        </div>
    </div>
    {/* Footer */}
    <hr className='mt-5'/>
    <div className="container w-75">
       <div className="d-lg-flex mt-5 justify-content-between">
       <img className='loo' src={logo} alt="" />
        <ul className='navbar-nav'>
            <b className='theColor'>Features</b>
            <li>Kuda Card</li>
            <li>Spend</li>
            <li>Save</li>
            <li>Budget</li>
            <li>Borrow</li>
        </ul>
        <ul className='navbar-nav'>
            <b className='theColor'>Company</b>
            <li>Blog</li>
            <li>Press</li>
            <li>Join Our Team</li>
            <li>About Us</li>
        </ul>
        <ul className='navbar-nav'>
            <b className='theColor'>Help</b>
            <li>Get Help</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Contact Us</li>
        </ul>
        <ul className='navbar-nav'>
            <b className='theColor'>Transparency</b>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Information Security Policy</li>
            <li>Cookie Policy</li>
        </ul>
       </div>
      <div className='p-5'>
      <img src={play} alt="" />
       <img src={google} alt="" />
       <img src={kuda} alt="" />
      </div>
    </div>
    <p className='text-center' style={{fontSize:"15px", color:"rgb(171,171,171)"}}>Products may vary by country or market.</p>
  <div className="container w-50 mt-5">
  <div className="d-lg-flex justify-content-between">
   <ul className='navbar-nav' style={{lineHeight:"1"}}>
        <b className='theColor'>Contact</b> <br />
        <a className='theColor'>help@kuda.com</a>
    </ul>
    <ul className='navbar-nav'>
        <b className='theColor'>Lagos</b>
        <li>151 Herbert Macaulay Way, <br /> Yaba, Lagos, <br /> Nigeria</li>
    </ul>
    <ul className='navbar-nav'>
        <b className='theColor'>London</b>
        <li>91 Wimpole Street, London <br /> W1G 0EF <br /> UK</li>
    </ul>
   </div>
  </div>
            {/* Conclusion */}
            <div className='container mt-5 w-75'>
                <p className='text-start' style={{fontSize:"15px", color:"rgb(171,171,171)"}}>*Kuda Customers get 25 free transfer to other banks every month. Extra transfers to other banks cost ₦10 each. <br />**Kuda account holders can deposit money in over 10,000 branches across Nigeria for free. <br /> <br />

© 2022 Kuda Microfinance Bank (RC796975). All rights reserved. All deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC). Kuda Microfinance Bank is licensed by the <br /> Central Bank of Nigeria. “Kuda” and “Kudabank” are trademarks of Kuda Technologies Ltd Lagos: 151 Herbert Macaulay Way, Yaba, Lagos. London: 91 Wimpole Street, London W1G 0EF, UK <br /> <br />

Kuda Current Account is provided through Kuda Microfinance Bank. All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works <br /> of Kuda Microfinance Bank. All Rights Reserved. Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company <br /> names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary.</p>
            </div>
    </>
  )
}
