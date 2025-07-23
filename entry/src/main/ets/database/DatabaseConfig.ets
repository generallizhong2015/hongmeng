export class DatabaseConfig {
  static readonly DATABASE_NAME :string= "notes.db";
  static readonly DATABASE_VERSION: number= 1;
  static readonly DATABASE_DESCRIPTION = "This is a database for notes";
  static readonly TABE_NAME: string = "notes.db";
  // 数据库表SQL
  static readonly SQL_CREATE_TABLE: string = `
    CREATE TABLE IF NOT EXISTS ${DatabaseConfig.TABE_NAME} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      create_time TEXT,
      update_time TEXT
    )`

}