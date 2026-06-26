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
    return(
    set: setter
    get: getter
    )
} */

function duplicator(target:any, propertyName: string): any {
    let param: string;
    Object.defineProperty(target,propertyName, {
        get(){
            return param + " " + param;
        },

        set(value: string) {
            param = value; 
            console.log("setter ", value)
        },
    })  
} 

function accessDecorator(target:any, name:string, descriptor:PropertyDescriptor){
    descriptor.get = function(){
        console.log("Getter working")
    }

    descriptor.set = function(){
        console.log("Setter working");
    }
}

@welcomeMessage
@helperMessageDecorator("Size Nasıl Yardımcı Olabilirim?")
@nameHeading("<h3></h3>","container1")
class Profile{
    //@duplicator
    name : string = "arda";
    age: number = 21;
    hometown: string = "bolu";

    @accessDecorator
    get get_name(){
        return this.name;
    }

    set get_name(newName: string){
        this.name = newName;
    }
}

const p = new Profile()
let a = p.get_name;
console.log(a)
console.log(p)
export {};

