<template>
   <div>
       <div id="wrap">
            <div :class="header">
                <div :class="header-top">
                    <h3 :class="logo"><a href="#">TongYeong</a></h3>
                    <ul :class="header-gnb">
                        <li><a href="#">홈</a></li>
                        <li><a href="#">소개</a></li>
                        <li><a href="#">문의</a></li>
                        <li><a href="#">관리 시스템 가기</a></li>
                    </ul>
                </div>

                <div :class="header-middle">
                    <h3>통영예선은 귀하의 충실한 동반자입니다</h3>
                    <a href="#">READ MORE</a>
                </div>

                <div :class="header-si">
                    <ul>
                        <li><a href="#">f</a></li>
                        <li><a href="#">t</a></li>
                        <li><a href="#">i</a></li>
                        <li><a href="#">y</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
    
</script>

<style>
    #wrap {
        width: 100%;
        height: 100%;
    }

    .header {
        
    }
</style>