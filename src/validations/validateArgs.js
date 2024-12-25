export async function validateArgs(args) {
    for (let arg in args) {
        if(args[arg] === undefined) {
            throw new Error(`error: unknow option '${arg}'`).message; 
        };
    }
}