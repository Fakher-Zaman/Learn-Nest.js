export const connection: Connection = {
    CONNECTION_STRING: 'MYSQL://localhost:3306/SONGS',
    DB: 'MYSQL',
    DBNAME: 'TEST',
};

export type Connection = {
    CONNECTION_STRING: string;
    DB: string;
    DBNAME: string;
}