// async function getData() {
//     return "hh";
// }
// const data = getData();
// console.log(data);

async function performTasks(){
    try {
        const result1 = await performTask1();
        const result2 = await performTask2();
        const result3 = await performTask3();
        console.log(result1, result2, result3);
    } catch (error) {
        console.log(error);
    }
}