<script>
    import Mdui from 'mdui'
    export default {
        name: 'BodyFooter',
        data(){
            return {
                links: [
                "http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes",
                "mailto:junzhu12345@qq.com",
                "https://github.com/crrashh1542",
                "javascript:;"
                ]
            }
        },
        methods: {
            about(){
                Mdui.dialog({
                    title: "关于本站",
                    content: "本站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计<br>本站由 Vue 3 构建，代码详见 Github@crrashh1542",
                    buttons: [{
                        text: "了解"
                    }]
                })
            }
        }
    }
</script>

<template>
    <div class="c-footer">
        <a :href="links[0]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-theme-200 mdui-btn-icon mdui-ripple">&#xe882;</a>
        <a :href="links[1]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-theme-200 mdui-btn-icon mdui-ripple">&#xe918;</a>
        <a :href="links[2]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-theme-200 mdui-btn-icon mdui-ripple">&#xe712;</a>
        <a :href="links[3]" @click="about" class="mdui-btn mdui-btn-raised mdui-color-theme-200 mdui-btn-icon mdui-ripple"><i class="mdui-icon material-icons">info</i></a>
        <div class="c-info">
            <p>&copy; Copyright 2019-2023 Kotsuki Crrashh. All Rights Reserved.</p>
            <p>
                <a href="https://beian.miit.gov.cn/"><img src="../../../public/images/miit.png">&nbsp;&nbsp;蜀ICP备2022029657号-1</a> | 
                <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode="><img src="../../../public/images/police.png">&nbsp;&nbsp;蜀公网安备？？？号</a> | 
                <a href="https://icp.gov.moe/?keyword=20220551">萌ICP备20220551号</a>
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
    /* 底部按钮 */
    .c-footer {
            margin: 20px 0 10px;
            text-align: center;
            .mdui-btn-icon {
                line-height: 48px;
                margin: 5px;
                font-family: 'iconfont';
                width: 48px;
                height: 48px;
            }
            .c-info {
                padding: 10px;
                text-align: center;
                line-height: 1.5;
                img {
                    width: 16px;
                    height: 16px;
                }
            }
        }
    @media screen and (max-width: 1024px) {
        .c-footer .c-info {
            padding: 30px 0;
        }
    }
    
    /* 备案信息 */
    p a {
        color: #607dbb;
    }
    p a:visited {
        color: #607dbb;
    }
    p a:hover {
        color: #78909c;
    }
    a {
        text-decoration: none;
    }
</style>