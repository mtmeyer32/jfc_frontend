import React from "react";
import darkImg from "../../img/dark.jpg";
import lightImg from "../../img/light.jpg";
import "./DiagSplit.css";

export class DiagSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: "50%",
      width: "calc(50vw + 1000px)",
    };
  }
  render() {
    let skew = 1000;
    let delta = 0;
    const handleMouseMove = (e) => {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      this.setState({
        left: e.clientX + delta + "px",
        width: e.clientX + skew + delta + "px",
      });
    };
    const handleTouchMove = (e) => {
      delta = (e.touches[0].clientX - window.innerWidth / 2) * 0.5;
      this.setState({
        left: e.touches[0].clientX + delta + "px",
        width: e.touches[0].clientX + skew + delta + "px",
      });
    };
    return (
      <div
        id="diagSkewWrapper"
        className="skewed"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <div className="layer bottom">
          <div className="content-wrap">
            <div className="content-body">
              <h1>Retro Tech</h1>
            </div>
            <img src={darkImg} alt="i need this"></img>
          </div>
        </div>
        <div className="layer top" style={{ width: this.state.width }}>
          <div className="content-wrap">
            <div className="content-body">
              <h1>Traditional Craftsmanship</h1>
            </div>
            <img src={lightImg} alt="i need this"></img>
          </div>
        </div>
        <div className="handle" style={{ left: this.state.left }}></div>
      </div>
    );
  }
}

export default DiagSplit;
