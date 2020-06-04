# 개_발_일_지
## 주요 변경사항[ver3.0]
* 입력창을 생성하는 `toggle btn` 기능 추가
    * 입력창에 list submit하면 입력창 삭제하도록 구현
* 요일출력 버그 수정
    * `Date.prototype.getDay()` 0-11 숫자에 +1해서 알맞은 숫자에 적용되도록 수정
* 삭제 버튼 이미지(svg) object 형으로 dom 요소 추가
    * mouseenter, mouseleave 이벤트가 발생할때마다 svg 이미지 색상 바꾸기
* CSS 파트 수정
    * main-box, sub-box, background 레이아웃 수정
    * 세부 margin, padding 조정

### 지난 ver 개발일지 보러가기
* [ver1](https://github.com/ss-won/todolist/tree/ver1.3/diary) - 2020/5/13 개발일지
* [ver2](https://github.com/ss-won/todolist/blob/ver2.0/diary)

## 현재까지 작동하는 기능
* todolist에 할일을 입력 [add](https://github.com/ss-won/todolist/blob/ver2.0/js/add.js)
* todolist에 현재 남은 할일(check되지 않은 할일) 표시 [checkit](https://github.com/ss-won/todolist/blob/ver2.0/js/check.js)
* todolist에서 할일을 삭제 [remove](https://github.com/ss-won/todolist/blob/ver2.0/js/rm.js)
* todolist에서 할일을 삭제 한 후 남은 리스트의 index값 수정 [update](https://github.com/ss-won/todolist/blob/ver2.0/js/rm.js)
* todolist 입력창을 생성 또는 삭제함 [toggle](https://github.com/ss-won/todolist/blob/ver2.0/js/toggle.js) 
* todolist 삭제버튼이 리스트에 접근할때만 보이게 하는 기능 [add](https://github.com/ss-won/todolist/blob/ver2.0/js/add.js)

## 개선사항(ex:버그) || 추가할 사항
* todolist 버그 수정
    * 요소 체크 후 삭제시 남은 할일 수량에서 버그 발생
* SVG 애니메이션 작업
    * 추가버튼 누르면 -> 30도회전 후 빨간색으로 색 변환
    * submit이벤트가 발생하면 -> -30도 회전 후 기존 색으로 재변환
* 기타 CSS작업
    * checkbox 디자인 수정
    * 할일리스트 오는 자리 스크롤 달기
    * 기타 세부 border, design

## 추후 더 공부해야 할 부분(이 코드는 Whyrano...)
* html의 <script>의 type 속성값 text/javascript 와 module의 차이는 무엇인가?
* Typescript에서 `<HTMLInputElement>`의 기능은 무엇인가?
* svg파일과 img파일의 차이, svg파일 인라인화 하는 방법

## Reference
*  웹에서 svg 사용하기 실습가이드 <https://svgontheweb.com/ko/>
