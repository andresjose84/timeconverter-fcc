const dayjs = require( "dayjs" );
const utc = require( 'dayjs/plugin/utc' );
const timezone = require( 'dayjs/plugin/timezone' );

dayjs.extend( utc );
dayjs.extend( timezone );

class DateFormat {
    constructor( date ) {
        this.date = date;
        this.dateFormat = {
            unix: date,
            utc: ''
        };
    }
    getDataUnix () {
        let daysOfWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
        if ( this.date % 1000 !== 0 ) {
            //this.dateFormat.timeIn = 'Assuming that this timestamp is in <b>seconds</b>:';
            this.date *= 1000;
            this.dateFormat.unix = this.date;
        }

        this.dateFormat.utc = dayjs( this.date ).utc().format( 'DD MMM YYYY HH:mm:ss [GMT]' );

        const dayOfWeek = daysOfWeek[ dayjs( this.date ).utc().day() ];

        this.dateFormat.utc = dayOfWeek + ', ' + this.dateFormat.utc;

        return this.dateFormat;
    }
    getData () {

        let daysOfWeek = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
        console.log( this.date );

        this.dateFormat.unix = dayjs.utc( this.date ).unix() * 1000;

        this.dateFormat.utc = dayjs( this.date ).utc().format( 'DD MMM YYYY HH:mm:ss [GMT]' );

        const dayOfWeek = daysOfWeek[ dayjs( this.date ).utc().day() ];

        this.dateFormat.utc = dayOfWeek + ', ' + this.dateFormat.utc;

        return this.dateFormat;
    }
}
module.exports = DateFormat;