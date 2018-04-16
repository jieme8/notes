module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    configurewebpack: {
        resolve: {
            alias: {
                '@alias': 'https://iq.dxlfile.com/hotel/original/2018-03'
            }
        }
    }
}