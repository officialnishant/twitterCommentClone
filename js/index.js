showComment();
document.getElementById("tweetbtn").addEventListener("click", function(e){
    let usermsg = document.getElementById("usermsg");
    let tweet = localStorage.getItem("tweet");
    if (usermsg.value.length) {
        if(tweet == null){
            tweetObj = [];
        }
        else{
            tweetObj = JSON.parse(tweet);
        }
        tweetObj.push(usermsg.value);
        localStorage.setItem("tweet", JSON.stringify(tweetObj));
        usermsg.value="";
        console.log(tweetObj);
        showComment();
    }
   
})

//ShowTweet
function showComment(){
    let tweet = localStorage.getItem("tweet");
    if(tweet == null){
        tweetObj = [];
    }
    else{
        tweetObj = JSON.parse(tweet);
    }
    let html = "";
    tweetObj.reverse().forEach(function(ele,index){
        html +=`<div class="comment">
        <img src="./images/user_icon.png" class="cmtuserimg" alt="User Image" width="50" height="50">
        <h3 class="userName">Nishant Kumar</h3>
        <h3 class="userId">@nishantjain</h3>
        <p class="tweet">${ele}</p> 
        <img src="./images/edit_btn.png" alt="Edit Button" class="editbtn">
        <img src="./images/delete_btn.png" alt="Delete Button" id="${index}" onclick="deleteComment(this.id)" class="deletebtn">
        <img src="./images/like_btn.png" alt="Like Button" class="likebtn">           
    </div>`;
    });
    let commentElm = document.getElementById("result");
    if(tweetObj.length !=0){
        commentElm.innerHTML = html;
    }
    else{
        commentElm.innerHTML = ``;
    }
}
//Delete Comment
function deleteComment(index){
    let tweet = localStorage.getItem("tweet");
    if(tweet == null){
        tweetObj = [];
    }
    else{
        tweetObj = JSON.parse(tweet);
    }
    tweetObj.splice(index, 1);
    localStorage.setItem("tweet", JSON.stringify(tweetObj));
    showComment();
}
//validate
function validate(){
    let usermsg = document.getElementById("usermsg");
    let tweetbtn = document.getElementById("tweetbtn");
    
    if(usermsg.value.length == 0){
        tweetbtn.setAttribute("disabled", "disabled");
        
    }
    else{
        tweetbtn.removeAttribute("disabled");
        console.log("Button Not Clicked");
    }
}