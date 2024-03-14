exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'user1', quota_allocation: 1000000 }, // 1 MB quota allocation
        { username: 'user2', quota_allocation: 3000000 }, // 3 MB quota allocation
        { username: 'user3', quota_allocation: 2000000 }  // 2 MB quota allocation
      ]);
    });
};