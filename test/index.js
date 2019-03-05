class index {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    show(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('--------------------');
            },2000)
            return resolve(true)
        });
        
    }
}


module.exports = index