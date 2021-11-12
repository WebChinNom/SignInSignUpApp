var userIdPw = {}
function updateId (val) {
    userIdPw["id"] = val;
}
function updatePw (val) {
    userIdPw["pw"] = val;
}
function checkPw (val) {
    if (val != userIdPw["pw"]){
        alert("비밀번호가 일치하지 않습니다.");
    }
}