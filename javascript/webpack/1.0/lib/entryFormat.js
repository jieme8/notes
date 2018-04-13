module.exports = (p) => {
    var _p = {};
    p.map(function(item){_p[item] = "./src/" + item;});
    console.log(_p)
    return _p;
}