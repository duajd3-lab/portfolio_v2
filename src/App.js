import { useState } from 'react';
import './App.scss';

import projectData from './json/project.json';
import Popup from './comp/Popup';

function App() {

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="App">

      <main className="hero">

        {/* 배경 빛 */}
        <div className="bgBlur"></div>

        <section className="heroInner">

          <p className="mainTitle">
            "지속적인 개선을 통해 성장하는 개발자
            <br />
            김나영입니다."
          </p>

        </section>

      </main>

      <nav className="menu">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#project">PROJECT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="scroll">
        ▼
      </div>

      <section id="about" className='profile'>
        <div>
          <div className='boxTitle'>
            <h3>ABOUT</h3>
          </div>
          <div className='profile-txt'>
            <p>안녕하세요.  <br />
              사용자 중심의 인터페이스를 고민하고 <br />
              더 나은 경험을 제공하는 방향으로 <br />
              서비스를 개선해나가는 개발자
            </p>
            <p><span>김나영</span> 입니다.</p>
            <br />
            <div>
              <p>ABOUT MORE </p>
            </div>
          </div>
        </div>

        <div className="value-simple">
          <div className="value-item">💡 사용자 흐름을 고려한 UI/UX를 설계합니다</div>
          <div className="value-item">🧹 유지보수성을 고려한 코드를 작성합니다</div>
          <div className="value-item">📈 꾸준한 학습과 개선을 통해 성장합니다</div>
        </div>

      </section>


      <section id="skills" className='skills'>
        <div>
          <div className='boxTitle'>
            <h3>SKILLS</h3>
          </div>
        </div>

        <div className='skill-1'>
          <div className='content'>
            <h4>FRONTEND</h4>
            <div className='svgIcons'>
              <img src='./svg/html.svg' />
              <img src='./svg/css.svg' />
              <img src='./svg/js.svg' />
              <img src='./svg/react.svg' />
              <img src='./svg/next.svg' />
            </div>
            <ul>
              <p>HTML5 / CSS3 / JavaScript</p>
              <li>컴포넌트 기반 UI 개발이 가능합니다.</li>
              <li>반응형 웹과 인터랙션 구현 경험이 있습니다.</li>
              <li>유지보수를 고려한 구조 설계가 가능합니다.</li>
            </ul>
            <ul>
              <p>React / Next.js</p>
              <li>컴포넌트 기반 구조 설계 및 재사용 중심 개발이 가능합니다.</li>
              <li>App Router 기반 프로젝트 개발 경험이 있습니다.</li>
            </ul>
          </div>

          <div className='content'>
            <h4>UI / UX</h4>
            <div className='svgIcons'>
              <img src='./svg/sass.svg' />
              <img src='./svg/figma.svg' />
            </div>
            <ul>
              <p>Sass / Figma</p>
              <li>Sass(SCSS)를 활용한 유지보수 중심 스타일링이 가능합니다.</li>
              <li>Figma를 활용한 UI 설계 및 프로토타이핑이 가능합니다.</li>
            </ul>
          </div>
        </div>

        <div className='skill-1'>
          <div className='content'>
            <h4>COLLABORATION</h4>
            <div className='svgIcons'>
              <img src='./svg/git.svg' />
              <img src='./svg/vecel.svg' />
            </div>
            <ul>
              <p>HTML5 / CSS3 / JavaScript</p>
              <li>Git 기반 협업 및 버전 관리 경험이 있습니다.</li>
              <li>배포 및 프로젝트 운영 경험이 있습니다.</li>
              <li>팀 프로젝트 협업 경험이 있습니다.</li>
            </ul>
          </div>

          <div className='content'>
            <h4>STATE & DATA</h4>
            <ul>
              <p>Zustand / Axios / REST API <span>Learning..</span></p>
              <li>전역 상태 관리 및 비동기 데이터 처리 경험이 있습니다.</li>
              <li>API 연동 기반 서비스 개발 경험이 있습니다.</li>
              <li>데이터 흐름을 고려한 구조 설계가 가능합니다.</li>
            </ul>
          </div>
        </div>


      </section>


      <section id="project" className='project'>

        <div>
          <div className='boxTitle'>
            <h3>PROJECT</h3>
          </div>
        </div>

<div className='projectData'>
        {projectData.map((item, index) => (
          <div className='p_content' key={index}>

            <div className='p_img'>
              <img src={item.images[0]} alt={item.title} />
            </div>

            <div className='p_text'>

              <h4>{item.title}</h4>

              <ul>
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h5>SKILLS</h5>

              <div className='skill-list'>
                {item.skills.map((skill, idx) => (
                  <div className='s-listUp' key={idx}>
                    {skill}
                  </div>
                ))}
              </div>

            </div>

            <div className='project-btn'>

              <button
                onClick={() =>
                  window.open(item.site, '_blank', 'noopener,noreferrer')
                }
              >
                <img src='./svg/link.svg' className='linkSvg' />
                LINK
              </button>

              <button
                onClick={() => {
                  setSelectedItem(item);
                  setOpen(true);
                }}
              >
                자세히 보기
              </button>

            </div>

          </div>
        ))}
        </div>

      </section>
      {open && selectedItem && (
  <Popup
    setOpen={setOpen}
    item={selectedItem}
  />
)}


    </div>
  );
}

export default App;
