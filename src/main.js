/* imports */
// 引入 js
import sayAge from './js/birthday'
// 引入样式
import './styles/reset/global.less'
import './styles/reset/components.less'
import './styles/reset/content.less'

/* functions */
// 1. 年龄显示
sayAge("2007-3-18")

// 2. mdui 抽屉栏初始化
var $ = mdui.$
var drawer = new mdui.Drawer("#drawer")
$('#drawer-btn').on('click', function () {
    drawer.toggle()
});

// 3. 设置 Vue 对象
Vue.config.productionTip = false // 关闭生产模式提示
// 底部栏
const footer = Vue.extend({
    template:`
        <div>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe882;</a>
            <a href="mailto:junzhu12345@qq.com" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe918;</a>
            <a href="https://github.com/crrashh1542" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe712;</a>
            <a href="javascript:;" @click="about" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple"><i class="mdui-icon material-icons">info</i></a>
            <div class="info">
                <p>&copy; Copyright 2019-2022 Bakuhota Crashed. All Rights Reserved.</p>
                <p><a href="https://icp.gov.moe/?keyword=20220551">萌 ICP 备 20220551 号</a></p>
            </div>
        </div>
    `,
    data(){
        return {
            
        }
    },
    methods: {
        about(){
            mdui.dialog({
                title: "关于本站",
                content: "本站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计，采用 Webpack 5 打包<br>本网站的 Vue 化已经提上日程！<br>此网站代码详见 Github@crrashh1542",
                buttons: [{
                    text: "了解"
                }]
            })
        }
    }
});
new Vue({
    el: "#footer",
    components: {
        foo: footer
    }
})
// new Vue({
//     el: "#contacts",
//     data: function(){
//         return {
//             
//         }
//     },
//     
// })