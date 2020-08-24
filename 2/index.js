/**
 * Функция проверяет является ли строка корректным числом
 * @param str
 * @returns {boolean}
 */
function isNumber(str) {
    const preparedStr = str.trim();
    return (
        /^[-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?$/.test(preparedStr) ||
        /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(preparedStr)
    );
}
module.exports = isNumber;
