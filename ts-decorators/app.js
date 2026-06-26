var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
} */
function duplicator(target, parameterName) {
    let param;
    Object.defineProperty(target, parameterName, {
        get() {
            return param + " " + param;
        },
        set(value) {
            param = value;
            console.log("setter ", value);
        },
    });
}
let Profile = (() => {
    let _classDecorators = [welcomeMessage, helperMessageDecorator("Size Nasıl Yardımcı Olabilirim?"), nameHeading("<h3></h3>", "container1")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    var Profile = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [duplicator];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Profile = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name = __runInitializers(this, _name_initializers, "arda");
        age = (__runInitializers(this, _name_extraInitializers), 21);
        hometown = "bolu";
    };
    return Profile = _classThis;
})();
const p = new Profile();
console.log(p);
export {};
