export const myLogger = (store) => {
    return (next) => {
        return (action) => {
            return next(action);
        };
    };
};

