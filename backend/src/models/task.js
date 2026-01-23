/*export default (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.ENUM("PENDING", "IN_PROGRESS", "COMPLETED"),
      defaultValue: "PENDING"
    }
  });

  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      foreignKey: "assignedTo"
    });
  };

  return Task;
};*/


/*export default (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.STRING,
      assignedTo: DataTypes.INTEGER,
      createdBy: DataTypes.INTEGER
    },
    {
      tableName: "tasks",
      timestamps: false
    }
  );

  Task.associate = (models) => {
    Task.belongsTo(models.User, { foreignKey: "assignedTo" });
  };

  return Task;
};*/


export default (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      status: {
        type: DataTypes.STRING,
        defaultValue: "PENDING"
      },
      assignedTo: {
        type: DataTypes.INTEGER,
        field: "assigned_to"
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: "created_by"
      }
    },
    {
      tableName: "tasks",
      timestamps: false
    }
  );

  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      foreignKey: "assignedTo",
      as: "assignee"
    });
  };

  return Task;
};
