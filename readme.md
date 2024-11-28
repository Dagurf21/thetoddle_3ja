# Toodler
T-488-MAPP - Þróun Smáforrita - 2024 Haustönn - Háskólinn í Reykjavík

# Table of contents
[Run Expo](#run-expo) <br>
[Install Guide](#install-guide) <br>
[Key Design Notes](#key-design-notes) <br>
[Root Files](#root-files) <br>
[Extra requirements](#extra-requirements) <br>


## Run Expo
1. To run expo go into the directory of the app you want to run.
```bash
cd <example-app>
```
2. Run:
```bash
npx expo start
```

## Install guide
### Initializing Repository on Your PC
1. On the CLI on your PC, navigate to the directory where you want to place the repo (e.g., `/Desktop`).
2. Run:  
   ```
   git clone https://github.com/Dagurf21/T_488_MAPP.git
   ```
3. There should now be a folder called T_488_MAPP. Go into that folder
    ```
   cd T_488_MAPP
   ```
4. Install npm and expo-cli.
    ```
   npm install
   npm install -g expo-cli
    ```

5. Check if everything works by executing the following lines.
    ```
   cd the-toddler
   npx expo start
    ```

   6. Go to your browser and open `http://localhost:8081`   


## Key design notes
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


## Root Files

### `App.js`
The main entry point of the app.  
Initializes navigation (using AppNavigator).  
Wraps the app with any global providers like DataContext.

### `app.json`
Expo configuration file.  
Defines app metadata, such as app name, slug, icons, and platform-specific settings.

### `package.json`
Manages dependencies, scripts, and versioning for the project.  
Contains scripts for running the app (expo start), building (expo build), and linting/testing.

### `data.json`
Holds pre-populated in-memory data for boards, lists, and tasks.  
Loaded into memory on app startup using DataService.

### README.md
Documentation for the project.  
Describes how to set up, run, and develop the app.

## /assets

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

## /services

### `DataService.js`
Handles loading and saving data from data.json.  
Provides helper functions to fetch data for boards, lists, and tasks.  
Example: getBoards(), getLists(boardId), getTasks(listId).


### `Helpers.js`
Provides utility functions.  
Examples:
- `generateUniqueId()`: Generates unique IDs for new boards, lists, or tasks.
- `filterDataByKey()`: Filters lists or tasks by boardId or listId.

## Extra requirements
Logo - A logo has been created for the system. Clicking on the logo, located in the top right corner, will navigate the user back to the home screen.

Progress - A progress bar to visualise how many of the users tasks have compleated within each list.

Calendar - A calendar that can be viewed by clicking the calander button in the top right corner at the homescreen. The calander showes the months and due dates for tasks, giving the user a quick overview of the upcoming deadlines.

Back - A back button, positioned in the top-left corner, allows users to return to the previous screen they were on.

