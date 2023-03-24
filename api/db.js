import mysql from "mysql"

export const db = mysql.createConnection({
  host:"server200.orangehost.com",
  user:"bseacamb_admin",
  password: "8Sijgzv]MHu(",
  database:"bseacamb_blog"
})