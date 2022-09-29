import "./Dashboard.css"
import Dashboardcont from "./Dashboardcont"
const round = './images/round.PNG'
const sec = './images/Capture.PNG'
const thir ='./images/manage.PNG'
const four = './images/save.PNG'
const fifth = './images/turnoff.PNG'
const six = './images/help.PNG'
const seven = './images/clear.PNG'
export default function Dashboard() {
  return (
    <>
    <div className="container-fluid mx-auto">
      <div className="row">
     <div className="d-flex">
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>We’re the bank of <br /> the free</b></h1>
          <p className="fs-4">We’re here to help you get the best out of <br/> your money, no strings attached. <br/>
              Welcome to your freedom!</p>
              <button className="btn text-white ms-3 p-2 butto">Get Kuda</button>
          </div>
        </div>
          <img src={round} className="round" alt="" />
     </div>
      </div>
    </div>
    {/* Second container */}\
   <div className="container  d-lg-flex flex-wrap justify-content-around d-sm-block">
   <div className=" p-5  shadow" style={{width:"40vh"}}>
   <i className="fa-sharp fa-solid fa-money-bills fs-5 rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)",}}></i><br />
      <b className="theColor">We’ll give you a free debit card. Order it right in the app.</b>
    </div>
   <div className="  p-5  shadow ms-1" style={{width:"40vh"}}>
   <i className="fa-sharp fa-solid fa-comments-dollar fs-5 rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i><br />
      <b className="theColor">Create smart budgets to help you take control of your spending.</b>
    </div>
   <div className=" p-5  shadow ms-" style={{width:"40vh"}}>
   <i class="fa-sharp fa-solid fa-share-nodes fs-5 rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i><br />
      <b className="theColor">See where your money goes without solving equations.</b>
    </div>
   <div className=" p-5  shadow mt-3" style={{width:"40vh"}}>
   <i className="fa-solid fa-paper-plane fs-5 rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> <br />
      <b className="theColor">Pay absolutely nothing for sending money.</b>
    </div>
   <div className=" p-5  shadow mt-3" style={{width:"40vh"}}>
   <i className="fa-sharp fa-solid fa-piggy-bank fs-5 rounded-circle p-2" style={{color:"rgb(64,25,109)", backgroundColor:"rgb(223,227,255)"}}></i> <br />
      <b className="theColor">Save automatically and we’ll pay you up to 15% interest every year.</b>
    </div>
   </div>
   {/*  Third Section*/}
   <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.</b></h1>
          <p className="fs-5">We designed a banking app for your busy <br /> lifestyle, and we’ll give you a free debit card to <br /> go with it. That’s all you need to make the right <br /> moves with your money, no sweat.</p>
          <a  className="theColor">Open An Account in Minutes</a>
          </div>
        </div>
          <img src={sec} className="sec" alt="" />
     </div>
      </div>
    </div>
    {/* Fourth Section */}
    <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <img src={thir} className="thir" alt="" />
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>It’s your money, we just <br /> help you manage it.</b></h1>
          <p className="fs-6">Save it, spend it, send it. It’s up to you. <br /> Whatever you choose to do with your money, <br /> we’ll make sure it’s done better and free of <br /> charge. We take responsibility for that. <br /> moves with your money, no sweat.</p>
          </div>
        </div>
     </div>
      </div>
    </div>
    {/* Fifth Section */}
    <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>Save money as you <br /> spend it, seriously.</b></h1>
          <p className="fs-5">You can’t avoid spending. That’s how you pay <br /> for your needs. But we can help you put money <br /> away every time you pay for something. Just <br /> set a percentage to save and watch your <br /> money grow.</p>
          <a  className="theColor">See all your Savings</a>
          </div>
        </div>
          <img src={four} className="four" alt="" />
     </div>
      </div>
    </div>
    {/* Sixth Section */}
    <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <img src={fifth} className="thir" alt="" />
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>Turn off access, turn on <br /> safety.</b></h1>
          <p className="fs-6">Life happens. Milk spills. Debit cards go <br /> missing. If that ever happens, you can block <br /> your missing card on the app so no one can <br /> use it. We’d like to see them try.</p>
          <a  className="theColor">Learn more about Cards</a>
          </div>
        </div>
     </div>
      </div>
    </div>
    {/* Seventh Section */}
    <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>We’re always happy to <br /> help you.</b></h1>
          <p className="fs-5">You can chat with us on the app, slide into our <br /> DMs, tweet, leave an Instagram comment, <br /> send an email or call. However you choose to <br /> reach out, there’ll always be a friendly person <br /> there to make your life easy.</p>
          <a className="theColor">Get Help</a>
          </div>
        </div>
          <img src={six} className="four" alt="" />
     </div>
      </div>
    </div>
    {/* Eight Section */}
    <div className="container-fluid mx-auto up">
      <div className="row">
     <div className="d-flex">
     <img src={seven} className="seven" alt="" />
     <div className="container col-lg-4 padd ">
          <div className="row">
          <h1 className="bank"><b>Fees as clear as glass.</b></h1>
          <p className="fs-6">We’re serious about free banking, and we will <br /> never, ever charge you for anything without <br /> your consent.</p>
          <a  className="theColor">See all our fees</a>
          </div>
        </div>
     </div>
      </div>
    </div>
    <Dashboardcont/>
    </>
  )
}
