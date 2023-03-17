function dataCenter(targetArea) {
    return Math.sqrt(targetArea) % 1 === 0 ? Math.sqrt(targetArea) * 4 : (targetArea * 2) + 2
}
module.exports = dataCenter;