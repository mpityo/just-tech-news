const User = require('./User');
const Vote = require('./Vote');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };