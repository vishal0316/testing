document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const clearButton = document.querySelector('.search-clear-button');
  
    clearButton.addEventListener('click', function() {
      searchInput.value = '';
      searchInput.focus();
    });
  });

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0);
})

// show hide nav 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener( 'click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

// Close nav menu 
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
 }

 closeBtn.addEventListener('click', closeNav)


// show/hide faq anmswe

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    //change icon
    const icon = faq.querySelector('.faq__icon i');
   if(icon.className === 'uil uil-plus') {
    icon.className = "uil uil-minus";
   } else {
    icon.className = "uil uil-plus";
   }
  
  })
})



// fourm
const doubtForm = document.getElementById("doubtForm");
const doubtsList = document.getElementById("doubts");

doubtForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const question = event.target.question.value;

  if (name && question) {
    // Create a new list item to display the doubt
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${name}</h3>
      <p>${question}</p>
      <small>Posted on: ${new Date().toLocaleString()}</small>
    `;

    // Append the new doubt to the list
    doubtsList.appendChild(listItem);

    // Clear the form inputs
    event.target.name.value = "";
    event.target.question.value = "";
  }
});

// Dummy data for demonstration purposes
const commentsData = [
  {
      id: 1,
      username: "JohnDoe123",
      timestamp: "2 hours ago",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      upvotes: 10,
      downvotes: 2,
      replies: [
          {
              id: 11,
              username: "JaneSmith456",
              timestamp: "1 hour ago",
              content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          }
      ]
  },
  // Add more comments as needed
];

// Function to generate comment cards and nested replies
function generateCommentCards() {
  const commentSection = document.querySelector(".comment-section");

  commentsData.forEach(comment => {
      const commentCard = document.createElement("div");
      commentCard.classList.add("comment-card");
      commentCard.innerHTML = `
          <div class="user-info">
              <img src="user_avatar.jpg" alt="User Avatar">
              <div class="user-details">
                  <span class="username">${comment.username}</span>
                  <span class="timestamp">${comment.timestamp}</span>
              </div>
          </div>
          <p class="comment-content">${comment.content}</p>
          <div class="comment-actions">
              <button class="upvote-btn">👍 ${comment.upvotes}</button>
              <button class="downvote-btn">👎 ${comment.downvotes}</button>
              <button class="reply-btn">Reply</button>
          </div>
      `;

      if (comment.replies && comment.replies.length > 0) {
          const nestedReplies = document.createElement("div");
          nestedReplies.classList.add("nested-replies");
          comment.replies.forEach(reply => {
              const replyCard = document.createElement("div");
              replyCard.classList.add("comment-card");
              replyCard.innerHTML = `
                  <div class="user-info">
                      <img src="user_avatar.jpg" alt="User Avatar">
                      <div class="user-details">
                          <span class="username">${reply.username}</span>
                          <span class="timestamp">${reply.timestamp}</span>
                      </div>
                  </div>
                  <p class="comment-content">${reply.content}</p>
                  <div class="comment-actions">
                      <button class="upvote-btn">👍</button>
                      <button class="downvote-btn">👎</button>
                      <button class="reply-btn">Reply</button>
                  </div>
              `;
              nestedReplies.appendChild(replyCard);
          });
          commentCard.appendChild(nestedReplies);
      }

      commentSection.appendChild(commentCard);
  });
}

// Function to handle the "Create New Post" button click
function handleCreateComment() {
  const commentContent = prompt("Enter your comment:");
  if (commentContent) {
      // In a real application, you would save the new comment to the backend and refresh the comment section.
      const newComment = {
          id: commentsData.length + 1, // In a real app, generate a unique ID.
          username: "CurrentUser", // In a real app, get the username from user authentication.
          timestamp: "Just now",
          content: commentContent,
          upvotes: 0,
          downvotes: 0,
          replies: []
      };
      commentsData.push(newComment);
      generateCommentCards();
  }
}

// Event listener for "Create New Post" button click
const createCommentBtn = document.querySelector(".create-comment-btn");
createCommentBtn.addEventListener("click", handleCreateComment);

// Generate initial comment cards when the page loads
generateCommentCards();
