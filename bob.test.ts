import { hey } from "./bob";

describe("hey Function", () => {
    it("simple statement", () => {
        const result = hey('Hi.')
        expect(result).toBe('Whatever.')
    })
    
    it('complex statement', () => {
        const result = hey("My name is Bob.")
        expect(result).toBe('Whatever.')
    })

    it("question", () => {
        const result = hey("Where you at?")
        expect(result).toBe('Sure.')
    })

    it("yelling", () => {
        const result = hey("I AM CRAZY!")
        expect(result).toBe('Whoa, chill out!')
    })

    it("silence", () => {
        const result = hey("")
        expect(result).toBe("Fine. Be that way!")
    })
})