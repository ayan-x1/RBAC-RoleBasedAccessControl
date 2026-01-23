/*module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  });

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: "roleId" });
  };

  return User;
};


const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

User.associate = (models) => {
  User.belongsTo(models.Role, {
    foreignKey: "roleId"
  });
};*/


/*export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: "roleId" });
  };

  return User;
};*/


/*export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "users",   // ✅ VERY IMPORTANT
      timestamps: true,
      freezeTableName: true // ✅ prevents Sequelize from pluralizing
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: "roleId" });
  };

  return User;
};*/


export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "roleid"   // ✅ MAPS TO DB COLUMN
      }
    },
    {
      tableName: "users",
      freezeTableName: true,
      timestamps: true
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreignKey: "roleId"
    });
  };

  return User;
};



