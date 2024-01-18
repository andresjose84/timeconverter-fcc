const { Router } = require( "express" );
const { formatDate, currentDate } = require( "../controllers/dateController" );
const isValidDate = require( "../middlewares/validar-date" );

const router = Router();

router.get( '/', currentDate );

router.get( '/:date',
    isValidDate,
    formatDate
);


module.exports = router;