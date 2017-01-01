var Animal = (function () {
    function Animal(name, leg) {
        this.name = name;
        this.leg = leg;
    }
    Animal.prototype.getLeg = function () {
        return this.leg;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
//# sourceMappingURL=main.js.map