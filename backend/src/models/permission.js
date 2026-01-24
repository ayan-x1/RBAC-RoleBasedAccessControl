/*export default (sequelize, DataTypes) => {
  const Permission = sequelize.define("Permission", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Permission.associate = (models) => {
    Permission.belongsToMany(models.Role, {
      through: "RolePermissions",
      foreignKey: "permissionId"
    });
  };

  return Permission;
};*/


export default (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "permissions",
      freezeTableName: true,
      timestamps: false
    }
  );

  Permission.associate = (models) => {
    Permission.belongsToMany(models.Role, {
      through: models.RolePermission,
      foreignKey: "permissionId"
    });
  };

  return Permission;
};
