const seedBlogs = require('./blog-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('..config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('DB SYNCED');
    await seedUsers();
    console.log('Users Seeded');
    await seedBlogs();
    console.log('Blogs Seeded');
    await seedComments();
    console.log('Comments Seeded');

};

seedAll();
