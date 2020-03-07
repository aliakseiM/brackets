module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        let cfg = bracketsConfig[i].join('');
        if (str.includes(cfg)) {
            str = str.replace(cfg, '');
            i = -1;
        }
    }
    return str.length === 0;
}
