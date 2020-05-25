var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function convertTempFromKtoF(kTemp) {
    var kelvinConversionFactor = 273.15;
    var fTemp = (((Number(kTemp) - kelvinConversionFactor) * 9) / 5) + 32;
    return fTemp;
}
function showWeather(cities) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, response, i, apiStringByName, apiStringByZip, weatherData, tempInF;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = 'ce6afba319ef13d82791a0ae2b332982';
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < cities.length)) return [3 /*break*/, 8];
                    if (!isNaN(+cities[i])) return [3 /*break*/, 3];
                    apiStringByName = 'https://api.openweathermap.org/data/2.5/weather?q=' + cities[i] + '&appid=' + apiKey;
                    return [4 /*yield*/, fetch(apiStringByName)];
                case 2:
                    response = _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    apiStringByZip = 'https://api.openweathermap.org/data/2.5/weather?zip=' + cities[i].trim() + '&appid=' + apiKey;
                    return [4 /*yield*/, fetch(apiStringByZip)];
                case 4:
                    response = _a.sent();
                    _a.label = 5;
                case 5: return [4 /*yield*/, response.json()];
                case 6:
                    weatherData = _a.sent();
                    tempInF = convertTempFromKtoF(weatherData.main.temp);
                    console.log(weatherData);
                    console.log('Time: ' + new Date().toUTCString() + '\t City: ' + weatherData.name + '\t Current temperature: ' + tempInF.toFixed(0) + '\t Weather: ' + weatherData.weather[0].description);
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/, 0];
            }
        });
    });
}
//# sourceMappingURL=showweather.js.map