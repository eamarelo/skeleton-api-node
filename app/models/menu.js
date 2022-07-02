'use strict';
module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        title: {
            type: DataTypes.STRING
        },
        duration: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.STRING
        },
        cost: {
            type: DataTypes.STRING
        }

    }, {
        timestamps: false
    });
    return Menu;
};