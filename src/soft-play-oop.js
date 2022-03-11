class SoftPlay {
  constructor () {
    this.adults = 0
    this.children = 0
  }

  occupancy () {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  enter (numAdults, numChildren) {
    if (numChildren > numAdults) { return false } else {
      this.adults += numAdults
      this.children += numChildren
      return true
    }
  }

  leave (numAdults, numChildren) {
    const remainCountAdults = this.adults - numAdults
    const remainCountChildren = this.children - numChildren
    if (numChildren > numAdults) { return false }
    else if (remainCountChildren > remainCountAdults) { return false }
    else if (numAdults > this.adults || numChildren > this.children) { return false }
    else {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
  }
}

module.exports = {
  SoftPlay: SoftPlay
}
