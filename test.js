function retObj() {
    return {
        x: async function(a) {
            return 10+a;
        },
        y: async function() {
            const xValue = await this.x(2);
            // console.log(this);
            return  xValue + 22;
        }
    }
}


async function result() {
    const obj = retObj();
    const xValue = await obj.x(1);
    const yValue = await obj.y(xValue);
    console.log(xValue);
    console.log(yValue);
}

result();