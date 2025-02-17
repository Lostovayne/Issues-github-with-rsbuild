# Issues-Github

Issues-Github is a web application that consumes the GitHub API to display issues from a repository. This application allows users to view, navigate, and manage issues effectively.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of issues from a specified GitHub repository.
- Navigate to individual issue details.
- User-friendly interface with responsive design.
- Integrated with React Router for seamless navigation.
- Utilizes Tailwind CSS for styling.

## Installation

To install the application, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Lostovayne/issues-github-with-rsbuild.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd issues-github
   ```

3. **Install dependencies:**
   ```bash
   bun install
   ```

4. **Start the development server:**
   ```bash
   bun dev
   ```
   The application will be available at `http://localhost:3001`.

## Usage

Once the application is running, you can navigate through the following routes:

- `/issues/list`: View all issues in the repository.
- `/issues/issue/$id`: View details of a specific issue by its ID.

### Example
To view the details of an issue with ID 123, navigate to:
```
http://localhost:3002/issues/issue/123
```

## Folder Structure

The project is organized as follows:

```
issues-github/
├── src/
│   ├── componentes/         # Components used in the application
│   │   ├── issues-item.tsx  # Component for individual issue display
│   │   ├── issues-list.tsx  # Component for listing issues
│   │   └── label-picker.tsx  # Component for selecting labels
│   ├── routes/              # Route definitions
│   │   ├── __root.tsx       # Root route
│   │   ├── issues/          # Issues-related routes
│   │   │   ├── index.tsx    # Issues list route
│   │   │   └── issue/       # Individual issue routes
│   │   │       ├── $id.tsx  # Dynamic route for issue details
│   │   │       └── index.tsx # Index route for issues
│   ├── main.tsx             # Entry point of the application
│   └── index.css            # Global styles
└── README.md                # Project documentation
```

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Bun**: Modern JavaScript runtime for fast development.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.