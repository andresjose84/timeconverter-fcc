const DateFormat = require( "../models/dateFormat" );

const formatDate = ( req, res ) => {
    console.log( 'formatDate' );
    try {
        const { date } = req.params;

        const obj = typeof date === 'string'
            ? new DateFormat( date ).getData()
            : new DateFormat( date ).getDataUnix();

        return res.status( 200 ).json( obj );
    } catch ( error ) {
        console.log( error );
        return res.status( 401 ).json( {
            ok: false,
            msg: 'Problem with date formatting'
        } );
    }
};

const currentDate = ( req, res ) => {
    console.log( 'Current date' );
    try {
        const obj = new DateFormat().getCurrentDate();
        return res.status( 200 ).json( obj );
    } catch ( error ) {
        console.log( error );
        return res.status( 401 ).json( {
            ok: false,
            msg: 'Problem with date formatting'
        } );
    }
};

module.exports = {
    currentDate,
    formatDate
};