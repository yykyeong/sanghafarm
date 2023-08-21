
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";





import prd01 from "../assets/images/prd01.png"
import prd02 from "../assets/images/prd02.png"
import prd03 from "../assets/images/prd03.png"
import prd04 from "../assets/images/prd04.png"
import prd05 from "../assets/images/prd05.png"
import prd06 from "../assets/images/prd06.png"
import prd07 from "../assets/images/prd07.png"
import prd08 from "../assets/images/prd08.png"

const prdInfo = [
  {
    label : "우유",
    cat : "milk",
    img: prd01,
    sub: "유기농의 착한혁명",
    title : "상하목장 유기농 우유 900mL",
    desc : "한 명이라도 더, 유기농 우유를 마실 수 있도록 가격은 내리고, 양은 더 늘렸습니다. 	(자사 유기농 우유 750mL PET 제품 대비)"
  },
  {
    label : "우유",
    cat : "milk",
    img: prd02,
    sub: "행복하게 자란 소가 주는 선물",
    title : "상하목장 유기농 우유",
    desc : "맑은 하늘과 건강한 땅, 천혜의 자연환경을 갖춘 곳에서 상하목장 유기농 우유가 만들어집니다. 상하목장의 까다로운 기준에 맞춰 관리된 유기농 목장은 소들이 자연 그대로의 모습으로 자랄 수 있도록 최적의 환경을 제공하고 있습니다."
  },
  {
    label : "발효유",
    cat : "fermented",
    img: prd03,
    sub: "자연에 자연을 담은 건강한 요거트",
    title : "상하목장 유기농 우유",
    desc : "프리미엄 유기농 원료만을 사용한 순수 유기농 함량 100% 드링킹 요거트입니다. 건강한 장을 위한 유기농 유산균이 180억 이상 함유 되어 있습니다."
  },
  {
    label : "발효유",
    cat : "fermented",
    img: prd04,
    sub: "오직 자연으로 만든",
    title : "상하목장 유기농 요거트 플레인",
    desc : "상하목장이기에 가능한 유기농 요거트의 착한 가격. 행복한 젖소의 선물 유기농 우유에 유기농 유산균만을 넣어 만든 건강한 요거트를 더 많은 사람들이 드실 수 있도록 상하목장의 착한 혁명은 계속됩니다."
  },
  {
    label : "발효유",
    cat : "fermented",
    img: prd05,
    sub: "조금 더 맛있고, 조금 더 건강하게",
    title : "상하목장 유기농 요구르트",
    desc : "건강한 장을 위한 유기농 유산균이 병당 10억 이상 함유되어있습니다. 유기농 유산균은 유기합성 농약과 화학비료를 일체 사용하지 않은 원료로 키워낸 유산균으로, 세계적으로 공신력 있는 USDA인증을 받아 상하목장 유기농 발효유가 국내 최초로 적용했습니다."
  },
  {
    label : "발효유",
    cat : "fermented",
    img: prd06,
    sub: "유기농 짜먹는 요거트",
    title : "상하목장 마이리틀 사과바나나 85g",
    desc : "100% 유기농 풀과 사료를 먹고 자란 행복한 젖소에서 짠 상하목장 유기농 우유와 유기농 과일시럽으로 만들었습니다. 손으로 다양한 활동을 시작하는 시기에 맞춰 아이 스스로 잡고 먹어도 흐르지 안혹 간편하고 안전한 패키지 타입입니다."
  },
  {
    label : "버터",
    cat : "butter",
    img: prd07,
    sub: "상하목장이 엄선한 깨끗한 원유로 만들어 신선한 버터",
    title : "상하목장 슬로우버터 무염",
    desc : "상하목장이 엄선한 깨끗한 원유의 100% 생크림으로 만든 신선한 버터로 간편하게 즐길 수 있는 100g 소용량입니다."
  },
  {
    label : "베이비",
    cat : "baby",
    img: prd08,
    sub: "우리 아이 첫 유기농",
    title : "베이비 유기농 요거트 사과당근",
    desc : "두뇌 성장에 꼭 필요한 지방과 단백질을 최적비율(1.8:1)로 설계했습니다."
  },

]

function Product () {

  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
      trigger: horizontal,
      start: "top 56px",
      end: () => "+=" + horizontal.offsetWidth,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      }
    })

    return ()=> {
      scrollTween.kill();
    }
  })

  return (
    <section id="product" ref={horizontalRef}>
      <div className="prd-area">
        <h2 className="prd-title">제품 소개</h2>
        <ul className="prd-list">
          {prdInfo.map((prd,key)=> (
            <li 
            className={`prd-item p${key+1}`} 
            key={key}
            ref={(el) => (sectionsRef.current[key] = el)}
            >
              <span className={`prd-label ${prd.cat}`}>{prd.label}</span>
              <a href="/" className="prd-img" rel="noreferrer">
                <img src={prd.img} alt={prd.title} />
              </a>
              <span className="sub-title">{prd.sub}</span>
              <h3 className="title">{prd.title}</h3>
              <p className="desc">{prd.desc}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Product;