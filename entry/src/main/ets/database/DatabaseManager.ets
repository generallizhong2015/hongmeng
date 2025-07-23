import { DatabaseHelper } from "./DatabaseHelper"
import { Note } from "./Note"
import { NoteDao } from "./NoteDao"
import { BusinessError } from "@kit.BasicServicesKit"

export class DatabaseManager {
  private static instance: DatabaseManager | null = null
  private noteDao: NoteDao | null = null

  private constructor() {
  }

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager()
    }
    return DatabaseManager.instance
  }

  // 初始化数据库
  async init(context: Context): Promise<void> {
    await DatabaseHelper.getInstance().initDatabase(context)
    const rdbStore = DatabaseHelper.getInstance().getRdbStore()
    if (rdbStore) {
      this.noteDao = new NoteDao(rdbStore)
    }
  }

  // 获取NoteDao实例
  getNoteDao(): NoteDao | null {
    return this.noteDao
  }

  async saveDB() {
    const note = new Note('购物清单', '牛奶、鸡蛋、面包')
    DatabaseManager.getInstance().getNoteDao()?.insert(note)
      .then((id) => {
        console.info(`Note inserted with id: ${id}`)
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to insert note. Code:${err.code}, message:${err.message}`)
      })
  }

  async upData() {
    DatabaseManager.getInstance().getNoteDao()?.queryById(1)
      .then((note) => {
        if (note) {
          note.content = '牛奶、鸡蛋、面包、苹果'
          note.updateTime = new Date().toISOString()
          return DatabaseManager.getInstance().getNoteDao()?.update(note)
        } else {
          // 显式返回 Promise.reject 以中断链式调用
          return Promise.reject(new Error('Note not found'))
        }
      })
      .then((rowsUpdated) => {
        console.info(`Note updated. Rows affected: ${rowsUpdated}`)
      })
      .catch((err: BusinessError | Error) => {
        console.error(`Failed to update note. Message: ${err.message}`)
      })
  }


  async quely() {
    DatabaseManager.getInstance().getNoteDao()?.queryAll()
      .then((notes) => {
        notes.forEach((note) => {
          console.info(`Note: ${JSON.stringify(note)}`)
        })
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to query notes. Code:${err.code}, message:${err.message}`)
      })
  }

  async delete() {
    DatabaseManager.getInstance().getNoteDao()?.delete(1)
      .then((rowsDeleted) => {
        console.info(`Note deleted. Rows affected: ${rowsDeleted}`)
      })
      .catch((err: BusinessError) => {
        console.error(`Failed to delete note. Code:${err.code}, message:${err.message}`)
      })
  }

  async search() {
    DatabaseManager.getInstance().getNoteDao()?.search('购物')
      .then((notes) => {
        notes.forEach((note) => {
          console.info(`Search result: ${JSON.stringify(note)}`)
        })
      })
      .catch((err:BusinessError) => {
        console.error(`Failed to search notes. Code:${err.code}, message:${err.message}`)
      })
  }
}