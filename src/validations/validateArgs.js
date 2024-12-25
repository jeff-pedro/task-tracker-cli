export async function validateArgs(args) {
    for (let arg in args) {
        if(args[arg] === undefined) {
            throw new Error(`Missing task ${arg}`).message; 
        };
    }
}