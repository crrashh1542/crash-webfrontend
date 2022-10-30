// import style
import "./styles/friends.less"
// import friend list
import fList from "./js/data/friends.json"

new Vue({
    el: "#links",
    data: {
        friends: fList
    }
})