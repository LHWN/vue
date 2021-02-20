// 210220

# var > 전역변수로 사용할 때만 사용하고 최대한 자제하는것을 권장

# 객체 생성 방식 (1) 리터럴 방식 (2) 생성자 방식

# html에서 Emmet 문법 예시 : 
div>ul>li*6
>> 결과 
 <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
</div>

div>{텍스트 내용}
>> 결과
<div>텍스트 내용</div>

div+div+div
>> 결과
<div></div>
<div></div>
<div></div>

^는 한 단계 위로 올라가라는 의미
div>ul>li*3^div>ul>li*3
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>

$는 번호를 자동으로 넘버링하겠다는 의미
div#section>ul>li.slide.slide$
>> 결과
<div id="section">
        <ul>
            <li class="slide slide1"></li>
        </ul>
</div>

div#gallery>ul>li*8.gallery-img>img[src=./img/image$$.jpg]
>> 결과
<div id="gallery">
        <ul>
            <li class="gallery-img"><img src="./img/image01.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image02.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image03.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image04.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image05.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image06.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image07.jpg" alt=""></li>
            <li class="gallery-img"><img src="./img/image08.jpg" alt=""></li>
        </ul>
</div>

@는 시작번호를 지정할 수 있ㅠ음
div#gallery>ul>li*8.gallery-img>img[src=./img/image$$@0.jpg]
>> 결과
<div id="gallery">
    <ul>
        <li class="gallery-img"><img src="./img/image00.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image01.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image02.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image03.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image04.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image05.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image06.jpg" alt=""></li>
        <li class="gallery-img"><img src="./img/image07.jpg" alt=""></li>
    </ul>
</div>


script[src=./vue/lib/vue.js]
<script src="./vue/lib/vue.js"></script>

# CDN : 
CDN(Contents Delivery Network)는 인터넷(Internet) 사용 환경에서 게임 클라이언트(Client)나 콘텐츠(Contents)를 사용자의 PC로 효율적으로 전달하기 위해 분산된 서버(Server)에 데이터(Data)를 저장해 전달해주는 시스템(System)을 말한다.
