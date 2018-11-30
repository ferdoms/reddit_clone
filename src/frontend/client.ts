
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
let deleteLink = (async (id:number) => {
    
    const response = await fetch(
        "http://localhost:8080/api/v1/links/"+id,
        {
            method:"DELETE",
        }
        
    );
    const json = await response.json();
    console.log("http://localhost:8080/api/v1/links/"+id);


});

let addCommnent = (async (comment:string) => {

        const newComment = {
            comment: comment,
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
        ).then(res=>console.log(console.log(res)));


});
let upvoteLink = (async (linkId:number) => {

    const voteUser = {
        user: 1
    };
    const response = await fetch(
        "http://localhost:8080/api/v1/links/"+linkId+"/upvote",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body:JSON.stringify(voteUser)
        }
    );


});
let downvoteLink = (async (linkId:number) => {

    const voteUser = {
        user: 1
    };
    const response = await fetch(
        "http://localhost:8080/api/v1/links/"+linkId+"/downvote",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body:JSON.stringify(voteUser)
        }
    ).then(res=>console.log(console.log("downvoted")))


})

addUser()
    .then(()=> addLink()
        .then(()=>upvoteLink(1)
            .then(()=>addCommnent("first comment")
                .then(()=>upvoteLink(2)
                    .then(()=>addCommnent("second comment")
                    )
            )
        )
    )
)

