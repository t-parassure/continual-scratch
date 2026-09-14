// The fixture's second defect, on a path no asks-first category names.
//
// `greetingFor` reads `user.profile.name` without checking `profile`, so any
// account with no profile throws "Cannot read properties of undefined (reading
// 'name')". The checkout defect beside it sits on the payments path, and its fix
// is a named approver's decision (asks first); this one is not, so its fix can
// ship without a click — the only way the workshop lane sees the armed undo on a
// real merge.
//
// Nothing here is a product. The whole tree is force-restored after each run.

function greetingFor(user) {
  const name = user.profile ? user.profile.name : 'there';
  return `Hello, ${name}`;
}

module.exports = { greetingFor };