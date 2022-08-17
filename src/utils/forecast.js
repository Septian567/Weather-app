const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=864bd6e59cc6bd5c1fbca1c1a8ba4e02&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degress out." + "\n" + "cloud amount is " + body.current.cloudcover + "\n" + "\n" + ", wind speed is " + body.current.wind_speed + " mph and wind degree is " + body.current.wind_degree + ". it's " + body.current.wind_dir + " direction." + "\n" + "humidity is " + body.current.humidity + " gram/ " + body.current.temperature + " celcius degrees." + "\n" + "\n" +
                "localtime is " + body.location.localtime + "\n" + ". timezone id is " + body.location.timezone_id + ". the daylight is " + body.current.is_day
            )
        }
    })
}

// "localtime is " + body.location.localtime + " right now. \n" + baru

module.exports = forecast