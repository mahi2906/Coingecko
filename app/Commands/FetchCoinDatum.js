const { Command } = require('@adonisjs/ace')
const axios = require('axios')
const Database = use('Database')
const Coin = use('D:\learning\task\Adonis\app\Models\Coin.js') 

class FetchCoinData extends Command {
  static get signature() {
    return 'fetch:coin-data'
  }

  static get description() {
    return 'Fetches coin data from Coingecko API and stores it in the database'
  }

  async handle() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
      const coins = response.data

      for (const coin of coins) {
        await this.storeCoin(coin)
      }

      this.info('Coin data fetched and stored successfully.')
    } catch (error) {
      this.error('An error occurred while fetching and storing coin data:', error.message)
    }
  }

  async storeCoin(coin) {
    await Database.table('coins').insert({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      platforms: JSON.stringify(coin.platforms),
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
}

module.exports = FetchCoinData
