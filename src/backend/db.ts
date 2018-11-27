import { createConnection, getConnection, getConnectionOptions } from 'typeorm';


export async function connectDB(){

    // read connection options from ormconfig file (or ENV variables)
    const connectionOptions = await getConnectionOptions();

    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions)
        .then(res => 
        console.log(
            `DB connected:
            type: ${res.options.type}
            database: ${res.options.database}
            `
        ))
        .catch(e => 
            console.log(
                `DB connection Error:
                ${e}
                `
            )
        );

}