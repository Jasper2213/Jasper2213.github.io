"use strict";

export function get(uri) {
    const request = new Request(uri, {
        method: 'GET',
    });

    return call(request);
}

function post(uri, body) {
    const request = new Request(uri, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;'
        },
        body: JSON.stringify(body)
    });

    call(request);
}

function put(uri, body) {
    const request = new Request(uri, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;'
        },
        body: JSON.stringify(body)
    });

    call(request);
}


function remove(uri) {
    const request = new Request(uri, {
        method: 'DELETE',
    });

    call(request);
}

function logJson(response) {
    response.json().then(console.log);
}

function logError(error) {
    console.error(error);
}

function call(request) {
    return fetch(request)
}
