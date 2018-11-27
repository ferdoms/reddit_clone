import { createConnection, getConnection, getConnectionOptions } from 'typeorm';
import { Link } from './entities/link';
import { link } from 'fs';


export async function connectDB(){

    const entities = [
        Link
    ]
    // read connection options from ormconfig file (or ENV variables)
    const connectionOptions = await getConnectionOptions();

    Object.assign(connectionOptions, { entities: entities, synchronize: true});
    
    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions)
        .then(async res=> 
            console.log(
                `DB connected:
                `, (res.options) 
            )
        )
        .catch(e => 
            console.log(
                `DB connection Error:
                ${e}
                `
            )
        );

}