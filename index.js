// את הקוד שלכם תכתבו כאן
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
//  1. Rectangle - מלבן
// class Rectangle {
//     hight: number;
//     width: number;
//     constructor(hight: number, width: number) {
//       this.hight = hight;
//       this.width = width;
//     }
//     area(): number {
//       return this.hight * this.width;
//     }
//   }
//  2. Square - ריבוע
// class Square extends Rectangle {
//     ribHight: number;
//     constructor(hight: number, width: number, ribHight: number) {
//       super(hight, width);
//       this.ribHight = ribHight;
//     }
//   }
// 3. Shape - צורה
// class Rectangle {
//   hight: number;
//   width: number;
//   constructor(hight: number, width: number) {
//     this.hight = hight;
//     this.width = width;
//   }
//   info(): string {
//     return "This is a Rectangle";
//   }
//   area(): number {
//     return this.hight * this.width;
//   }
// }
// class Square extends Rectangle {
//   ribHight: number;
//   constructor(hight: number, width: number, ribHight: number) {
//     super(hight, width);
//     this.ribHight = ribHight;
//   }
// }
// class Shape extends Rectangle {
//   constructor(hight: number, width: number) {
//     super(hight, width);
//   }
//   info(): string {
//     return "This is a Shape";
//   }
// }
// class ColoredRectangle extends Rectangle{
//   color: string;
//   constructor(hight: number, width: number, color: string) {
//     super(hight, width);
//     this.color = color;
//   }
//   info(): string{
//     return `this Rectangle in color ${this.color}`
//   }
// }
// 4. Method Chaining
// class Rectangle {
//     hight: number;
//     width: number;
//     constructor(hight: number, width: number) {
//       this.hight = hight;
//       this.width = width;
//     }
//     info(): string {
//       return "This is a Rectangle";
//     }
//     area(): number {
//       return this.hight * this.width;
//     }
//     scale(coefficient: number): number{
//         return this.area() * coefficient
//     }
//     static combineRectangle(rectangle1: Rectangle, rectangle2: Rectangle): Number{
//         return rectangle1.area() * rectangle2.area()
//     }
//   }
//   class Square extends Rectangle {
//     ribHight: number;
//     constructor(hight: number, width: number, ribHight: number) {
//       super(hight, width);
//       this.ribHight = ribHight;
//     }
//   }
//   class Shape extends Rectangle {
//     constructor(hight: number, width: number) {
//       super(hight, width);
//     }
//     info(): string {
//       return "This is a Shape";
//     }
//   }
//   class ColoredRectangle extends Rectangle{
//     color: string;
//     constructor(hight: number, width: number, color: string) {
//       super(hight, width);
//       this.color = color;
//     }
//     info(): string{
//       return `this Rectangle in color ${this.color}`
//     }
//   }
// 5. Shape with draw method
var Shape = /** @class */ (function () {
    function Shape(shape) {
        this.shape = shape;
    }
    Shape.prototype.draw = function () {
        console.log("drawing a ".concat(this.shape));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(shape) {
        return _super.call(this, shape) || this;
    }
    Circle.prototype.draw = function () {
        console.log("drawing a ".concat(this.shape));
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(shape) {
        return _super.call(this, shape) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("drawing a ".concat(this.shape));
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(shape) {
        return _super.call(this, shape) || this;
    }
    Square.prototype.draw = function () {
        console.log("drawing a ".concat(this.shape));
    };
    return Square;
}(Shape));
function renderShapes(arrayOfShape) {
    arrayOfShape.forEach(function (element) {
        element.draw();
    });
}
var mySquare = new Square('square');
var myShape = new Triangle('blue');
var myTriangle = new Shape('triangle');
var arr = new Array();
arr.push(myShape);
arr.push(mySquare);
arr.push(myTriangle);
renderShapes(arr);
