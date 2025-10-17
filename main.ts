export {}

function printLength(obj: {a?: string}) {
    console.log(obj.a?.length)
}
printLength({ a: "Hello" })

printLength({})