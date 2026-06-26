var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function welcomeMessage(target) {
    console.log("Sisteme Hoşgeldiniz");
}
function helperMessageDecorator(msg) {
    function helperMessage(target) {
        console.log(msg);
    }
    return helperMessage;
}
function nameHeading(template, containerId) {
    return function (target) {
        const p = new target;
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = template;
            const h3 = container.querySelector("h3");
            if (h3) {
                h3.textContent = "Lütfen Seçiniz," + " " + p.name;
            }
        }
    };
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
function duplicator(target, propertyName) {
    let param;
    Object.defineProperty(target, propertyName, {
        get() {
            return param + " " + param;
        },
        set(value) {
            param = value;
            console.log("setter ", value);
        },
    });
}
function accessDecorator(target, name, descriptor) {
    descriptor.get = function () {
        console.log("Getter working");
    };
    descriptor.set = function () {
        console.log("Setter working");
    };
}
let Profile = class Profile {
    constructor() {
        //@duplicator
        this.name = "arda";
        this.age = 21;
        this.hometown = "bolu";
    }
    get get_name() {
        return this.name;
    }
    set get_name(newName) {
        this.name = newName;
    }
};
__decorate([
    accessDecorator,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Profile.prototype, "get_name", null);
Profile = __decorate([
    welcomeMessage,
    helperMessageDecorator("Size Nasıl Yardımcı Olabilirim?"),
    nameHeading("<h3></h3>", "container1")
], Profile);
const p = new Profile();
let a = p.get_name;
console.log(a);
console.log(p);
export {};
//# sourceMappingURL=app.js.map