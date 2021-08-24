export const myLogger = (store) => {
    return (next) => {
        return (action) => {
            console.log("middleware ran");
            return next(action);
        };
    };
};

