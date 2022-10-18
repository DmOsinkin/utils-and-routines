function insertIf<T>(condition: boolean, element: T): T[] {
    return condition ? [element] : [];
}
