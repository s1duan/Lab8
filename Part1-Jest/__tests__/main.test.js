const func = require("../assets/scripts/main.js")

function helperFunc(iconLevel){
    return `./assets/media/icons/volume-level-${iconLevel}.svg`
}

describe('volume level', () => {
    test("icon level is 3 if volume greater than 66", () => {
        expect(func(67)).toBe(helperFunc(3))
    })
    test("icon level is 2 if volume greater than 33 less than 66", () => {
        expect(func(34)).toBe(helperFunc(2))
    })
    test("icon level is 1 if volume greater than 0 less than 33", () => {
        expect(func(1)).toBe(helperFunc(1))
    })
    test("icon level is 0 if volume is 0", () => {
        expect(func(0)).toBe(helperFunc(0))
    })
})