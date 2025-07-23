import relationalStore from "@ohos:data.relationalStore";
import { DatabaseConfig } from "@bundle:com.huawei.logindemo/entry/ets/database/DatabaseConfig";
import { Note } from "@bundle:com.huawei.logindemo/entry/ets/database/Note";
export class NoteDao {
    private rdbStore: relationalStore.RdbStore;
    constructor(rdbStore: relationalStore.RdbStore) {
        this.rdbStore = rdbStore;
    }
    // 插入笔记
    async insert(note: Note): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            const valueBucket: relationalStore.ValuesBucket = {
                'title': note.title,
                'content': note.content,
                'create_time': note.createTime,
                'update_time': note.updateTime
            };
            this.rdbStore.insert(DatabaseConfig.TABE_NAME, valueBucket, (err, rowId) => {
                if (err) {
                    console.error(`Failed to insert note. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                console.info(`Succeeded in inserting note. rowId:${rowId}`);
                resolve(rowId);
            });
        });
    }
    // 更新笔记
    async update(note: Note): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            const valueBucket: relationalStore.ValuesBucket = {
                'title': note.title,
                'content': note.content,
                'update_time': new Date().toISOString()
            };
            const predicates = new relationalStore.RdbPredicates(DatabaseConfig.TABE_NAME);
            predicates.equalTo('id', note.id);
            this.rdbStore.update(valueBucket, predicates, (err, rowsUpdated) => {
                if (err) {
                    console.error(`Failed to update note. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                console.info(`Succeeded in updating note. rowsUpdated:${rowsUpdated}`);
                resolve(rowsUpdated);
            });
        });
    }
    // 删除笔记
    async delete(id: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            const predicates = new relationalStore.RdbPredicates(DatabaseConfig.TABE_NAME);
            predicates.equalTo('id', id);
            this.rdbStore.delete(predicates, (err, rowsDeleted) => {
                if (err) {
                    console.error(`Failed to delete note. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                console.info(`Succeeded in deleting note. rowsDeleted:${rowsDeleted}`);
                resolve(rowsDeleted);
            });
        });
    }
    // 查询所有笔记
    async queryAll(): Promise<Note[]> {
        return new Promise<Note[]>((resolve, reject) => {
            const predicates = new relationalStore.RdbPredicates(DatabaseConfig.TABE_NAME);
            this.rdbStore.query(predicates, ['id', 'title', 'content', 'create_time', 'update_time'], (err, resultSet) => {
                if (err) {
                    console.error(`Failed to query notes. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                const notes: Note[] = [];
                while (resultSet.goToNextRow()) {
                    notes.push(Note.fromResultSet(resultSet));
                }
                resultSet.close();
                console.info(`Succeeded in querying notes. count:${notes.length}`);
                resolve(notes);
            });
        });
    }
    // 根据ID查询笔记
    async queryById(id: number): Promise<Note | null> {
        return new Promise<Note | null>((resolve, reject) => {
            const predicates = new relationalStore.RdbPredicates(DatabaseConfig.TABE_NAME);
            predicates.equalTo('id', id);
            this.rdbStore.query(predicates, ['id', 'title', 'content', 'create_time', 'update_time'], (err, resultSet) => {
                if (err) {
                    console.error(`Failed to query note. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                if (resultSet.rowCount === 0) {
                    resultSet.close();
                    resolve(null);
                    return;
                }
                resultSet.goToFirstRow();
                const note = Note.fromResultSet(resultSet);
                resultSet.close();
                console.info('Succeeded in querying note by id.');
                resolve(note);
            });
        });
    }
    // 搜索笔记
    async search(keyword: string): Promise<Note[]> {
        return new Promise<Note[]>((resolve, reject) => {
            const predicates = new relationalStore.RdbPredicates(DatabaseConfig.TABE_NAME);
            predicates.contains('title', keyword).or().contains('content', keyword);
            this.rdbStore.query(predicates, ['id', 'title', 'content', 'create_time', 'update_time'], (err, resultSet) => {
                if (err) {
                    console.error(`Failed to search notes. Code:${err.code}, message:${err.message}`);
                    reject(err);
                    return;
                }
                const notes: Note[] = [];
                while (resultSet.goToNextRow()) {
                    notes.push(Note.fromResultSet(resultSet));
                }
                resultSet.close();
                console.info(`Succeeded in searching notes. count:${notes.length}`);
                resolve(notes);
            });
        });
    }
}
