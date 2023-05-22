/*
Полный алгоритм:
1. Отрезаем n нулей
2. Инит пойнтер указывающий на числа массива в который надо вставлять.
3. Цикл по числам которые надо вставить, берем число
    3. while число больше числа по пойнтеру, двигаем пойнтер вправо
    4. Вставляем число
*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (nums2.length === 0) return
    nums1.splice(nums1.length - n, n) // 1

    let firstPointer = 0 // 2
    for (let numToInsert of nums2) {
        while (numToInsert > nums1[firstPointer]) firstPointer++ // 3
        nums1.splice(firstPointer, 0, numToInsert) // 4
    }
}
