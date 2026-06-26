function welcomeMessage(target: any){
console.log("Sisteme Hoşgeldiniz");
}

function helperMessageDecorator(msg: string){
    function helperMessage(target: any){
        console.log(msg)
    }
    return helperMessage
}

function nameHeading(template: string, containerId: string){
    return function(target:any){
        const p = new target;
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = template;
            const h3 = container.querySelector("h3");
            if(h3){
            h3.textContent = "Lütfen Seçiniz," + " " + p.name;
            }
        }
    }
}


/* function duplicator(target:any, parameterName: string): any {
    let param: string;
    function setter(value: string){
        param = value;
    }
    function getter(){
        return param + " " + param;
    }
} */

function duplicator(target:any, parameterName: string): any {
    let param: string;
    Object.defineProperty(target,parameterName, {
        get(){
            return param + " " + param;
        },

        set(value: string) {
            param = value; 
            console.log("setter ", value)
        },
    })  
} 

@welcomeMessage
@helperMessageDecorator("Size Nasıl Yardımcı Olabilirim?")
@nameHeading("<h3></h3>","container1")
class Profile{
    @duplicator
    name : string = "arda";
    age: number = 21;
    hometown: string = "bolu";
}

const p = new Profile()
console.log(p)
export {};

