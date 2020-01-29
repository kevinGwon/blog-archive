import React from 'react'
import { Skill } from '../skill'
import './index.scss'

export const Profile = () => {
  const htmlCss = ['html5.png', 'css3.png', 'sass.png', 'a11y.jfif']
  const javascript = ['javascript.jfif', 'typescript.png', 'es6.jfif']
  const library = [
    'react.png',
    'vue.png',
    'redux.png',
    'jquery.png',
    'gsap.png',
    'scrollmagic.png',
    'styled-components.png',
  ]
  const task = ['nodejs.png', 'webpack.png', 'gulp.png', 'netlify.png']

  return (
    <article className="article home-article">
      <header className="home-header">
        <h1>
          권승곤 <small>프론트엔드</small>
        </h1>
        <p>developerGwon@gmail.com</p>
      </header>
      <section className="home-section">
        <h2>소개</h2>
        <ul className="pr-list">
          <li>모션에 관심이 많고 UI 컨트롤하는 것을 좋아합니다.</li>
          <li>배우려는 자세를 가지려 노력하는 개발자입니다.</li>
        </ul>
        <h2>보유기술</h2>
        <h3>
          <span className="mark">HTML5 & CSS3</span>
        </h3>
        <Skill list={htmlCss} />
        <h3>
          <span className="mark">Javascript</span>
        </h3>
        <Skill list={javascript} />
        <h3>
          <span className="mark">Library</span>
        </h3>
        <Skill list={library} />
        <h3>
          <span className="mark">Task</span>
        </h3>
        <Skill list={task} />
      </section>
      <section className="home-section">
        <h2>경력</h2>
        <h3>포트폴리오</h3>
        <ul className="career-list">
          <li>
            themoviedb (2020)
            <a
              href="https://developergwon-react.netlify.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
            <div className="career-box">
              <strong>사용된 기술</strong>
              <p>
                React, Hook, Redux, Redux-thunk, Router, Axios, Sass,
                Webpack(v4.x.x)
              </p>
              <strong>소개</strong>
              <ul>
                <li>CRA를 사용하지 않고 Wepback으로 셋팅을 하였습니다.</li>
                <li>
                  API를 이용하여 검색기능, Router를 이용하여 상세페이지를
                  만들었습니다.
                </li>
                <li>렌더링 최적화를 테스트 하였습니다.</li>
              </ul>
            </div>
          </li>
        </ul>
        <h3>
          디지털 웹 에이전시 이롭게 <small>(2016.04.21 - 2019.08.09)</small>
        </h3>
        <ul className="career-list">
          <li>
            기아자동차 India (2019)
            <a
              href="https://www.kia.com/in/home.html"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            갤러리아 백화점 (2019)
            <a
              href="https://dept.galleria.co.kr/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            윤스닷컴 (2019)
            <a
              href="https://www.yoons.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            동원그룹 (2018)
            <a
              href="https://www.dongwon.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            헤라 (2017)
            <a
              href="https://www.hera.com/kr/ko/index.html"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            리리코스 (2017)
            <a
              href="https://www.lirikos.com/kr/ko/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
          <li>
            샘표 (2016)
            <a
              href="https://www.sempio.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mark"
            >
              [링크]
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}
