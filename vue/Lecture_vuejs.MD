# 다른 유저가 git에서 복제

> git clone https://github.com/LHWN/vue.git

그리고 수정을 한 후 다시 commit, push까지 한 상태
이때 다시 내가 변경 한 후 업로드하지 못한다. (충돌남)

# git 에 올라가 있는 파일에 변경 사항이 있다면, 그걸 다시 내려받아야 한다 (.git 이 들어있는 위치에서 pull 받아야함)

> git pull origin master

naming 규칙
파일, 폴더이름을 쓸 때 -가 아닌 'underbar' 를 사용
숫자를 사용할 때에는 00 01 02... 으로 두 자릿 수로 사용하기

# 자바스크립트에서 클래스를 만드는 방법 3가지

(1) 리터럴 방식
var obj = {
property : value, // 멤버변수
method : function() { // 멤버함수

}
}

(1) 리터럴 방식 : var app = {} 와
(2) 생성자 방식 : var app = new Object(); app = {} 는 같은 말

(2) 함수 방식
function classname {
this.property = value;

this.method = function() {

}
}

var instance = new classname();

(3) 프로토타입 방식
: 실체가 있는 방식

function classname {
this.property = value;

this.method = function() {

}
}
classname.prototype.method = function() {

}

# 과제 : 성적 10명 이름/성적 v-for 만들어서 표

ㅎㅇ
