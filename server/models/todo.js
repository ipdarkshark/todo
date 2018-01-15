module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
  });

  Todo.associate = (models) => {
    models.Todo.belongsTo(models.User, {
    });
  };

  return Todo;
};
