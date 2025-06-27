const followBtn = document.getElementById('follow-btn');
let isFollowing = false;
followBtn.addEventListener('click', function () {
    isFollowing = !isFollowing;
    if (isFollowing) {
        followBtn.textContent ="following";
        followBtn.style.backgroundColor = "green";
        followBtn.style.color = "white";
    } else {
        followBtn.textContent = "follow";
        followBtn.style.backgroundColor = '#eee';
        followBtn.style.color = "black";
        }
}); //done