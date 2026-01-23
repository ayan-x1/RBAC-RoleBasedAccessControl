export const ADMIN_EMAIL = "admin@gmail.com";
export const ADMIN_PASSWORD = "Admin@123";


export function isAdmin(session) {
if (!session) return false;
return (
session.email === ADMIN_EMAIL &&
session.password === ADMIN_PASSWORD
);
}