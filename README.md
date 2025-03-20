# KALASAG Website

A sleek, responsive website for **KALASAG Paint Protection Film and Vinyl Wrap** – a Filipino-owned car vinyl and paint protection film service based in Canada. Built with **Vite**, **React**, **Tailwind CSS 4**, and **Framer Motion** for smooth animations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Responsive Navbar**: A navbar that adjusts for desktop and mobile with smooth transitions.
- **Scroll-Hiding Navbar**: The navbar hides when scrolling down and reappears when scrolling up.
- **Active Section Highlighting**: Dynamically highlights the active section as users scroll.
- **Framer Motion Animations**: Smooth hover and tap animations for an enhanced user experience.
- **Gold & Black Branding**: Clean design with a gold primary color (`#D4AF37`) and black background.
- **Modular & Scalable**: Built with a modular component structure that can easily be extended.

## Technologies Used

- **React**: For building interactive user interfaces.
- **Vite**: For fast development and bundling.
- **Tailwind CSS 4**: For utility-first styling.
- **Framer Motion**: For declarative animations.
- **React Icons**: For iconography (e.g., hamburger menu icons).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/kalasag-website.git
   cd kalasag-website
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

4. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) (or the port specified by Vite) to view the website.

## Project Structure

The repository follows a standard React project structure. For example:

```
kalasag-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── NavBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── index.css
├── .gitignore
├── package.json
└── README.md
```

- **components/NavBar.jsx**: Contains the navbar logic and design.
- **styles/index.css**: Tailwind CSS imports and custom styling.
- **App.jsx & main.jsx**: Entry points for the React application.

## Usage

- **Responsive Navbar**: Resize the browser window to see the navbar adjust between desktop and mobile views.
- **Scroll Behavior**: Scroll down to see the navbar hide; scroll up to reveal it.
- **Active Section Highlighting**: The navbar automatically highlights the current section as you scroll.

You can customize the design by modifying Tailwind CSS classes or updating the Framer Motion animation settings in the component files.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
