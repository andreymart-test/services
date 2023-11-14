export default defineNuxtPlugin(() => {
  const _api = {
    getGames: async () => await useFetch('http://nasoft888.com/game-service/v1/games?limit=10&offset=0')
  }
  return {
    provide: {
      api: _api,
    },
  }
})
