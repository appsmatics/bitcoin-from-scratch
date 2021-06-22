class Curve {
  /**
   Elliptic Curve over the field of integers modulo a prime.
   Points on the curve satisfy y^2 = x^3 + a*x + b (mod p).
   */
  p: number
  a: number
  b: number

  constructor () {
    this.p = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
    this.a = 0x0000000000000000000000000000000000000000000000000000000000000000
    this.b = 0x0000000000000000000000000000000000000000000000000000000000000007
  
  }
}

class Point {
    //An integer point (x,y) on a Curve
    curve: Curve
    x: number
    y: number

    constructor (curve: Curve, x: number, y: number) {
      this.curve = curve
      this.x = x
      this.y = y
    }
}

// secp256k1 uses a = 0, b = 7, so we're dealing with the curve y^2 = x^3 + 7 (mod p)
const bitcoin_curve = new Curve()

const G = new Point (
  bitcoin_curve,
  0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798,
  0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8
)

console.log ("Generator IS on the curve: ", (G.y**2 - G.x**3 - 7) % bitcoin_curve.p == 0)