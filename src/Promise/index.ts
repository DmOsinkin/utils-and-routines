const wait = (ms: number = 0) =>
    new Promise((resolve: (value: unknown) => void) => setTimeout(resolve, ms));
