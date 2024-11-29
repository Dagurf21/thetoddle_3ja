### Key design notes

1. Components <br>
   **-** Each screent or feature is modularize into componenets <br>
   **-** Reusable components are place in `/shared` folder

---

2. Global State Management:

    **-** A `DataContext.js` file is included for managing state using React Context or a similar state management tool.

---

3. Logic Separation:

    **-** Each model (Board, List, Task) contains logic for CRUD operations, adhering to the Single Responsibility Principle.

---

4. Services:

    **-** `DataService.js` handles reading and managing data from `data.json`.

---

5. Navigation:

    **-** `AppNavigator.js` defines routing and navigation logic using React Navigation or Expo Router.

---

6. Styling:

    **-** Centralized styling ensures consistency across the app with a single source of truth in `GlobalStyles.js.`

## 1. Root Files

### 1.1 `App.js`

The main entry point of the app.  
Initializes navigation (using AppNavigator).  
Wraps the app with any global providers like DataContext.

### 1.2 `app.json`

Expo configuration file.  
Defines app metadata, such as app name, slug, icons, and platform-specific settings.

### 1.3 `package.json`

Manages dependencies, scripts, and versioning for the project.  
Contains scripts for running the app (expo start), building (expo build), and linting/testing.

### 1.4 `data.json`

Holds pre-populated in-memory data for boards, lists, and tasks.  
Loaded into memory on app startup using DataService.

### 1.5 README.md

Documentation for the project.  
Describes how to set up, run, and develop the app.

## 2. /assets

### `/assets/images` & `/assets/icons`

Store static assets like board thumbnails, list icons, and any additional media files.

## /components

### `BoardList.js`

Displays a list of all boards (retrieved from the context or data service).  
Allows navigation to a specific board when clicked.

### `BoardItem.js`

Represents a single board (e.g., thumbnail, name).  
Used within BoardList.

### `List.js`

Displays lists associated with a specific board.  
Fetches lists using the boardId from the context or route parameters.

### `Task.js`

Displays tasks associated with a specific list.  
Fetches tasks using the listId.

### `TaskItem.js`

Represents a single task (e.g., name, status).  
Allows marking a task as completed or navigating to a detailed view.

### `/shared`

Stores reusable UI components, such as buttons, modals, or form inputs.

## /context

### `DataContext.js`

Manages global app state (e.g., boards, lists, tasks).  
Provides state and dispatch methods (CRUD operations).  
Example: useContext(DataContext) for accessing or updating data across components.

## /models

### `BoardModel.js`

Defines the structure of a board (id, name, thumbnailPhoto).  
Implements logic for board-related operations: create, read, update, delete (CRUD).

### `ListModel.js`

Defines the structure of a list (id, name, color, boardId).  
Implements logic for list-related operations: create, read, update, delete.

### `TaskModel.js`

Defines the structure of a task (id, name, description, isFinished, listId).  
Implements logic for task-related operations, including marking as complete/incomplete.

## /navigation

### `AppNavigator.js`

Configures navigation for the app using a library like React Navigation or Expo Router.  
Defines routes/screens (e.g., BoardScreen, ListScreen, TaskScreen).  
Includes navigation stacks or tabs as required.

## /screens

### `BoardScreen.js`

Displays all boards using the BoardList component.  
Allows users to add, edit, or delete boards.

### `ListScreen.js`

Displays all lists for a specific board using the List component.  
Allows users to add, edit, or delete lists.

### `TaskScreen.js`

Displays all tasks for a specific list using the Task component.  
Allows users to add, edit, delete, or move tasks between lists.

### `SettingsScreen.js (optional)`

Allows customization of the app (e.g., themes, reset data).

## /services

### `DataService.js`

Handles loading and saving data from data.json.  
Provides helper functions to fetch data for boards, lists, and tasks.  
Example: getBoards(), getLists(boardId), getTasks(listId).

## /styles

### `GlobalStyles.js`

Contains shared styles (e.g., colors, typography, spacing).  
Example:

```javascript
export const GlobalStyles = {
    colors: {
        primary: '#6200ee',
        secondary: '#03dac6',
        background: '#f5f5f5',
        text: '#000000',
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
}
```

## /utils

### `Helpers.js`

Provides utility functions.  
Examples:

- `generateUniqueId()`: Generates unique IDs for new boards, lists, or tasks.
- `filterDataByKey()`: Filters lists or tasks by boardId or listId.
