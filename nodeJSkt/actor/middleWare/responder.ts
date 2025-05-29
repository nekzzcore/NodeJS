export class Responder {
    static compose(status: number, text: string): {status: number; text: string} {
        return {status, text}
    }
    static ok(body: object):  {status: number; text: string, body: object} {
        return {status: 200, text: "OK", body}
    }
    static not_found():  {status: number; text: string} {
        return {status: 404, text: "Not Found"}
    }
    static forbidden(message: string):  {status: number; text: string, message: string} {
        return {status: 403, text: "Forbidden", message}
    }
    static internal():  {status: number; text: string}{
        return {status: 500, text: "Internal Server Error"}
    }
}