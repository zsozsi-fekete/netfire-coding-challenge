# Setup

- Run `npm i` in the root folder
- Run `npm run dev` to start local development environment
- Run `npm run build` to build the project
- Run `npm run preview` to preview the built project

# Choice of technologies

I've choosen a simple React + Typescript + Vite based project with Chakra UI.

- React: For a component-based architecture, allowing me to build the UIs by creating reusable and modular components. This modular approach makes it easier to manage and scale applications.

- Typescript: For static typing, allowing me to define types and interfaces. This helps catch type-related errors at compile-time rather than runtime, leading to more robust and maintainable code.

- Vite: For a fast development server and fast build times.

- Chakra UI: For the component-based design, allowing me to use pre-designed components, create theming and reusable styles.

- Eslint: For maintaining code consistency by enforcing a set of coding standards and style rules across a codebase.

# Assumptions made

- I assumed that the NavBar buttons have hover effect
- I assumed that the NavBar is fixed to the top and stays there while scrolling.
- I assumed that the Hero section should be taking the full avalilable screen height regardless of the screen size.
- I assumed that the design is "always right", even if I did not agree with it. For example: in the NavBar right side buttons have different gaps between them. The first and the second button has a gap of 20px, but the second and the third button has 17px, which is inconsistent. Or the design contains multiple similar text/background colors, which are different shades.
