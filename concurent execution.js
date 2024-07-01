async function parallelFlow() {
    let result1 = execute(1,1);
    let result2 = execute(2,2);
    let result3 = execute(3,3);
    let finalResult = await result1 +
    await result2 +
    await result3;
    console.log(finalResult);
    }
    
    