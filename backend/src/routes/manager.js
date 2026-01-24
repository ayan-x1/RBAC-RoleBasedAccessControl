router.get(
  "/employees",
  authMiddleware,
  checkPermission("VIEW_EMPLOYEES"),
  getEmployees
);
