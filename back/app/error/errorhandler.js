// eslint-disable-next-line no-unused-vars
export function errorHandler (err, req, res, next) {
    const httpStatus = err.status ? err.status : 500;

    if(err.message === 'Validation error'){
        err.message = err.errors[0].message;
    }

    res.status(httpStatus).json({error: err.message});

}