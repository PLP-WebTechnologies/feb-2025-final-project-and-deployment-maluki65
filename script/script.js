// Comment form submission for blog post
document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const comment = document.getElementById("comment").value;
    const commentList = document.getElementById("comments-list");
    const newComment = document.createElement("p");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    document.getElementById("comment").value = "";
});
