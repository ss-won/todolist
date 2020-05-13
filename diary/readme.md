# 개_발_일_지
## 주요 변경사항[ver.1]
* main.js에서 선언헀던 addEventListener 작업 add.js 폴더로 이동
    * 기존에 ul을 선택한 후에만 li의 checkit(), remove() 함수가 click event에서 실행되는 것을, 각 li가 ul의 child로 추가될때마다 적용하는 것으로 버그 해결
* rm.js의 remove() 함수 구현
* remove()시 발생되는 index변경 문제로 update() 함수 작성 
    * index 정보를 빠르게 접근할 수 있는 HashMap형의 indexMap 변수 선언
    * check가 선택된 index값을 수정 & indexMap의 value값 수정 & 각 li>input[type='check']의 id값 수정
* checked(Set)-> 원소는 number, indexMap(Map)는 (object, string) 형태로 input 받을 수 있도록 함
* 잘못 올라간 원격저장소 안의 dist 폴더 삭제

### 지난 ver 개발일지 보러가기
* null

## 현재까지 작동하는 기능
* todolist에 할일을 입력(add)
* todolist에 현재 남은 할일(check되지 않은 할일) 표시(checkit)
* todolist에서 할일을 삭제(remove)
* todolist에서 할일을 삭제 한 후 남은 리스트의 index값 수정(update)

## 개선사항(ex:버그) || 추가할 사항
* 특정 버튼에 toggle 기능 추가하기 -> 추가할 할일을 작성할 수 있는 form 나타나거나 or 사라지거나
* CSS작업(요소 가운데 정렬, 버튼 UI 디자인, etc)

## 추후 더 공부해야 할 부분(이 코드는 Whyrano...)
* html의 <script>의 type 속성값 text/javascript 와 module의 차이는 무엇인가?
* Typescript에서 `<HTMLInputElement>`의 기능은 무엇인가?
