/*export default (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Role.associate = (models) => {
    Role.hasMany(models.User, { foreignKey: "roleId" });
    Role.belongsToMany(models.Permission, {
      through: "RolePermissions",
      foreignKey: "roleId"
    });
  };

  return Role;
};*/


/*export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "roles",     // ✅ EXACT DB TABLE NAME
      freezeTableName: true,  // ✅ STOP pluralization
      timestamps: false
    }
  );

  Role.associate = (models) => {
    Role.hasMany(models.User, {
      foreignKey: "roleId"
    });
  };

  return Role;
};*/


export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "roles",
      freezeTableName: true,
      timestamps: true
    }
  );

  Role.associate = (models) => {
    Role.belongsToMany(models.Permission, {
      through: models.RolePermission,
      foreignKey: "roleId"
    });
  };

  return Role;
};
