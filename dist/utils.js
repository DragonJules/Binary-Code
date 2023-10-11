var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const wait = (delay) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, _) => {
        setTimeout(resolve, delay);
    });
});
export const randomItemInList = (list, exclude) => {
    if (exclude != undefined)
        list.splice(list.indexOf(exclude), 1);
    return list[Math.floor(Math.random() * list.length)];
};
export const minmax = (value, min, max) => {
    return Math.max(min, Math.min(value, max));
};
export const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=utils.js.map