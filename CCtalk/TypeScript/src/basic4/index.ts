// 04 数组的存储和数组类型的定义

/*
    引用类型1: 数组 Array
    1、几乎所有的编程语言中[]都表示为一个数组
    2、在 TS 中数组元素的类型在定义的时候必须确定
    3、在 JS 中数组是由字典方式存储的，数组的长度是动态的，不定长的
*/

/* 
    [1, 2, 3]
    {
        0: 1,
        1: 2,
        2: 3
    }
*/

// 声明以及初始化
// 元素为 number 的数组
/* let intArr: number[] = [1, 2, 3];
intArr[3] = "4"; */

// Array<string> 泛型 === string[]
/* let strArr: Array<string> = ["1", "2", "3"]; */

// 类型推断
/* let intArr2 = [1, 2, 3];
let strArr2 = ["1", "2", "3"]; */
