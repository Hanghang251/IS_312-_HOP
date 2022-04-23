"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Motorcycle = exports.Car = exports.vehicle = void 0;
var Alexa_1 = require("./Alexa");
var vehicle = /** @class */ (function () {
    function vehicle(started, seat, power, speed) {
        this.started = started;
        this.seat = seat;
        this.power = power;
        this.speed = speed;
        started = true;
    }
    vehicle.prototype.is0n = function () {
        return this.started;
    };
    vehicle.prototype.getSeat = function () {
        return this.seat;
    };
    vehicle.prototype.getPower = function () {
        return this.power;
    };
    vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    vehicle.prototype.setSpeed = function (speed) {
        //input validation can be done herel
        this.speed = speed;
    };
    return vehicle;
}());
exports.vehicle = vehicle;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drift = function () {
        Alexa_1.Alexa.play('Deja vu');
    };
    return Car;
}(vehicle));
exports.Car = Car;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(vehicle));
exports.Motorcycle = Motorcycle;
