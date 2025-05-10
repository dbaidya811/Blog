# Akta Blog

A modern, responsive blogging website with a clean and professional design.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Blog listing page with category filtering
- Detailed blog post pages
- Newsletter subscription
- Comment system
- Social media integration
- Search functionality
- Category and tag navigation

## Pages

1. **Home Page**: Features a hero section, featured posts, popular categories, and newsletter signup
2. **Blog Page**: Lists all blog posts with sidebar for categories, recent posts, and tags
3. **Blog Post Page**: Detailed view of a blog post with author info, related posts, and comments
4. **About Page**: Information about the blog and its authors (to be implemented)
5. **Contact Page**: Contact form and information (to be implemented)

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts

## Installation

1. Clone or download this repository
2. Open the `index.html` file in your web browser to view the website

## Customization

### Changing Colors

The website uses CSS variables for easy color customization. Open `css/style.css` and modify the following variables in the `:root` selector:

```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #4a41e0;
    --text-color: #333;
    --light-text: #777;
    --background-color: #f9f9f9;
    --white: #ffffff;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

### Adding New Blog Posts

To add a new blog post:

1. Create a new HTML file based on the `blog-post.html` template
2. Update the title, content, images, and metadata
3. Add a link to the new post on the blog listing page (`blog.html`)

## Future Enhancements

- Backend integration for dynamic content
- User authentication and profiles
- Admin dashboard for content management
- Comment moderation system
- Advanced search functionality
- Dark mode toggle

## License

This project is available for personal and commercial use.

## Credits

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
