import Dexie from 'dexie';

const db = new Dexie('MyDatabase');
// Declare tables, IDs and indexes
db.version(1).stores({
  notes: "++id, title, body, *tags, updated_at"
});

db.notes.add({
  title: "タイトル",
  body: '本文',
  tags: ["IndexedDB", "Dexie.js"],
  updated_at: new Date()
});

export default db;