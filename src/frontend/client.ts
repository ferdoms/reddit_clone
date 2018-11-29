
let addUser = (async ()=> {

        const newUser = {
            email: "fernando@marinho.com",
            password: "123456"
        };
        const response = await fetch(
            "http://localhost:8080/api/v1/users",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                body:JSON.stringify(newUser)
            }
        );
    })

let addLink = (async () => {
        const newLink = {
            link: "www.google.com",
            title: "string",
            user: 1
        };
        const response = await fetch(
            "http://localhost:8080/api/v1/links",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                body:JSON.stringify(newLink)
            }
        );

    });

let addCommnent = (async () => {

        const newComment = {
            comment: "some comment",
            link: 1,
            user: 1
        };
        const response = await fetch(
            "http://localhost:8080/api/v1/comments",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                body:JSON.stringify(newComment)
            }
        );


    });


addUser().then(()=> addLink().then(()=>addCommnent().then(()=>addUser())))






