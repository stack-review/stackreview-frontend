const DEFAULT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm

const c_cpp = DEFAULT_REGEX
const golang = DEFAULT_REGEX
const java = DEFAULT_REGEX
const javascript = DEFAULT_REGEX
const lua = /\[((=*)\[(.|\n)*?)\]\2\]|--.*$/gm
const python = /'{3}[\s\S]*?'{3}|"{3}[\s\S]*?"{3}|#(.*)$/gm

module.exports = {
    DEFAULT_REGEX,
    c_cpp,
    golang,
    java,
    javascript,
    lua,
    python,
}
