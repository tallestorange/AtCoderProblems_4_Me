import Dexie from 'dexie';

const db = new Dexie('AC4Me');
// Declare tables, IDs and indexes

db.version(1).stores({
  problems: "id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",
});
db.version(2).stores({
  problems: "id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",
  inputs: "id, name"
});
db.version(3).stores({
  problems: "id, contest_id, execution_time, fastest_contest_id, fastest_submission_id, fastest_user_id, first_contest_id, first_submission_id, first_user_id, predict, shortest_contest_id, shortest_submission_id, shortest_user_id, solver_count, source_code_length, title",
  inputs: "id, name",
  submissions: "id, contents"
});

export default db;