const postItems = [
    {
        "author": "John Doe",
        "posted_before": "3 hours ago",
        "image_url": "https://jooinn.com/images/enjoying-the-view-1.jpg",
        "likes_count": 120,
        "comments": [
            { "author": "Jane Smith", "text": "Great photo!" },
            { "author": "Bob Johnson", "text": "Amazing!" },
            { "author": "Alice Brown", "text": "Where was this taken?" }
        ],
        "caption": "Enjoying the view 🌄"
    },
    {
        "author": "Emily Williams",
        "posted_before": "1 hour ago",
        "image_url": "https://hips.hearstapps.com/hmg-prod/images/cvanessadewson-nature-4-1618585013.jpg?crop=1xw:0.8430474604496253xh;center,top&resize=2048:*",
        "likes_count": 80,
        "comments": [
            { "author": "Chris Davis", "text": "Beautiful scenery!" },
            { "author": "Sara Miller", "text": "Wish I could be there." },
            { "author": "Tom White", "text": "What camera did you use?" }
        ],
        "caption": "Nature's beauty captured 🌿"
    },
    {
        "author": "Alex Johnson",
        "posted_before": "5 minutes ago",
        "image_url": "https://crlmag.com/wp-content/uploads/2020/07/image3.jpeg",
        "likes_count": 45,
        "comments": [
            { "author": "Eva Green", "text": "Lovely shot!" },
            { "author": "Daniel Clark", "text": "Is that a sunset or sunrise?" },
            {
                "author": "Sophie Taylor",
                "text": "You have a great eye for photography."
            }
        ],
        "caption": "Chasing sunsets 🌅"
    },
    {
        "author": "Michael Brown",
        "posted_before": "10 hours ago",
        "image_url": "https://blissfulbritt.files.wordpress.com/2013/05/iphone-267.jpg",
        "likes_count": 200,
        "comments": [
            { "author": "Olivia Harris", "text": "This is stunning!" },
            { "author": "George Wilson", "text": "I wish I was there right now." },
            { "author": "Emma Roberts", "text": "What a magical place!" }
        ],
        "caption": "Lost in the moment ✨"
    },
    {
        "author": "Sophia Anderson",
        "posted_before": "30 minutes ago",
        "image_url": "https://handluggageonly.co.uk/wp-content/uploads/2017/12/Hand-Luggage-Only-4-6.jpg",
        "likes_count": 60,
        "comments": [
            { "author": "Liam Smith", "text": "Absolutely breathtaking!" },
            { "author": "Isabella Jones", "text": "I love your photos." },
            { "author": "David Taylor", "text": "Where can I visit this place?" }
        ],
        "caption": "Exploring hidden gems 🌎"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector(".posts");

    postItems.forEach(function (post) {
        var postElement = document.createElement("section");
        postElement.classList.add("post");

        const header = document.createElement("header");
        header.innerHTML = `
                <img src="./public/user.jpeg" alt="user photo" class="user-photo">
                <div class="post-info">
                    <span class="user-name">${post.author}</span>
                    <span class="post-time">${post.posted_before}</span>
                </div>
                <div class="delete-post">
                </div>
            `;
        postElement.appendChild(header);

        const main = document.createElement("main");
        main.innerHTML = `
                <span class="post-caption">${post.caption}</span>
                <img class="post-image" src="${post.image_url}" alt="${post.caption}">
            `;
        postElement.appendChild(main);

        const footer = document.createElement("footer");
        footer.classList.add("post-footer");
        footer.innerHTML = `
                <div class="likes">${post.likes_count} likes</div>
                <div class="footer-actions">
                    <button class="like-btn">Like</button>
                    <button class="comment-btn">Comment</button>
                </div>
                <div class="comments">
                    ${post.comments.map(comment => `
                        <div class="comment">
                            <img class="comment-user-photo" src="./public/user.jpeg" alt="comment user photo">
                            <div class="comment-text">
                                <span class="comment-text-user">${comment.author}</span>
                                <span class="comment-text-text">${comment.text}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        postElement.appendChild(footer);
        container.appendChild(postElement);

    })

    container.addEventListener("click", (event) => {
        var deleteButton = event.target.closest(".delete-post");
        if (deleteButton) {
            var postElement = deleteButton.closest(".post");
            if (postElement) {
                postElement.remove();
            }
        }
        var likeButton = event.target.closest(".like-btn");
        if (likeButton) {
            var postElement = likeButton.closest(".post");
            var likesElement = postElement.querySelector('.likes');
            var currentLikes = parseInt(likesElement.textContent);
            var newLikes = currentLikes + 1;
            likesElement.textContent = newLikes + ' likes';
        }

    });


});
