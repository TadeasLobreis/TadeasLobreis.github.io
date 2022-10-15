import { home_url } from "../env.js"
function goback(){
    location.href = home_url;
}
window.goback = goback;