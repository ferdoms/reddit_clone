import { createConnection, getConnection, getConnectionOptions } from 'typeorm';
import { Link } from './entities/link';
import { User } from './entities/user';
import { Comment } from './entities/comment';
import { Vote } from './entities/vote';


export async function connectDB(){

    const entities = [
        Link,
        User,
        Comment,
        Vote,
    ]
    // read connection options from ormconfig file (or ENV variables)
    const connectionOptions = await getConnectionOptions();

    Object.assign(connectionOptions, { entities: entities, synchronize: true, dropSchema: true});
    
    // create a connection using modified connection options
    const connection = await createConnection(connectionOptions)
        .then(async res=> {
            console.log(
                `DB connected: ${res.isConnected}
                `, (res.options) 
            )
        })
        .catch(e => 
            console.log(
                `DB connection Error:
                ${e}
                `
            )
        );

}