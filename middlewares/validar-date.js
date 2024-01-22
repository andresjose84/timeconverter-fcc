const { response } = require( 'express' );
const dayjs = require( 'dayjs' );

const isValidDate = ( req, res = response, next ) => {

    try {

        let { date } = req.params;

        req.params.date = Number( date ) ? Number( date ) : date;

        const isValidDate = dayjs( date ).isValid();

        if ( !isValidDate )
            return res.status( 401 ).json( { error: "Invalid Date" } );
        next();
    } catch ( error ) {
        console.log( error );
        return res.status( 401 ).json( { error: "Invalid Date" } );
    }
};

module.exports = isValidDate;