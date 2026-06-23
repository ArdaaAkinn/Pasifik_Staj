function welcomeMessage(target: any){
console.log("Sisteme Hoşgeldiniz");
}

function helperMessageDecorator(msg: string){
    function helperMessage(target: any)
    {
        console.log(msg)
    }
    
    return helperMessage
}

function template(template: string, containerId: string){
    return function(target:any){
        const container = document.getElementById(containerId);
        if (container)
        container.innerHTML = template;
    }
}

function nameHeading(template: string, containerId: string){
    return function(target:any){
        const p = new target;
        const container = document.getElementById(containerId);
        if (container) {
        container.innerHTML = template;
        const h3 = container.querySelector("h3");
        if(h3)
        h3.textContent = "Lütfen Seçiniz," + p.name;
        }
    }
}

@welcomeMessage
@helperMessageDecorator("Size Nasıl Yardımcı Olabilirim?")
@nameHeading("<h3></h3>","container 1" )
class Profile{
    name : string = "arda";
    age: number = 21;
    hometown: string = "bolu";
}

