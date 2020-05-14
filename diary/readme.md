# 개_발_일_지
## 주요 변경사항[ver2.0]
* 원격저장소에 올라간 image 파일 및 폴더단 삭제
* 요일출력 버그 수정
    * `Date.prototype.getDay()` 0-6까지 숫자가 '일-토' 로 매핑하도록 재조치
* 토글 버튼 추가
    * 클릭하면 list 추가할 수 있는 창 열리고 -> 재클릭하면 창 닫힘
* 기존 입력창에서 `label`요소와  `button`요소 삭제
* add() 함수의 내부 기능 함수로 정의
* mouseenter, mouseleave 이벤트 리스너 함수 작성
    * 마우스가 list에 접근할때마다 삭제 버튼이 보이게 수정
* 삭제 버튼 이미지 수정

### 지난 ver 개발일지 보러가기
* [ver 1.3](https://github.com/ss-won/todolist/tree/ver1.3/diary) - 2020/5/13 개발일지

## 현재까지 작동하는 기능
* todolist에 할일을 입력 [add](https://github.com/ss-won/todolist/blob/ver2.0/js/add.js)
* todolist에 현재 남은 할일(check되지 않은 할일) 표시 [checkit](https://github.com/ss-won/todolist/blob/ver2.0/js/check.js)
* todolist에서 할일을 삭제 [remove](https://github.com/ss-won/todolist/blob/ver2.0/js/rm.js)
* todolist에서 할일을 삭제 한 후 남은 리스트의 index값 수정 [update](https://github.com/ss-won/todolist/blob/ver2.0/js/rm.js)
* todolist 입력창을 생성 또는 삭제함 [toggle](https://github.com/ss-won/todolist/blob/ver2.0/js/toggle.js) 
* todolist 삭제버튼이 리스트에 접근할때만 보이게 하는 기능 [add](https://github.com/ss-won/todolist/blob/ver2.0/js/add.js)

## 개선사항(ex:버그) || 추가할 사항
* 입력창을 생성하는 `toggle btn` 기능 추가
    - input창을 생성할때는 생성버튼, 삭제할때는 삭제버튼 보이도록 수정하기
* 삭제버튼에 마우스 올릴때마다 색상 바뀌게 하기
* 기타 CSS작업

## 추후 더 공부해야 할 부분(이 코드는 Whyrano...)
* html의 <script>의 type 속성값 text/javascript 와 module의 차이는 무엇인가?
* Typescript에서 `<HTMLInputElement>`의 기능은 무엇인가?
* svg파일과 img파일의 차이, svg파일 인라인화 하는 방법
