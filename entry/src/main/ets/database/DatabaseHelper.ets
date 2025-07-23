import { relationalStore } from "@kit.ArkData"
import { DatabaseConfig } from "./DatabaseConfig"
import { BusinessError } from "@kit.BasicServicesKit"

export class DatabaseHelper {
  private rdbStore: relationalStore.RdbStore | null = null
  private static instance: DatabaseHelper | null = null

  private constructor() {}

  public static getInstance(): DatabaseHelper {
    if (!DatabaseHelper.instance) {
      DatabaseHelper.instance = new DatabaseHelper()
    }
    return DatabaseHelper.instance
  }

  // 初始化数据库
  async initDatabase(context: Context): Promise<void> {
    try {
      const config: relationalStore.StoreConfig = {
        name: DatabaseConfig.DATABASE_NAME,
        securityLevel: relationalStore.SecurityLevel.S1
      }

      relationalStore.getRdbStore(context, config, (err, store) => {
        if (err) {
          console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`)
          return
        }

        this.rdbStore = store
        console.info('Succeeded in getting RdbStore.')

        // 创建表
        this.createTable()
      })
    } catch (err) {
      const error = err as BusinessError
      console.error(`Failed to init database. Code:${error.code}, message:${error.message}`)
    }
  }

  // 创建表
  private createTable(): void {
    if (!this.rdbStore) {
      console.error('RdbStore is not initialized')
      return
    }

    this.rdbStore.executeSql(DatabaseConfig.SQL_CREATE_TABLE, [], (err) => {
      if (err) {
        console.error(`Failed to create table. Code:${err.code}, message:${err.message}`)
        return
      }
      console.info('Succeeded in creating table.')
    })
  }

  // 获取RdbStore实例
  getRdbStore(): relationalStore.RdbStore | null {
    return this.rdbStore
  }


  private  upgradeDatabase(fromVersion: number, toVersion: number): void {
    if (!this.rdbStore) {
      return
    }

    if (fromVersion < 2) {
      this.rdbStore.executeSql(
        `ALTER TABLE ${DatabaseConfig.TABE_NAME} ADD COLUMN color TEXT DEFAULT '#FFFFFF'`,
        [],
        (err) => {
          if (err) {
            console.error(`Failed to upgrade database. Code:${err.code}, message:${err.message}`)
            return
          }
          console.info('Database upgraded to version 2')
        }
      )
    }
  }
}