function createScaleUnit(scale, unit) {
    return function(number) {
        return `${number * scale}${unit}`
    }
}

export default function sizes(scale = 1, unit = 'rem') {
    const size = createScaleUnit(scale, unit)
    return {
        tiny: size(0.5),
        small: size(0.75),
        normal: size(1),
        medium: size(1.25),
        large: size(1.5),
        extra: size(1.75),
    }
}
