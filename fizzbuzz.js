let fizzbuzz = (()=>{
    for(let i = 1;i<=100;i++){
        let fizz = i%3==0;
        let buzz = i%5==0;
        let str = "";

        if(fizz){
            str+="fizz";
        }
        if(buzz){
            str+="buzz";
        }
    
        if(str===""){
            str+=i;
        }
        console.log(str);
    }
})();
