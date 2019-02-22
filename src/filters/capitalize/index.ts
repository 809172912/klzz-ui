/*
* 过滤器作用
* 将字符串的首字母变成大写
* */
export default function (value: string): string {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}