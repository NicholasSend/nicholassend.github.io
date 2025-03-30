# Nicholas Sendyk - Personal Website

This is the repository for my personal website, showcasing my experience, skills, and projects as a Data Engineer and AI/ML Enthusiast.

## Technologies Used

- Jekyll: Static site generator
- GitHub Pages: Hosting platform
- SCSS: CSS preprocessor
- HTML5 & JavaScript: Front-end development

## Local Development

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Setup

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/nicholassend/nicholassend.github.io.git
   cd nicholassend.github.io
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the development server:
   ```
   bundle exec jekyll serve
   ```

5. Open your browser and navigate to `http://localhost:4000`

## Folder Structure

- `_config.yml`: Jekyll configuration
- `_data/`: Data files for skills, experience, education, and books
- `_includes/`: Reusable components
- `_layouts/`: Page templates
- `_sass/`: SCSS partials
- `assets/`: Static assets (CSS, JS, images)
- `index.html`: Homepage

## Customization

- Update personal information in `_config.yml`
- Modify content in the `_data/` folder
- Add your profile image to `assets/images/`
- Customize styles in the `_sass/` directory

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.