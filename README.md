
# React Todo List Application

A simple and responsive Todo List application built using React.js. It allows users to manage their daily tasks by adding, updating, deleting, and tracking tasks through a structured table interface.

## 🚀 Features

- **Add Todo:** Add new tasks using the input field.
- **View Todos:** Display all tasks in a structured table.
- **Update Todo:** Edit existing task names.
- **Delete Todo:** Remove tasks that are no longer needed.
- **Task Status:** Manage task status as Pending, In Progress, or Completed.
- **Responsive Design:** User-friendly layout for desktop and mobile screens.
- **Input Validation:** Prevents adding empty tasks.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (`useState`)
- Vite

## 📂 Project Structure

```text
react-todo-list/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/bhaktinile/react-todo-list.git
```

### 2. Navigate to the Project Folder

```bash
cd react-todo-list
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 📖 How to Use

1. Enter a task in the input field.
2. Click **Add Todo** to add the task to the table.
3. View the task name, ID, status, and available actions.
4. Click **Update** to edit a task, then click **Save Update**.
5. Change the task status using the dropdown menu.
6. Click **Delete** to remove a task from the list.

## 💡 Learning Outcomes

This project helped me understand:

- React functional components.
- State management using `useState`.
- Handling user input and events.
- Rendering lists using the `map()` method.
- Implementing Create, Read, Update, and Delete (CRUD) operations.
- Styling tables and creating responsive layouts with CSS.

## 🔮 Future Improvements

- Store tasks in Local Storage.
- Add due dates and task priorities.
- Add search and filter functionality.
- Connect a database to save tasks permanently.
- Add user authentication.

## ⚠️ Current Limitation

Tasks are currently stored in React state. They will reset when the page is refreshed because persistent storage has not yet been implemented.

## 👩‍💻 Author

**Bhakti Nile**

GitHub: [@bhaktinile](https://github.com/bhaktinile)

---

⭐ If you find this project useful, consider giving the repository a star!
