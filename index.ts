// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
    hight: number;
    width: number;
  
    constructor(hight: number, width: number) {
      this.hight = hight;
      this.width = width;
    }
  
    area(): number {
      return this.hight * this.width;
    }
  }

//  2. Square - ריבוע
class Square extends Rectangle {
    ribHight: number;
  
    constructor(hight: number, width: number, ribHight: number) {
      super(hight, width);
      this.ribHight = ribHight;
    }
  }
  
// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
