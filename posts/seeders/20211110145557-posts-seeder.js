'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        return await queryInterface.bulkInsert(
            "Posts", [{
                    title: "Node JS",
                    description: "This is my first app with Node JS",
                    isPosted: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "About Me",
                    description: "I am Ihtisham. I am full stack developer",
                    isPosted: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Contact me",
                    description: "Contact me at ihtisham.se@gmail.com",
                    isPosted: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        )
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        return await queryInterface.bulkDelete('Posts', null, {});
    }
};