const Route = use('Route')
const FetchCoinDatacontroller = require("./app/Commands/FetchCoinDatum")


Route.post("/", FetchCoinDatacontroller.FetchCoinData)

module.exports = Route