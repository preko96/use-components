export default function createStyle(creator) {
    function createSingle(props) {
        for (const prop in props) {
            const value = props[prop]
            const result = creator(props, prop, value)
            if (result) return result
        }
    }
    return createSingle
}

// EXAMPLE:
// const background = createStyle((props, prop) => {
// 	const background = props.theme.standard[prop]
// 	const color = props.theme.pair[prop]
// 	if (background) return { background, color }
// })
