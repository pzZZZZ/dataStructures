class Dictionary {
  items: Object;
  constructor() {
    this.items = {};
  }
  /**
   * @method set 设置字典的键值对
   * @param { String } key 键
   * @param {*} value 值
   */
  set(key = '', value = '') {
    this.items[key] = value;
    return this;
  }
  /**
   * @method get 获取某个值
   * @param { String } key 键
   */
  get(key = '') {
    return this.has(key) ? this.items[key] : undefined;
  }
  /**
   * @method has 判断是否含有某个键的值
   * @param { String } key 键
   */
  has(key = '') {
    return this.items.hasOwnProperty(key);
  }
  /**
   * @method remove 移除元素
   * @param { String } key
   */
  remove(key) {
    if (!this.has(key)) return false;
    delete this.items[key];
    return true;
  }
  // 展示字典的键
  keys() {
    return Object.keys(this.items).join(' ');
  }
  // 字典的大小
  size() {
    return Object.keys(this.items).length;
  }
  // 展示字典的值
  values() {
    return Object.values(this.items).join(' ');
  }
  // 清空字典
  clear() {
    this.items = {};
    return this;
  }
}
export default Dictionary;
