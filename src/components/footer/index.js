import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from "../../images/logo2.png";
import "./style.css"

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-large pt-4 mt-4 mainfooter">
      <MDBContainer fluid className="text-center text-md-left">
      <img src={Logo} alt="foot" className="foot-logo" />
      <br />
        <MDBRow>
          <MDBCol>
            <h4 className="title-foot text-center">CONTACT US: TEST@BLUEHORSESHOE.COM</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Blue HorseShoe Org
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;