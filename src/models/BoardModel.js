// src/models/Board.js
import List from './ListModel.js';

class Board {
    constructor(id, name, description, thumbnailPhoto, lists = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnailPhoto = thumbnailPhoto;
        this.lists = lists.map(
            list => new List(list.id, list.name, list.color, list.boardId, list.tasks)
        );
    }

    addList(list) {
        this.lists.push(list);
    }

    removeList(listId) {
        this.lists = this.lists.filter(list => list.id !== listId);
    }
}

export default Board;
