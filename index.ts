// את הקוד שלכם תכתבו כאן

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
class Shape {
    shape: string
    constructor(shape:string){
        this.shape = shape
    }
  draw(): void {
    console.log(`drawing a ${this.shape}`);
  }
}

class Circle extends Shape {
    constructor(shape: string){
        super(shape)
    }
  draw(): void {
    console.log(`drawing a ${this.shape}`);
  }
}
class Triangle extends Shape {
    constructor(shape: string){
        super(shape)
    }
  draw(): void {
    console.log(`drawing a ${this.shape}`);
  }
}
class Square extends Shape {
    constructor(shape: string){
        super(shape)
    }
  draw(): void {
    console.log(`drawing a ${this.shape}`);
  }
}


function renderShapes(arrayOfShape: Shape[]): void{
    arrayOfShape.forEach(element => {
        element.draw()
    });
} 


const mySquare = new Square('square')
const myShape = new Triangle('blue')
const myTriangle = new Shape('triangle')

const arr = new Array()
arr.push(myShape)
arr.push(mySquare)
arr.push(myTriangle)

renderShapes(arr)