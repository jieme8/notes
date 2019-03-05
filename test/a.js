let i = require("./index")


class a extends i {
    constructor(){
        super()
    }
}







(async () => {
    try{
        let uu = new a() 
        await uu.show();
        
    }catch(e){
        console.error(e);
    }
})();