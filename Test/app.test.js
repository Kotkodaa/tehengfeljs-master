describe(() => {
    it(() => {
        let actual = calcSurface(20, 0);
        expect(actual).toBe(0);
    });

    it(() => {
        let actual = calcSurface(5, 13);
        expect(actual).toBeCloseTo(565.4866776461628, 0.05);
    });
    it(() => {
        let actual = calcSurface(50, 2);
        expect(actual).toBeCloseTo(16336.281798666925, 0.05);
    });
  });

  describe(() => {
    it(() => {
        let actual = isGoodInput("k");
        expect(false).toBe(actual);
    });

    it(() => {
        let actual = isGoodInput(0);
        expect(true).toBe(actual);
    });
    
    it(() => {
        let actual = isGoodInput(400);
        expect(true).toBe(actual);
    });

    it(() => {
        let actual = isGoodInput("bib45uba");
        expect(false).toBe(actual);
    });
});