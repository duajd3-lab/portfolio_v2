# PORTFOLIO

개인 포트폴리오 웹사이트입니다.
React와 SCSS를 활용하여 프로젝트, 기술 스택, 자기소개 등을 시각적으로 표현하였으며,
반응형 레이아웃과 인터랙션을 통해 사용자 경험을 강화했습니다.

---

## 🔗 Deploy

* SITE : https://portfolio-v2-nine-wheat.vercel.app/

---

## 📌 Project Overview

기존 정적인 포트폴리오 형식에서 벗어나
Glassmorphism UI와 인터랙션을 활용하여
개발자의 분위기와 작업 스타일을 시각적으로 전달하는 것을 목표로 제작했습니다.

또한 JSON 기반 데이터 구조를 적용하여
프로젝트 추가 및 유지보수가 용이하도록 구성했습니다.

---

## 🛠 Tech Stack

### Frontend

* React
* JavaScript
* SCSS
* Swiper

### Deploy

* Vercel

### Tools

* GitHub
* Figma
* VSCode

---

## ✨ Main Features

### 📱 Responsive Web

* 모바일 / 태블릿 / PC 반응형 레이아웃 구현
* 디바이스 크기에 따라 UI 자동 최적화

### 🎨 UI / Interaction

* Glassmorphism 스타일 UI 적용
* Hover Animation 및 Scroll Interaction 구현
* Swiper를 활용한 프로젝트 이미지 슬라이드 구현

### 📂 Project Popup

* 프로젝트 클릭 시 상세 팝업 출력
* 기술 스택, 역할, 트러블 슈팅 내용 제공

### 🗂 JSON Data Management

* 프로젝트 데이터를 JSON으로 관리
* 유지보수 및 프로젝트 추가 작업 효율 향상

---

## ⚡ Troubleshooting

### 프로젝트 상세 데이터 출력 문제

#### 문제

work 배열 데이터가 문자열처럼 한 줄로 출력되는 문제 발생

#### 원인

배열 데이터를 map()으로 렌더링하지 않아 문자열 형태로 처리됨

#### 해결

map() 함수를 활용하여 각 항목을 개별 요소로 출력하도록 수정

```jsx
{item.work.map((work, index) => (
  <div key={index}>{work}</div>
))}
```

#### 결과

프로젝트 역할과 작업 내용의 가독성을 개선

---

## 📁 Folder Structure

```bash
src
 ┣ components
 ┣ styles
 ┣ data
 ┣ assets
 ┗ App.js
```

---

## 🚀 느낀 점

단순히 프로젝트를 나열하는 포트폴리오가 아닌
디자인과 인터랙션을 통해 개발자의 분위기와 역량을 함께 전달하는 방향으로 제작했습니다.

특히 반응형 대응과 JSON 기반 구조 설계를 통해
유지보수성과 재사용성을 고려한 프론트엔드 구조를 경험할 수 있었습니다.
