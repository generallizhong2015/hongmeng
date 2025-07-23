import { relationalStore } from "@kit.ArkData"

export class Note {
  private _id: number = 0

  public set id(value: number) {
    this._id = value
  }

  public get id(): number {
    return this._id
  }

  private _title: string = ''

  public set title(value: string) {
    this._title = value
  }

  public get title(): string {
    return this._title
  }

  private _content: string = ''

  public set content(value: string) {
    this._content = value
  }

  public get content(): string {
    return this._content
  }

  private _createTime: string = ''

  public set createTime(value: string) {
    this._createTime = value
  }

  public get createTime(): string {
    return this._createTime
  }

  private _updateTime: string = ''

  public set updateTime(value: string) {
    this._updateTime = value
  }

  public get updateTime(): string {
    return this._updateTime
  }
  constructor(title: string = '', content: string = '') {
    this.title = title
    this.content = content
    const now = new Date().toISOString()
    this.createTime = now
    this.updateTime = now
  }

  // 从结果集创建Note对象
  static fromResultSet(resultSet: relationalStore.ResultSet): Note {
    const note = new Note()
    note.id = resultSet.getLong(resultSet.getColumnIndex('id'))
    note.title = resultSet.getString(resultSet.getColumnIndex('title'))
    note.content = resultSet.getString(resultSet.getColumnIndex('content'))
    note.createTime = resultSet.getString(resultSet.getColumnIndex('create_time'))
    note.updateTime = resultSet.getString(resultSet.getColumnIndex('update_time'))
    return note
  }

}