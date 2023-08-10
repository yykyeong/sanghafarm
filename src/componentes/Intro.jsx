
import introImg from "../assets/images/introImg.png"

function Intro () {

  return (
    <section id="intro">
      <div className="intro-area">
        <h1 className="intro-title">
          자연에게 좋은 것이<br/>사람에게도 좋습니다
        </h1>
        <div className="intro-lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="intro-text">
          <div className="text">
            <p>하늘이 주는 자연 그대로를</p>
            <p>땅의 사람이 정직하게 담아</p>
            <p>전하겠다는 약속</p>
          </div>
          <div className="img">
            <img src={introImg} alt="introImg" />
          </div>
        </div>
        <div className="intro-lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Intro;