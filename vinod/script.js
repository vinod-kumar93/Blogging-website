document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const postsSection = document.getElementById('posts');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0]; // Get the selected image file

        // Create new post element
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;

        // Check if an image was selected
        if (image) {
            const imgElement = document.createElement('img');
            imgElement.classList.add('blog-image');
            imgElement.file = image;
            article.appendChild(imgElement);

            const reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(imgElement);
            reader.readAsDataURL(image);
        }

        // Add new post to the posts section
        postsSection.appendChild(article);

        // Clear the form
        blogForm.reset();
    });
});