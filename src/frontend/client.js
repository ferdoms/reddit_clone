var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
var addUser = (() => __awaiter(this, void 0, void 0, function* () {
    const newUser = {
        email: "fernando@marinho.com",
        password: "123456"
    };
    const response = yield fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(newUser)
    });
}));
var addLink = (() => __awaiter(this, void 0, void 0, function* () {
    const newLink = {
        link: "www.google.com",
        title: "string",
        user: 1
    };
    const response = yield fetch("http://localhost:8080/api/v1/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(newLink)
    });
}));
var addCommnent = (() => __awaiter(this, void 0, void 0, function* () {
    const newComment = {
        comment: "some comment",
        link: 1,
        user: 1
    };
    const response = yield fetch("http://localhost:8080/api/v1/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(newComment)
    });
}));
addUser().then(() => addLink().then(() => addCommnent()));
