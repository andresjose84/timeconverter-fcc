const { Router } = require( "express" );
const { formatDate } = require( "../controllers/dateController" );
const isValidDate = require( "../middlewares/validar-date" );

const router = Router();

router.get( '/', function ( req, res ) {
    res.status( 200 ).json( {
        unix: null, utc: null
    } );
} );

router.get( '/:date',
    isValidDate,
    formatDate
);


module.exports = router;